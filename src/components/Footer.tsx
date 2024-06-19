import { FaTwitter , FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import React from "react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="bg-[#1b2834] text-white p-4 lg:p-8 mt-8 lg:mt-0">
    <div className='flex items-center flex-col lg:flex-row md:flex-col md:p-4  '>
      <div className="lg:w-[50%] md:w-full w-full flex flex-col gap-y-4">
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
      <div className="flex justify-evenly w-full flex-col md:flex-row lg:flex-row md:w-full md:mt-8 lg:mt-0  lg:w-[50%]">
      <div className="mt-6 md:mt-0 lg:mt-0">
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
        <span className="font-semibold text-xl">Company</span>
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
     <div className="flex flex-col md:flex-row md:justify-between items-center lg:flex-row lg:justify-between mt-8">
     <div>
     © 2020 All Right Reserved 
     </div>
     <div className="mt-6 lg:mt-0">
         <ul className="flex gap-x-4 text-3xl">
             <li><FaTwitter/></li>
             <li><AiFillInstagram/></li>
             <li><FaLinkedin/></li>
         </ul>
     </div>
 </div>
 </div>
  );
};

export default Footer;
