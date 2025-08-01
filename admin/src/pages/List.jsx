import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { MdDeleteOutline } from "react-icons/md";


const List = () => {
  const [products , setProducts] = useState([]);

  const handleProducts = async ()=>{
    try{
      // e.preventDefault();
    const response = await axios.get(`${backendUrl}/api/v1/products/all_products`)
    console.log("🚀 ~ handleProducts ~ response:", response)
    
    if(response.status === 200){
      setProducts(response.data);
    }else{
      toast.error(response.data.message);
    }
    }catch(error){
      console.log("🚀 ~ handleProducts ~ error:", error)
      toast.error(error.message);
    }
  }

  const deleteProduct = async (_id) => {
    const response = await axios.delete(`${backendUrl}/api/v1/products/deleteProduct/${_id}`)
    if(response.status === 200){
      toast.success(response.data.message);
      handleProducts();
    }else{
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
    handleProducts()
  },[]);
  return (
    <div className='w-full flex flex-col gap-3'>
      <p className='text-gray-500 font-medium'>All Products List</p>
      <div className='grid-cols-6 items-center justify-items-stretch gap-2 border border-gray-300 bg-gray-100 px-2 font-bold hidden md:grid'>
        <p className='col-span-1'>Images</p>
        <p className='col-span-2'>Product Name</p>
        <p className='col-span-1'>Category</p>
        <p className='col-span-1'>Price</p>
        <p className='col-span-1 text-center'>Action</p>
      </div>
      <div className='flex flex-col gap-3'>
        {
          products.map((item , index) => (
            <div key={index} className='min-h-[50px] grid-cols-1 md:grid-cols-6 md:items-center justify-items-start  md:gap-2 border border-gray-300 bg-gray-50 p-2 grid'>
              <img src={item.images[0]} alt="" className='w-12 col-span-2 md:col-span-1'/>
              <p className='col-span-1 md:col-span-2'>{item.name}</p>
              <p className='col-span-2 md:col-span-1'>{item.category}</p>
              <p className='col-span-1'>{currency}{item.price}</p>
              <div className='col-span-1 md:flex items-center justify-center w-full'>
                <MdDeleteOutline onClick={() => deleteProduct(item._id)} className='text-xl' />
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default List