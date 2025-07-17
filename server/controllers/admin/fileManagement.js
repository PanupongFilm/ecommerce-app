import fs from 'fs/promises';
import { compressJpgFile, compressPngFile } from '../../utils/compressFile.js';
import cloudinary from '../../configs/cloudinary.js';

const uploadToCloud = async (newFilepath) => {

    const data =await cloudinary.uploader.upload(newFilepath, {
        folder: 'Ecommerce_Folder',
        public_id: Date.now().toString(),
        overwrite: true,
        resource_type: 'image'
    });
    await fs.unlink(newFilepath);
    return data;
}

const uploadFileToCloudJpg = async (req, res, next) => {
    try {

        const newFilepath = await compressJpgFile(req.file.path, req.file.filename);
        await fs.unlink(req.file.path);
        const data = await uploadToCloud(newFilepath);

        return res.status(201).json({ message: "Upload file successfully", url: data.secure_url});

    } catch (error) {
        console.error("Error from /server/controllers/admin/fileManagement.js at uploadFileToCloudJpg: ", error);
        next(error);
    }
}

const uploadFileToCloudPng = async (req, res, next) => {
    try {
        await compressPngFile(req.file.path, req.file.filename);
        await fs.unlink(req.file.path);
        const data = await uploadToCloud(newFilepath);

        return res.status(201).json({ message: "Upload file successfully", url:data.secure_url});

    } catch (error) {
        console.error("Error from /server/controllers/admin/fileManagement.js at uploadFileToCloudPng: ", error);
        next(error);
    }
}




export { uploadFileToCloudJpg };