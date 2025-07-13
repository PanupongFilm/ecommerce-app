import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({

    name:{type:String,required:true,unique:true, trim:true},
    img:{type:String,required: true},
    productCount:{type:Number,default: 0, min:0}

},{timestamps: true});


const Category = mongoose.model("Category",categorySchema);

export default Category;