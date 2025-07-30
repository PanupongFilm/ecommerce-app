import fs from 'fs/promises';
import { compressJpgFile, compressPngFile } from '../../utils/compressFile.js';
import cloudinary from '../../configs/cloudinary.js';

const uploadToCloud = async (newFilepath) => {

    const data = await cloudinary.uploader.upload(newFilepath, {
        folder: process.env.CLOUDINARY_FOLDER,
        public_id: Date.now().toString(),
        overwrite: true,
        resource_type: 'image'
    });
    await fs.unlink(newFilepath);
    return data;
}

const uploadFileToCloudJpg = async (req, res, next) => {
    try {
        let data;

        if (req.body.mode === 'product') {
            const newFilepath = await compressJpgFile(req.file.path, req.file.filename);
            await fs.unlink(req.file.path);
            data = await uploadToCloud(newFilepath);
        } else {
            data = await uploadToCloud(req.file.path);
        }

        return res.status(201).json({ message: "Upload file successfully", url: data.secure_url, public_id: data.public_id });

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

        return res.status(201).json({ message: "Upload file successfully", url: data.secure_url, public_id: data.public_id });

    } catch (error) {
        console.error("Error from /server/controllers/admin/fileManagement.js at uploadFileToCloudPng: ", error);
        next(error);
    }
}

const deleteFileFromCloudPng = async (req, res, next) => {
    try {

        const publicId = req.query.public_id;
        if (!publicId) {
            return res.status(400).json({ error: "Missing public_id in query" });
        }

        await cloudinary.uploader.destroy(publicId);
        return res.status(200).json({ message: "Successfully deleted file from cloud" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/fileManagement.js at deleteFileFromCloud: ", error);
        next(error);
    }
}




export { uploadFileToCloudJpg, uploadFileToCloudPng, deleteFileFromCloudPng };