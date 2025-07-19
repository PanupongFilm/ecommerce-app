import mongoose, { Schema } from 'mongoose';

const tagSchema = new Schema({
    
    name:{type:String, required: true, unique: true, trim: true}

},{timestamps: true});

const Tag = mongoose.model("Tag",tagSchema);

export default Tag;