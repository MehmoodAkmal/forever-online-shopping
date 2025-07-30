import React, { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {

    const [image1 , setImage1] = useState(false);
    const [image2 , setImage2] = useState(false);
    const [image3 , setImage3] = useState(false);
    const [image4 , setImage4] = useState(false);
    const [name , setName] = useState("");
    const [Description , setDescription] = useState("");
    const [price , setPrice] = useState("");
    const [category , setCategory] = useState("Men");
    const [subCategory , setSubCategory] = useState("Topwear");
    const [bestseller , setBestseller] = useState(false);

  return (
    <form className="flex flex-col w-full item-start gap-3">
      <div>
        <p className="mb-3 text-sm">Upload image</p>
        <div className="flex items-center gap-3">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="text-sm text-gray-600 mb-1">Product Name</p>
        <input
          className="w-full max-w-[500px] rounded-md placeholder:text-base px-2 py-1"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="text-sm text-gray-600 mb-1">Product Description</p>
        <textarea
          className="w-full max-w-[500px] rounded-md placeholder:text-base px-2 py-1 resize-none"
          type="text"
          placeholder="Type Content Here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center max-w-[500px] justify-between gap-3 sm:gap-16">
        <div>
          <p className="text-sm text-gray-600">Product Category</p>
          <select className="w-full px-2 py-1 mt-1 rounded-md">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="text-sm text-gray-600">Sub Category</p>
          <select className="w-full px-2 py-1 mt-1 rounded-md">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="text-sm">Price</p>
          <input
            type="number"
            placeholder="25"
            className="max-w-[100px] px-2 py-1 mt-1 rounded-md"
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm">Product Sizes</p>
        <div className="flex items-center gap-2">
          <div>
            <p className="bg-slate-100 border border-gray-300 px-3 py-2 cursor-pointer">S</p>
          </div>
          <div>
            <p className="bg-slate-100 border border-gray-300 px-3 py-2 cursor-pointer">M</p>
          </div>
          <div>
            <p className="bg-slate-100 border border-gray-300 px-3 py-2 cursor-pointer">L</p>
          </div>
          <div>
            <p className="bg-slate-100 border border-gray-300 px-3 py-2 cursor-pointer">XL</p>
          </div>
          <div>
            <p className="bg-slate-100 border border-gray-300 px-3 py-2 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex item-center gap-2">
        <input type="checkbox" id="bestseller" />
        <label htmlFor="bestseller" className="text-sm">Add to bestseller</label>
      </div>

      <button type="submit" className="w-28 bg-black text-white text-base py-1 px-3 rounded-md">ADD</button>
    </form>
  );
};

export default Add;
