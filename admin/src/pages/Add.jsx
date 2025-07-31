import React, { useState } from "react";
// import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { ImageUploader } from "../components/ImageUploader";

export const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle form submit
  const handleSubmitt = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      images.forEach((img) => {
        formData.append(`images`, img);
      });

      const response = await axios.post(
        `${backendUrl}/api/v1/products/product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setSizes([]);
        setBestseller(false);
        setImages([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // handle checkbox for size selection
  const handleSizeChange = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      <form onSubmit={handleSubmitt} className="flex flex-col gap-4">
        {/* name input */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Product Name"
          className="border px-3 py-2 rounded"
          required
        />

        {/* description input */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product Description"
          className="border px-3 py-2 rounded"
          required
        ></textarea>

        {/* price input */}
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Product Price"
          className="border px-3 py-2 rounded"
          required
        />

        {/* category dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>

        {/* sub-category dropdown */}
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="border px-3 py-2 rounded"
          placeholder= "category"
        >
          <option>Topwear</option>
          <option>Bottomwear</option>
          <option>Footwear</option>
        </select>

        {/* size checkboxes */}
        <div className="flex flex-wrap gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <label key={size} className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={sizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>

        {/* bestseller toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="bestseller"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
          />
          <label htmlFor="bestseller" className="text-sm">
            Add to Bestseller
          </label>
        </div>

        {/* image uploader */}
        <ImageUploader images={images} setImages={setImages} />

        {/* submit button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-2 rounded hover:bg-zinc-800 flex justify-center items-center gap-2"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Add;
