import mongoose,{Schema} from "mongoose";

const typeSchema = new Schema({

     name:{type:String,required:true,unique:true, trim:true},
     img:{type:String,required:true},
     imgPublicId:{type:String, required: true, trim: true},
     productCount:{type:Number, default: 0, min: 0},
     category:{type:Schema.Types.ObjectId, ref: "Category"}
     
},{timestamps:true});

const Type = mongoose.model("Type",typeSchema);


typeSchema.methods.calProductCount = async function(){
     
}

export default Type;