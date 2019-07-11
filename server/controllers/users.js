import jwt from 'jsonwebtoken';
import sanitizeHtml from 'sanitize-html';

import User from '../models/User';
import { validateLoginInput } from '../validation/login';
import { validateRegisterInput } from '../validation/register';

/**
 * @route POST /api/users/register
 * 
 * @description Register a new user
 * 
 * @access Public
 * 
 * @param name : String
 * @param email : String
 * @param password : String
 * @param password2 : String
 */
const register = (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      }
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
}

/**
 * @route POST /api/users/login
 *
 * @description Login user and return JWT Token
 *
 * @access Public
 *
 * @param name : String
 * @param password : String
 */
const login = (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = sanitizeHtml(req.body.email);
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(async user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }
    // Check password
    const validPassword = await user.isValidPassword(password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ passwordincorrect: 'Password incorrect' });
    }
    // Valid user, return login token
    const payload = {
      id: user.id,
      name: user.name,
    };
    // Sign token
    jwt.sign(
      payload,
      process.env.SECRET_OR_KEY,
      {
        expiresIn: 31556926 // 1 year in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
      }
    );
  });
}

export {
  register,
  login,
};
