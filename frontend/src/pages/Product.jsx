import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { _id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [images, setImages] = useState("");
  const [size, setSize] = useState("");

  // const fetchProductData = async () => {
  //   products.map((item) => {
  //     console.log("🚀 ~ fetchProductData ~ item:", item)
  //     if (item._id === _id) {
  //       setProductData(item);
  //       setImage(item.image[0]);
  //       return null;
  //     }
  //   });
  // };

  useEffect(() => {
  if (products.length > 0) {
    console.log("_id" , _id)
    const foundProduct = products.find((item) => item._id === _id);
    console.log("🚀 ~ Product ~ foundProduct:", foundProduct)
    if (foundProduct) {
      setProductData(foundProduct);
      setImages(foundProduct.images[0]);
    }
  }
}, [_id, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((item, index) => (
              <img
                onClick={() => setImages(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 "
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={images} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 ">
          <h1 className="font-medium tex-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`${
                    item == size ? "border border-orange-500" : ""
                  } px-4 py-2 bg-gray-200 cursor-pointer`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id , size)} className="bg-black text-white font-medium text-sm px-5 py-3 active:bg-gray-800 cursor-pointer">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 bg-amber-600" />
          <div className="text-gray-500 text-sm mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="text-center py-10 text-gray-500">Loading product...</div>
  );
};

export default Product;
