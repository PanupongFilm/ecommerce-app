import express from 'express';
import { sendOTP, verifyOTP } from '../controllers/auth/otp.js';
import { authVerifying } from '../middlewares/auth.js';

const router = express.Router();

router.post('/sending',sendOTP);

router.post('/verifying',authVerifying,verifyOTP);


export default router;