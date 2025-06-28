import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next)=>{
    try{
        const currentAccessToken = req.cookies.accessToken
        if(!currentAccessToken) return res.status(401).send({message: "Access token not found or invalid"});

        const payload = jwt.verify(currentAccessToken,process.env.TOKEN_SECRET);
        req.user = payload;
        next();

    }catch(error){
        console.error("Error from /server/middlewares/auth.js at authMiddleware: " + error);
        return res.status(401).send({message: "Access token not found or invalid"});
    }
};

export default authMiddleware;