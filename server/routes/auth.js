import express from 'express';
import {login , logout , refreshToken, check, forgotPassword, resetPassword} from '../controllers/auth.js';
import {authMiddleware, authResetPassword, authVerifying} from '../middlewares/auth.js';
import googleAuth from '../controllers/googleAuth.js'

const router = express.Router();


router.post('/login',login);

router.post('/logout',authMiddleware,logout);

router.post('/refresh-token',refreshToken);

router.post('/google-auth',googleAuth);

router.get('/check',authMiddleware,check);

router.get('/check/reset-password',authResetPassword,check);

router.get('/check/data-verifying',authVerifying,check);

router.post('/forgot-password',forgotPassword);

router.patch('/reset-password',authResetPassword,resetPassword);

export default router;