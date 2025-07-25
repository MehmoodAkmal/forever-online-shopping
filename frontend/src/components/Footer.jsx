import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iste atque dignissimos cumque laudantium exercitationem! Iusto, veritatis accusamus vel quos quia, eaque, excepturi cumque veniam ipsam nisi eligendi quidem sit dolor magnam. Corporis, corrupti? Excepturi voluptatum expedita repudiandae, provident suscipit rem perferendis. Earum voluptas debitis deleniti recusandae laboriosam dolores porro.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Me</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-000-0000-0000-0000</li>
                <li>akmalbajwa2672@gmail.com</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
      <hr className='text-gray-300' />
      <p className='text-center py-4 text-sm'>Copyright 2024 &copy; greatstack.dev - All Right Reserved.</p>
    </div>
  )
}

export default Footer
