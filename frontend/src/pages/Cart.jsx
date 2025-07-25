import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products , currency , cartItem , updateQuantity , navigate} = useContext(ShopContext);
  const [cardData , setCartData] = useState([]);

  useEffect(()=>{
     const tempData = [];
     for(const items in cartItem){
      for(const item in cartItem[items]){
        if(cartItem[items][item] > 0){
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
     }
     setCartData(tempData);
  },[cartItem])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3 text-center'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className=''>
        {
          cardData.map((item , index)=>{
            const productData = products.find((product)=> product._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-1 sm:px-2 sm:py-1 border border-gray-300 bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id , item.size , Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-20 px-1 sm:px-2 py-1' />
                <img onClick={()=>updateQuantity(item._id , item.size , 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end mt-5'>
            <button onClick={()=> navigate('/place-order')} className='uppercase bg-black text-sm cursor-pointer text-white px-3 py-2'>Proceed to checkout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
