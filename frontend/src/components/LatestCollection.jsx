import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItems from "./ProductItems";

const LatestCollection = () => {
  const {products} = useContext(ShopContext);
  const [latestProducts , setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[products])
  
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio deleniti necessitatibus neque repudiandae labore ratione quam ut quidem deserunt.
        </p>
      </div>
      
      {/* rendring products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item, index)=>(
            <ProductItems key={index} _id={item._id} images={item.images} name={item.name} price={item.price}/>
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
