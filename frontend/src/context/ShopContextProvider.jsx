import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search , setSearch] = useState(' ');
  const [showSearch , setShowSearch] = useState(false);
  const [cartItem , setCartItem] = useState({});
  const [products , setProducts] = useState([]);
  const navigate = useNavigate()

  const addToCart = async (itemId , size) => {
    if(!size){
      toast.error('Select product size')
      return;
    }
    let cartData = structuredClone(cartItem);
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1
      }else{
        cartData[itemId][size] = 1
      }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1
    }
    setCartItem(cartData)
  }

  const getCartCount = () => {
    let totalCount = 0
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try{
          if(cartItem[items][item] > 0){
            totalCount += cartItem[items][item];
          }
        }catch(error){
        console.log("🚀 ~ getCartCount ~ error:", error)

        }
      }
    }
    return totalCount;
  }

  const updateQuantity = async (itemId , size, quantity)=>{
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity
    setCartItem(cartData)
  }

  const getCartAmount = () => {
    let totalAmount = 0
    for(const items in cartItem){
      let itemInfo = products.find((product)=>product._id === items);
      for(const item in cartItem[items]){
        try{
          if(cartItem[items][item] > 0){
            totalAmount += itemInfo.price * cartItem[items][item]; 
          }
        }catch(error){
        console.log("🚀 ~ getCartAmount ~ error:", error)

        }
      }
    }
    return totalAmount;
  }

  const productsData = async () => {
    try{
      const response = await axios.get(`${backendUrl}/api/v1/products/all_products`);
      if(response.status === 200){
        setProducts(response.data);
        console.log(products)
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      console.log("🚀 ~ productsData ~ error:", error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    productsData();
  },[])

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    productsData,
  };

  

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
