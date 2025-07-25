import express from "express";
import {
  addProduct,
  productList,
  RemoveProduct,
  singleProduct,
} from "../../controllers/products/product.controller.js";
import upload from "../../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  '/product',
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.get("/all_products", productList);
productRouter.delete("/delete_product", RemoveProduct);
productRouter.delete("/single_product", singleProduct);

export default productRouter;
