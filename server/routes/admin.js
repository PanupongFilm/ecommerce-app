import express from 'express';
import { uploadFileToCloudJpg, uploadFileToCloudPng, deleteFileFromCloudPng } from '../controllers/admin/fileManagement.js';
import upload from '../middlewares/uploadImage.js';

const router = express.Router();

//File Management
router.post('/file/upload/jpg', upload.single('avatar'), uploadFileToCloudJpg);
router.post('/file/upload/png', upload.single('avatar'), uploadFileToCloudPng);
router.delete('/file/delete',deleteFileFromCloudPng);



export default router;