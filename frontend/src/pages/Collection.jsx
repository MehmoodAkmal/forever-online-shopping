import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collection = () => {
  const {products , search , showSearch} = useContext(ShopContext);
  const [showFilter , setShowFilter] = useState(false);
  const [filterProducts , setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relevent');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }else{
      setCategory(prev => [...prev , e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }else{
      setSubCategory(prev => [...prev , e.target.value]);
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category , subCategory , search, products, showSearch])

  useEffect(()=>{
    sortProducts();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB_CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent">Sort By: Relevent</option>
            <option value="low-high">Sort By: Low To High</option>
            <option value="high-low">Sort By: High To Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item , index)=>(
              <ProductItems key={index} _id={item._id} name={item.name} images={item.images} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
