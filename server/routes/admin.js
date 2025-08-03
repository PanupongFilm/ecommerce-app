import express from 'express';
import { uploadFileToCloudJpg, uploadFileToCloudPng, deleteFileFromCloudPng } from '../controllers/admin/fileManagement.js';
import upload from '../middlewares/uploadImage.js';
import { createBanner, addMainBanner, deleteMainBanner, updateBanner, getAllBanner } from '../controllers/admin/bannerManagement.js';
import {
    createCategory, deleteCategory, updateCategory, getAllCategories,
    createType, deleteType, updateType, getAllTypes,
    createTag, deleteTag, updateTag, getAllTags
} from '../controllers/admin/categoryManagement.js';
import { createProduct, updateProduct, deleteProduct, getAllProduct } from '../controllers/admin/productManagement.js';

const router = express.Router();

//File Management
router.post('/file/upload/jpg', upload.single('avatar'), uploadFileToCloudJpg);
router.post('/file/upload/png', upload.single('avatar'), uploadFileToCloudPng);
router.delete('/file/delete', deleteFileFromCloudPng);


//Banner Management
router.post('/banner/create', createBanner);
router.post('/banner/add', addMainBanner);
router.delete('/banner/delete', deleteMainBanner);
router.patch('/banner/update', updateBanner);
router.get('/banner/get', getAllBanner);


//Category,Type,Tag Management
router.post('/category/create', createCategory);
router.delete('/category/delete', deleteCategory);
router.patch('/category/update', updateCategory);
router.get('/category/get', getAllCategories);

router.post('/type/create', createType);
router.delete('/type/delete', deleteType);
router.patch('/type/update', updateType);
router.get('/type/get', getAllTypes);

router.post('/tag/create', createTag);
router.delete('/tag/delete', deleteTag);
router.patch('/tag/update', updateTag);
router.get('/tag/get', getAllTags);

//Product Management
router.post('/product/create',createProduct);
router.delete('/product/delete',deleteProduct);
router.patch('/product/update',updateProduct);
router.get('/product/get',getAllProduct);




export default router;