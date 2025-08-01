import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItems from './ProductItems';

const RelatedProducts = ({category , subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let productCopy = products.slice();
            productCopy = productCopy.filter(item => category === item.category);
            productCopy = productCopy.filter(item=> subCategory === item.subCategory)
            setRelated(productCopy.slice(0,5))
        }
    },[products])
  return (
    <div className='my-16'>
        <div className='text-center text-3xl'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
            {
                related.map((item,index)=>(
                    <ProductItems key={index} _id={item._id} name={item.name} price={item.price} images={item.images}/>
                ))
            }
        </div>
      
    </div>
  )
}

export default RelatedProducts
