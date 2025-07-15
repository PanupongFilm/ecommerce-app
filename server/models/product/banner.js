import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema({

    img:{type:String, required: true, trim:true},
    tag:{type:String , default:"" , trim:true},
    title:{type:String,default:"", trim:true},
    subTitle:{type:String,default:"", trim:true},

    tagColor:{type:String, default:"#000000" , trim:true},
    titleColor:{type:String, default:"#000000" , trim:true},
    subTitleColor:{type:String, default:"#000000" , trim:true},
    buttonColor:{type:String, default:"#000000" , trim:true},

},{timestamps:true});

const Banner = mongoose.model("Banner",bannerSchema);

export default Banner;