import React from 'react'

const NewsLetterBox = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam dolores magnam vero repellat ex temporibus!
      </p>
      <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-200 pl-3'>
        <input type="email" name="" id="" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
