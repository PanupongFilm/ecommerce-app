import sharp from 'sharp';

const compressJpgFile = async (path, fileName) => {
    try {
        await sharp(path)
            .resize({ width: 800, fit: 'inside', withoutEnlargement: true })
            .jpeg({
                quality: 100,
                chromaSubsampling: '4:4:4',
                mozjpeg: true,
                trellisQuantisation: true,
                overshootDeringing: true,
                optimizeScans: true,
                progressive: true,
            })
            .toFile('upload/compressed-' + fileName);
        return "upload/compressed-" + fileName;

    } catch (error) {
        console.error("Error from /server/utils/compressFile.js at fileCompression: ", error);
        throw (error);
    }
};

const compressPngFile = async (path, fileName) => {
    try {

        await sharp(path)
            .resize(800)
            .png({
                compressionLevel: 9
            })
            .toFile("upload/compressed-" + fileName);
        return "upload/compressed-" + fileName;

    } catch (error) {
        console.error("Error from /server/utils/compressFile.js at fileCompression: ", error);
        throw (error);
    }
};



export { compressJpgFile, compressPngFile };