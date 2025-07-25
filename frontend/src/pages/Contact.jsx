import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col gap-6 justify-center items-start text-gray-400'>
          <p className='font-semibold text-gray-600'>Our Store</p>
          <p>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p>Tel: (415) 555-0132 <br />Email: admin@forever.com</p>
          <p className='font-bold text-xl text-gray-600'>Careers at Forever</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='text-light px-4 text-gray-800 py-3 border border-black hover:bg-black hover:text-white cursor-pointer transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
