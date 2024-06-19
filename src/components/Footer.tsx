import { MdOutlineEmail } from "react-icons/md";
import React from "react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className='flex bg-[#1b2834] text-white p-6 items-center '>
      <div className="w-[50%] flex flex-col gap-y-4">
        <Logo />
        <p className="">
          Style Flows Here: Your Ultimate Fashion Destination! Explore
          Trendsetting Collections, Shop the Latest Looks, and Let Your Fashion
          Flow with Us!
        </p>
        <div className=" flex gap-x-2 items-center">
            <span><MdOutlineEmail className="text-xl"/></span>
            <span>FashionFlow@Gmail.com</span>
        </div>
      </div>
      <div className="flex justify-evenly w-[50%]">
      <div>
        <span className="font-semibold text-xl">Product</span>
        <ul className="my-2">
          <li className="py-1">Landing Pages</li>
          <li className="py-1">Shop</li>
          <li className="py-1">Women</li>
          <li className="py-1">Men</li>
          <li className="py-1">Accessories</li>
        </ul>
      </div>
      <div>
        <span className="font-semibold text-xl">Comapny</span>
        <ul className="my-2">
          <li className="py-1">About</li>
          <li className="py-1">Privacy Policy</li>
          <li className="py-1">Terms & Conditions</li>
          <li className="py-1">Partners</li>
          <li className="py-1">Contacts</li>
        </ul>
      </div>
      <div>
        <span className="font-semibold text-xl">Resources</span>
        <ul className="my-2">
          
          <li className="py-1">Blog</li>
          <li className="py-1">Tools</li>
          <li className="py-1">Support</li>
         
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
