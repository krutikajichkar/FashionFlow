import React from 'react'
import Image from 'next/image'
import {Button , ButtonLite} from './Button'
import women_Category from '../../public/women_Category.png'
const OrdersCard = () => {
  return (
    <div className='p-4 my-3 border-2 rounded-md'>
        <p className='text-xl mb-3'>Arriving Fri , May 24</p>
       <div className='flex lg:flex-row flex-col justify-between'>
       <div className='flex lg:gap-x-8 gap-x-3'>
            <Image src={women_Category} alt='Product Image' className='w-[150px] h-[150px]' />
            <div className='flex flex-col'>
                <h1 className='text-xl font-md'>Athletic performance Tee</h1>
                <p className='text-sm my-2 text-gray-500'>sold by : GENUS APPARELES LTD.</p>
                <div className='flex gap-x-2'>
                    <p className='text-sm bg-gray-300 rounded-md py-1 px-2 text-gray-500'>Size : XL</p>
                    <p className='text-sm bg-gray-300 rounded-md py-1 px-2 text-gray-500'>Qty : 1</p>
                </div>
                <div className='lg:w-[60%] w-full'>
                    <button className='text-blue-500 border rounded-md px-4 py-1 my-4 border-blue-500'>Buy It Again</button>
                </div>
            </div>
        </div>

        <div>
            <div className='-my-4'><Button text='Track Package'/></div>
            <div className='-my-10'><ButtonLite text='View or Edit Order'/></div>
        </div>
       </div>
    </div>
  )
}

export default OrdersCard