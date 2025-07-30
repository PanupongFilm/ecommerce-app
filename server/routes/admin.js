import express from 'express';
import { uploadFileToCloudJpg, uploadFileToCloudPng, deleteFileFromCloudPng } from '../controllers/admin/fileManagement.js';
import upload from '../middlewares/uploadImage.js';
import { createBanner, addMainBanner, deleteMainBanner, updateBanner, getAllBanner } from '../controllers/admin/bannerManagement.js';

const router = express.Router();

//File Management
router.post('/file/upload/jpg', upload.single('avatar'), uploadFileToCloudJpg);
router.post('/file/upload/png', upload.single('avatar'), uploadFileToCloudPng);
router.delete('/file/delete',deleteFileFromCloudPng);


//Banner Management
router.post('/banner/create',createBanner);
router.post('/banner/add',addMainBanner);
router.delete('/banner/delete',deleteMainBanner);
router.patch('/banner/update',updateBanner);
router.get('/banner/get',getAllBanner);

//Product Magement


export default router;