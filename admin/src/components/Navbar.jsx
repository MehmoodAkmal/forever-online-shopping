import React from 'react'
import { assets } from '../assets/assets.js'
import { toast } from 'react-toastify';

const Navbar = ({setToken}) => {
    const handleLogout = () => {
    setToken('');
    toast.success("Logged out successfully");
  };
  return (
    <div className='flex items-center justify-between px-[4%] sm:px-15 py-2'>
        <img className='w-[25%] sm:w-[15%] md:w-[10%]' src={assets.logo} alt="" />
        <button onClick={handleLogout} className='cursor-pointer text-white bg-gray-600 px-5 py-2 sm:px-7 text-sm sm:py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar