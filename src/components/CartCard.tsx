import { IoMdClose } from "react-icons/io";
import React from 'react'
import women_Category from '../../public/women_Category.png'
import Input from './Input'
import Dropdown from './Dropdown'
import Image from 'next/image'
const CartCard = () => {
  return (
    <div className='border my-3 p-2 rounded-md flex items-center gap-x-3 relative'>
        <div className='relative'>
            <Image src={women_Category} alt='Product Image' className='w-[100px] h-[120px] rounded-sm relative'/>
            <div className='absolute top-0 left-2'><Input type='checkbox'/></div>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-lg font-semibold mt-2'>Versatile Cotton Tee</h1>
            <p className='text-sm text-gray-500'>sold by : GENUS APPARELES LTD.</p>
            <div className='flex gap-x-2 mt-2'>
            <Dropdown receivedText='Size' receivedSubText='XL'/>
            <Dropdown receivedText='Qty' receivedSubText='1'/>
            </div>
            <div className='flex gap-x-2 items-center mt-2'>
                <p className='lg:text-lg md:text-lg text-xs font-bold'>$584</p>
                <del className='text-orange-300 lg:text-lg md:text-lg text-xs'>$1299.00</del>
                <p className='lg:text-lg md:text-lg text-xs  font-bold text-green-700'>(55% OFF)</p>
            </div>
        </div>
        <div className='absolute right-2 top-2 text-gray-600 cursor-pointer'><IoMdClose/></div>
    </div>
  )
}

export default CartCard