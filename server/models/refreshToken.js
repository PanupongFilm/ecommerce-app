import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const refreshTokenSchema = new Schema({

    token: {type:String, required:true, unique: true},
    userId: {type:Schema.Types.ObjectId, ref:"User"},
    createAt:{type:Date,default: Date.now},
    expiresAt:{type:Date,required: true}

});


// Create the Refresh Token
refreshTokenSchema.static.generateRefreshToken = function(){
    return crypto.randomBytes(64).toString('hex');
}

// Hashing Token
refreshTokenSchema.pre('save',async function(next){
    try{

        if(!this.isModified('token')) return next();

        const salt = await bcrypt.genSalt(Number(process.env.SALT_FACTOR));
        this.token = await bcrypt.hash(this.token,salt);
        next();

    }catch(error){
        console.error("Error from /server/models/refreshToken.js at hashing token function: "+error);
        throw error;
    }
});

// Compare Token

refreshTokenSchema.methods.compareRefreshToken = async function(input){
    try{
        const isMatch = await bcrypt.compare(input,this.token);
        return isMatch;
        
    }catch(error){
        console.error("Error from /server/models/refreshToken.js at comparing token function: "+error);
        throw error;
    }
}

const refreshToken = mongoose.model("RefreshToken",refreshTokenSchema);

export default refreshToken;