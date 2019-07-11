import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models/User';
import { validateLoginInput } from '../validation/login';
import { validateRegisterInput } from '../validation/register';

