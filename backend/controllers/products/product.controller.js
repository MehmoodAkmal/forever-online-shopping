import {v2 as cloudinary} from 'cloudinary';
import productModel from '../../models/productModel.js';


export const addProduct = async (req, res) => {
  let response = {};
  try {
    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;
    const imageFiles = req.files || [];

    const imagesUrl = await Promise.all(
      imageFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: 'image',
          timeout: 60000,
        });
        return result.secure_url;
      })
    );

    const productData = new productModel({
      name,
      description,
      price,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller === "true",
      images: imagesUrl,
      date: Date.now(),
    });

    await productData.save();

    response.status = 200;
    response.message = { message: "Product added successfully", productData };
  } catch (error) {
    console.log("🚀 ~ addProduct ~ error:", error);
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).json(response.message);
};


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
        const {id} = req.body;
        const product = await productModel.findById(id);
        if(!product){
            throw new Error("Product not found");
        }   
        response.status = 200;
        response.message = {product: product};
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
        const {_id} = req.params;
        const product = await productModel.findByIdAndDelete(_id);
        if(!product){
            throw new Error({message: "Product not found"});
        }
        response.status = 200;
        response.message = {message: "Product Deleted Successfully"}
    }catch(error){
        console.log("🚀 ~ addProduct ~ error:", error)
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).json(response.message);
}