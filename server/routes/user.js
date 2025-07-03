import express from 'express';
import { register, completeAccountSetup} from '../controllers/user.js';
const router = express.Router();


router.post('/register',register);

router.post('/account-setup',completeAccountSetup);


export default router;