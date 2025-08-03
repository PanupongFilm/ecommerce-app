import mongoose, { Schema } from 'mongoose';

const tagSchema = new Schema({
    
    name:{type:String, required: true, unique: true, trim: true},
    textColor:{type:String, trim: true, default:"#000000"},
    bgColor:{type:String , trim: true, default:"#000000"}
    

},{timestamps: true});

const Tag = mongoose.model("Tag",tagSchema);

export default Tag;