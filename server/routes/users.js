import express from 'express';

import * as userController from '../controllers/users';

const router = express.Router();

// POST /api/users/register
router.post('/register', userController.register);
// POST /api/users/login
router.post('/login', userController.login);

export default router;
