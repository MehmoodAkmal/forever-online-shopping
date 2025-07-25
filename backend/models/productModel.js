import mongoose from "mongoose";
import productSchema from "../schema/productSchema.js";

const productModel = mongoose.model('product', productSchema);

export default productModel;