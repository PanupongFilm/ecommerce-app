import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({

    name:{type:String,required:true,unique:true, trim:true},
    img:{type:String,required: true, default:""},

},{timestamps: true});


const Category = mongoose.model("Category",categorySchema);

export default Category;