import { CiSearch , CiUser ,CiHeart  } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <>
    <div className='flex justify-between px-10 shadow-sm border-b-2 shadow-black py-2 items-center sticky top-0 left-0 right-0 bg-white z-10'>
        <div>
            <Logo/>
        </div>
        <div>
            <ul className='flex gap-x-6 cursor-pointer font-semibold text-gray-600'>
                <li className="hover:text-black">Home</li>
                <li className="hover:text-black">Shop</li>
                <li className="hover:text-black">Women</li>
                <li className="hover:text-black">Men</li>
                <li className="hover:text-black">Accessories</li>
                
            </ul>
        </div>
        <div>
            <ul className='flex gap-x-4 cursor-pointer text-black text-2xl'>
                <li className="hover:bg-gray-300 hover:rounded-full p-2"><CiSearch/></li>
                <li className="hover:bg-gray-300 hover:rounded-full p-2"><CiHeart/></li>
                <li className="hover:bg-gray-300 hover:rounded-full p-2"><LiaShoppingBagSolid/></li>
                <li className="hover:bg-gray-300 hover:rounded-full p-2"><CiUser/></li>
            </ul>
        </div>
    </div>
   
    </>
  )
}

export default Header