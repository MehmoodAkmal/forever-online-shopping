import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method , setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border border-gray-300 px-3 py-2 w-full rounded'/>
          <input type="text" placeholder='Last Name' className='border border-gray-300 px-3 py-2 w-full rounded'/>
        </div>
        <input type="email" placeholder='Email Address' className='border border-gray-300 px-3 py-2 w-full rounded'/>
        <input type="text" placeholder='Street' className='border border-gray-300 px-3 py-2 w-full rounded'/>
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 px-3 py-2 w-full rounded'/>
          <input type="text" placeholder='State' className='border border-gray-300 px-3 py-2 w-full rounded'/>
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zipcode' className='border border-gray-300 px-3 py-2 w-full rounded'/>
          <input type="text" placeholder='Country' className='border border-gray-300 px-3 py-2 w-full rounded'/>
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 px-3 py-2 w-full rounded'/>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer rounded'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer rounded'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer rounded'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-400'>Cash on Delivery</p>
            </div>
          </div>
          <div className='w-full flex justify-end mt-4'>
            <button onClick={()=>navigate('/orders')} className='py-3 px-6 bg-black text-white cursor-pointer'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
