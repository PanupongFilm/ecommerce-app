import mongoose, { Schema } from 'mongoose';
import crypto from 'crypto';



const otpSchema = new Schema({

    email:{type:String , required: true, lowercase: true, trim: true},
    otp:{type:String, required: true},
    purpose:{type:String, required:true, enum:['reset-password','verify-email']},

    expiresAt:{type:Date, default: ()=>{
        return new Date(Date.now()+ 1 * 60 * 1000);
    }}

},{timestamps: true});

otpSchema.index({expiresAt: 1},{expireAfterSeconds: 0});
otpSchema.index({ email: 1, purpose: 1 }, { unique: true });

otpSchema.statics.generateOTP = function(){
    try{
        return crypto.randomInt(100000,1000000).toString();

    }catch(error){
        console.error("Error from /server/models/otp.js at generateOTP static method: " + error);
        throw error;
    }
}

const Otp = mongoose.model("Otp",otpSchema);

export default Otp;