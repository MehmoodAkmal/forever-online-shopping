import express from 'express';
import { adminLogin, loginUser, register } from '../../controllers/auth/user.controller.js';
const authRouter = express.Router();

authRouter.post('/login' , loginUser)
authRouter.post('/register' , register)
authRouter.post('/adminLogin', adminLogin);

export default authRouter;