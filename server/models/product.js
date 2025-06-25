import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({

    productName: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: "Please enter the description" },
    productImg: { type: String, required: true },
    category:{type: Schema.Types.ObjectId, ref:"Category"},
    stock: { type: Number, required: true, default: 1, min: 0 },
    isStock: { type: Boolean, default: true },

}, { timestamps: true });

const Product = mongoose.model("Product",productSchema);

export default Product;
