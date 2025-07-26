import express from "express";
import {
  addProduct,
  productList,
  removeProduct,
  singleProduct,
} from "../../controllers/products/product.controller.js";
import upload from "../../middleware/multer.js";
import { adminLogin } from "../../controllers/auth/user.controller.js";
import { adminUth } from "../../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  '/product', adminUth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.get("/all_products",adminUth, productList);
productRouter.delete("/deleteProduct",adminUth, removeProduct);
productRouter.post("/getProduct",adminUth, singleProduct);

export default productRouter;
