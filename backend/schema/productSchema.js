import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    images: {type: Array, required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    sizes: {type: Array, required: true},
    bestSeller: {type: Boolean},
    date: {type: Number, required:true},
});

export default productSchema;