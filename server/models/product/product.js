import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({

    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: "Please enter the description" },
    imgs: { type: [String], default: [""] },
    stock: { type: Number, required: true, default: 1, min: 0 },
    isStock: { type: Boolean, default: true },

    rating: { type: Number, default: 0, min: 0, max: 5 },
    soldCount: { type: Number, default: 0, min: 0 },

    category: { type: Schema.Types.ObjectId, ref: "Category" },
    type: { type: Schema.Types.ObjectId, ref: "Type" },
    tag: { type: Schema.Types.ObjectId, ref: "Tag" }

}, { timestamps: true });

productSchema.pre('save', function (next) {
    if (!this.isModified('stock')) return next();

    if (this.stock === 0) {
        this.isStock = false;
    }
    else {
        this.isStock = true;
    }
    return next();
});

productSchema.methods.increaseraRating = function (rating) {

}

productSchema.methods.increasesoldCount = function (counnt) {

}

const Product = mongoose.model("Product", productSchema);

export default Product;
