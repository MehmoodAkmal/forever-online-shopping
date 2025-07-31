import { useRef } from "react";
import { assets } from "../assets/assets.js";

export const ImageUploader = ({ images, setImages }) => {
  const fileInputRef = useRef();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <p className="mb-3 text-sm">Upload image</p>
      <div className="flex items-center gap-3 flex-wrap">
        {images.map((img, index) => (
          <img
            key={index}
            src={URL.createObjectURL(img)}
            className="w-20 h-20 object-cover border border-gray-300"
            alt={`preview-${index}`}
          />
        ))}

        <button
          type="button"
          onClick={triggerFileInput}
          className="w-20 h-20 flex items-center justify-center border border-dashed border-gray-400 cursor-pointer"
        >
          <img src={assets.upload_area} alt="" />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          onChange={handleImageUpload}
          accept="image/*"
          multiple
        />
      </div>
    </div>
  );
};
