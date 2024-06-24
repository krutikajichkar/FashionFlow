import React from 'react'
import {Button} from './Button'

const PriceDetails = () => {
  return (
    <div className='sticky right-0 top-0'>
        <h1 className='text-xl font-bold'>PRICE DETAILS (2 ITEMS)</h1>
        <div className='flex justify-between my-4'>
            <span className='text-gray-600'>Total MRP</span>
            <span className='font-semibold'>RS 2598</span>
        </div>
        <div className='flex justify-between my-4'>
            <span className='text-gray-600'>Discount on MRP</span>
            <span className='font-semibold text-green-600'>-Rs1430</span>
        </div>
        <div className='flex justify-between my-4'>
            <span className='text-gray-600'>Coupoun Discount</span>
            <span className='font-semibold text-green-600'>-Rs179</span>
        </div>
        <div className='flex justify-between my-4'>
            <span className='text-gray-600'>Shipping Fee</span>
            <span className='font-semibold text-green-600'><del className='text-black'>Rs100</del> FREE</span>
        </div>

        <div className='border'></div>
        <div className='flex justify-between my-4 font-semibold'>
            <span >Total Amount</span>
            <span >$992</span>
        </div>
        <Button text='PLACE ORDER'/>
    </div>
  )
}

export default PriceDetails