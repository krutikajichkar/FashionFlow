"use client";
import { BiSolidCube } from "react-icons/bi";
import Button from "@/components/Button";
import DiscountMessage from "@/components/DiscountMessage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Homepage_img from "../../public/Homepage_img.png";
import kids_category from "../../public/kids_category.png";
import mens_category from "../../public/mens_category.jpg";
import women_category from "../../public/women_category.png";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div>
      {show && <DiscountMessage setShow={setShow} show={show} />}
      <Header />
      <section className="bg-[#faf9f9] flex justify-between items-center">
        <div className="sm:w-[60%] w-full sm:text-left text-center px-6 sm:px-24 py-14 ">
          <div className="sm:text-5xl text-3xl font-bold tracking-wider">
            Step into Fashion at Your Ultimate Style Destination!
          </div>
          <p className="py-6">
            Explore a World of Fashion Possibilities with Exclusive Discounts -
            Dive into Your Ultimate Style Destination and Elevate Your Wardrobe
            Today!
          </p>
          <div className="sm:w-[30%] w-full"><Button text="Shop Now" /></div>
        </div>
        <div className="px-20 sm:block hidden">
          <Image src={Homepage_img} alt="Image" />
        </div>
      </section>

      <section className="py-20 sm:flex-row flex flex-col items-center sm:justify-evenly gap-y-10">
        <div className="flex items-center gap-x-2 w-full px-10 sm:px-0 sm:w-[25%]">
          <div>
            <BiSolidCube className="text-6xl text-blue-950 " />
          </div>
          <div>
            <p className="text-2xl font-semibold">Free Shipping</p>
            <p className="font-semibold text-gray-600">
              Free Shipping for orders above $180
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 w-full px-10 sm:px-0 sm:w-[25%]">
          <div>
            <BiSolidCube className="text-6xl text-blue-950 " />
          </div>
          <div>
            <p className="text-2xl font-semibold">Flexible Payments</p>
            <p className="font-semibold text-gray-600">
              Multiple Secure Payment Options
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 w-full px-10 sm:px-0 sm:w-[25%]">
          <div>
            <BiSolidCube className="text-6xl text-blue-950 " />
          </div>
          <div>
            <p className="text-2xl font-semibold">24*7 Support</p>
            <p className="font-semibold text-gray-600">
              We Support Online all days
            </p>
          </div>
        </div>
      </section>

      <section className="sm:p-20 flex sm:flex-row flex-col justify-evenly gap-y-10">
        <div className="sm:w-[25%] w-full px-6 sm:px-0 relative cursor-pointer">
          <Image
            src={women_category}
            alt="women Category Image"
            className=" relative w-full h-[400px]"
          />
          <div className="absolute bottom-0 sm:left-0 sm:right-0 left-6 right-6 h-1/2  bg-gradient-to-b from-transparent to-black">
            {" "}
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl text-white font-bold tracking-widest">
              WOMEN
            </span>
          </div>
        </div>
        <div className="sm:w-[25%] w-full px-6 sm:px-0 relative cursor-pointer">
          <Image
            src={mens_category}
            alt="Men Category Image"
            className="w-full h-[400px]"
          />
          <div className="absolute bottom-0 sm:left-0 sm:right-0 left-6 right-6 h-1/2 bg-gradient-to-b from-transparent to-black">
            {" "}
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white tracking-widest">
              MEN
            </span>
          </div>
        </div>
        <div className="sm:w-[25%] w-full px-6 sm:px-0 relative cursor-pointer">
          <Image
            src={kids_category}
            alt="kids Category Image"
            className="w-full h-[400px]"
          />
          <div className="absolute bottom-0 sm:left-0 left-6 sm:right-0 right-6 h-1/2 bg-gradient-to-b from-transparent to-black">
            {" "}
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-bold text-2xl text-white tracking-widest">
              KIDS
            </span>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
