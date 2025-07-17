import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({

    destination:(req,file,callback)=>{
        callback(null,'upload/');
    },

    filename:(req,file,callback)=>{
        const ext = path.extname(file.originalname);
        callback(null,Date.now() + ext);
    }
});

const upload = multer({storage});

export default upload;