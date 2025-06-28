import express from 'express';
import {login , logout , refreshToken} from '../controllers/auth.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();


router.post('/login',login);

router.post('/logout',authMiddleware,logout);

router.post('/refresh-token',refreshToken);


export default router;