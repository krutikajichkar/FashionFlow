import { FaStar } from "react-icons/fa";
import React from 'react'
import Image from 'next/image'
import women_Category from '../../public/women_Category.png'
const RelatedProductsCard = () => {
  return (
    <div>
      <div className='relative'>
        <Image src={women_Category} alt='Product Image' className='lg:w-[300px] w-full  h-[400px]'/>
        <div className='bg-white text-green-600 absolute top-2 left-2 px-2 py-1 font-semibold'>25% OFF</div>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <h1 className='text-2xl font-semibold'>Trendy Graphic Tee</h1>
        <div className="flex gap-x-4">
          <span className="font-semibold text-red-200">H&M</span>
          <span className="flex items-center gap-x-1 font-semibold"><FaStar className="text-yellow-400"/>4.8</span>
        </div>
        <div>
          <span className="text-xl font-bold">Rs.999</span>
          <del className="text-xl text-red-200 ml-2">Rs 1000</del>
        </div>
      </div>
    </div>
  )
}

export default RelatedProductsCard