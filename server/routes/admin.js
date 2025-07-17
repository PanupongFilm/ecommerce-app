import express from 'express';
import { uploadFileToCloudJpg } from '../controllers/admin/fileManagement.js';
import upload from '../middlewares/uploadImage.js';

const router = express.Router();

//File Management
router.post('/upload/jpg',upload.single('avatar'),uploadFileToCloudJpg);
router.post('/upload/png',upload.single('avatar',))



export default router;