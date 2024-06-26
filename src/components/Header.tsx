import { CiSearch , CiUser ,CiHeart  } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="hidden lg:block md:hidden sticky top-0 left-0 right-0 bg-white z-10">
    <div className='flex justify-between px-10 shadow-sm border-b-2 shadow-black py-2 items-center'>
        <div>
            <Logo/>
        </div>
        <div>
            <ul className='flex gap-x-6 cursor-pointer font-semibold text-gray-600'>
                <Link href='/'><li className="hover:text-black">Home</li></Link>
                <Link href='/shop'><li className="hover:text-black">Shop</li></Link>
                <li className="hover:text-black">Women</li>
                <li className="hover:text-black">Men</li>
                <li className="hover:text-black">Accessories</li>
                <Link href='/login'><li className="hover:text-black">SignIn</li></Link>
                <Link href='/register'><li className="hover:text-black">SignUp</li></Link>
                
            </ul>
        </div>
        <div>
            <ul className='flex gap-x-4 cursor-pointer text-black text-2xl'>
                <li className="hover:bg-gray-300 hover:rounded-full p-2"><CiSearch/></li>
                <Link href='/wishlist'><li className="hover:bg-gray-300 hover:rounded-full p-2"><CiHeart/></li></Link>
                <Link href='/shoppingCart'><li className="hover:bg-gray-300 hover:rounded-full p-2"><LiaShoppingBagSolid/></li></Link>
                <Link href='/myAccount/'><li className="hover:bg-gray-300 hover:rounded-full p-2"><CiUser/></li></Link>
            </ul>
        </div>
    </div>
   
    </div>
  )
}

export default Header