import sharp from 'sharp';

const compressJpgFile = async (path, fileName) =>{
    try{
        await sharp(path)
        .resize(800)
        .jpeg({quality: 80})
        .toFile('upload/compressed-'+fileName);
        return "upload/compressed-" + fileName;

    }catch(error){
        console.error("Error from /server/utils/compressFile.js at fileCompression: ",error);
        throw(error);
    }
};

const compressPngFile = async (path, fileName) =>{
    try{
      
        await sharp(path)
        .resize(800)
        .png({
            compressionLevel: 9
        })
        .toFile("upload/compressed-" + fileName);
        return "upload/compressed-" + fileName;

    }catch(error){
        console.error("Error from /server/utils/compressFile.js at fileCompression: ",error);
        throw(error);
    }
};



export {compressJpgFile, compressPngFile};