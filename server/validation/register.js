import { isEmail, isLength, equals } from 'validator';
import isEmpty from 'is-empty';
import sanitizeHtml from 'sanitize-html';

const validateRegisterInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? sanitizeHtml(data.name) : "";
  data.email = !isEmpty(data.email) ? sanitizeHtml(data.email) : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default {
  validateRegisterInput
};
