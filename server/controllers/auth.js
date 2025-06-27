import { User, validation } from "../models/user";
import { refreshToken } from '../models/refreshToken';
validation

const login = (req,res) =>{
    try{
        

    }catch(error){
        console.error("Error from /server/controllers/auth.js at loginUser Controller: "+error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const logout = (req,res) =>{
    try{

    }catch(error){
        console.error("Error from /server/controllers/auth.js at logoutUser Controller: "+error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const refreshToken = (req,res) =>{
    try{

    }catch(error){
        console.error("Error from /server/controllers/auth.js at refreshTokenUser Controller: "+error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export{
    login, logout, refreshToken
}