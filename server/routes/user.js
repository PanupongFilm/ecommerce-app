import express from 'express';
import { register, completeAccountSetup} from '../controllers/user.js';
import authMiddleware from '../middlewares/auth.js';
const router = express.Router();


router.post('/register',register);

router.post('/account-setup',authMiddleware,completeAccountSetup);


export default router;