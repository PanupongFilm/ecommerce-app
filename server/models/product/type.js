import mongoose,{Schema} from "mongoose";

const typeSchema = new Schema({

     name:{type:String,required:true,unique:true, trim:true},
     img:{type:String,required:true},
     productCount:{type:Number, default: 0, min0}
},{timestamps:true});

const Type = mongoose.model("Type",typeSchema);

export default Type;