import express from "express";
import {
  addProduct,
  productList,
  removeProduct,
  singleProduct,
} from "../../controllers/products/product.controller.js";
import upload from "../../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  '/product',
  upload.array('images'),
  addProduct
);
productRouter.get("/all_products", productList);
productRouter.delete("/deleteProduct", removeProduct);
productRouter.post("/getProduct", singleProduct);

export default productRouter;
