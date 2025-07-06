import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const userSchema = new Schema({

    userName: { type: String, required: function() { return !this.googleId; }, unique: true, trim: true,
     default: function(){if(this.googleId && !this.userName){return crypto.randomBytes(16).toString('hex')}}},
    password: { type: String, required: function() { return !this.googleId; } },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    cart: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }
    ],

    googleId: { type: String, unique: true, sparse: true },


}, { timestamps: true });

// Hashing Password When Registering or Changing Password
userSchema.pre('save', async function(next){
    try{

        if(!this.isModified('password')) return next();

        const salt = await bcrypt.genSalt(Number(process.env.SALT_FACTOR));
        this.password = await bcrypt.hash(this.password,salt);
        next();


    }catch(error){
        console.error("Error from /server/models/user.js at hashing function: " + error);
        next(error);
    }
});


// Compare Password When Login
userSchema.methods.comparePassword = async function(input){
    try{
        const isMatch = await bcrypt.compare(input,this.password);
        return isMatch;

    }catch(error){
        console.error("Error from /server/model/user.js at comparePassword function: "+error);
        throw error;
    }
}


// Generate The Access Token When User Login
userSchema.methods.generateAccessToken = function(){
    try{
        const token = jwt.sign({
            _id : this._id,
            userName: this.userName,
            role: this.role

        },process.env.TOKEN_SECRET,{expiresIn: '15m'});

        return token;

    }catch(error){
        console.error("Error from /server/models/user.js at generateAccesToken function: "+error);
        throw error;
    }
}


// Input Validation When Registering or Changing the Password
const validation = (data) =>{

    if(!data) throw new Error("Data invalid");

    try{
        const schema = Joi.object({
            userName: Joi.string().label("User name"),
            email: Joi.string().email().label("Email"),
            password: passwordComplexity({
                min: 8,
                max: 32,
                lowerCase:1,
                upperCase:1,
                numeric:1,
                symbol:1,
                requirementCount: 4

            }).required().label("Password")
        });

        return schema.validate(data);

    }catch(error){
        console.error("Error from /server/models/user.js at validation function: "+ error);
        throw error;
    }
};

const User  = mongoose.model("User",userSchema);

export {User, validation};
