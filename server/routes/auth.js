import express from 'express';
import {login , logout , refreshToken, check, forgotPassword, resetPassword} from '../controllers/auth.js';
import {authMiddleware, authResetPassword} from '../middlewares/auth.js';
import googleAuth from '../controllers/googleAuth.js'

const router = express.Router();


router.post('/login',login);

router.post('/logout',authMiddleware,logout);

router.post('/refresh-token',refreshToken);

router.get('/check',authMiddleware,check);

router.get('/check/reset-password',authResetPassword,check);

router.post('/google-auth',googleAuth);

router.post('/forgot-password',forgotPassword);

router.patch('/reset-password',authResetPassword,resetPassword);

export default router;