import express from 'express';
import { loginUser, register } from '../../controllers/auth/user.controller.js';
const authRouter = express.Router();

authRouter.post('/login' , loginUser)
authRouter.post('/register' , register)

export default authRouter;