import React from "react";
import RelatedProductsCard from "./RelatedProductsCard";

const BestSellingProducts = () => {
  return (
    <div className="lg:px-20 px-6 py-10">
      <h4 className="text-xl text-gray-600 font-semibold">Our Products</h4>
      <h1 className="text-2xl font-bold my-4">Our BestSelling Products</h1>

      <ul className="flex flex-wrap gap-x-10 cursor-pointer">
        <li className="hover:bg-[#1b2834] rounded-full hover:px-2 hover:text-white ">
          All
        </li>
        <li className="hover:bg-[#1b2834] rounded-full hover:px-2 hover:text-white ">
          Men
        </li>
        <li className="hover:bg-[#1b2834] rounded-full hover:px-2 hover:text-white ">
          Women
        </li>
        <li className="hover:bg-[#1b2834] rounded-full hover:px-2 hover:text-white ">
          Kids
        </li>
      </ul>

      <div className="flex lg:flex-row flex-col lg:justify-between my-10 gap-y-10">
        <RelatedProductsCard/>
        <RelatedProductsCard/>
        <RelatedProductsCard/>
      </div>
    </div>
  );
};

export default BestSellingProducts;
