import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    categoryName: {type:String , required: true},
    description: { type: String, default: "Please enter the description" }
    
},{timestamps: true});

const Category = mongoose.model("Category",categorySchema);

export default Category;