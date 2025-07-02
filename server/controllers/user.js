import {User , validation} from '../models/user.js';

const register = async (req,res)=>{
    try{
        const {error} = validation(req.body);
        if(error) return res.status(400).json({message: error.details[0].message});

        const userNameCheck = await User.findOne({userName: req.body.userName});
        if(userNameCheck) return res.status(409).json({message: "User name is already taken"});

        const userEmailcheck = await User.findOne({email: req.body.email});
        if(userEmailcheck) return res.status(409).json({message: "User with given email already exists"});

        await new User(req.body).save();
        return res.status(201).json({message: "User created successfully"});

    }catch(error){
        console.error("error from /server/controllers/user.js at registerUser controller: " + error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export default register;