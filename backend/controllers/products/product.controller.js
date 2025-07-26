import {v2 as cloudinary} from 'cloudinary';
import productModel from '../../models/productModel.js';


export const addProduct = async (req , res) => {
    let response = {};
    try{
        const {name, description, price, category, subCategory, sizes, bestSeller} = req.body;
        const image1 = req.files?.image1 && req.files?.image1[0];
        const image2 = req.files?.image2 && req.files?.image2[0];
        const image3 = req.files?.image3 && req.files?.image3[0];
        const image4 = req.files?.image4 && req.files?.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined);
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image', timeout: 60000});
                return result.secure_url
            })
        )

        const productData = new productModel({
            name,
            description,
            price,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true : false,
            images: imagesUrl,
            date: Date.now()
        });

        await productData.save();

        response.status = 200;
        response.message = {message: "product added successfully" , productData};
    }catch(error){
        console.log("🚀 ~ addProduct ~ error:", error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).json(response.message);
}

export const productList = async (req , res) => {
    let response = {};
    try{
        const productList = await productModel.find();
        response.status = 200;
        response.message = productList
    }catch(error){
        console.log("🚀 ~ addProduct ~ error:", error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).json(response.message);
}

export const singleProduct = async (req , res) => {
    let response = {};
    try{
        response.status = 200;
        response.message = "Product Added Successfully"
    }catch(error){
        console.log("🚀 ~ addProduct ~ error:", error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).json(response.message);
}

export const removeProduct = async (req , res) => {
    let response = {};
    try{
        const {id} = req.body;
        const product = await productModel.findByIdAndDelete(id);
        if(!product){
            throw new Error("Product not found");
        }
        response.status = 200;
        response.message = "Product Added Successfully"
    }catch(error){
        console.log("🚀 ~ addProduct ~ error:", error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).json(response.message);
}