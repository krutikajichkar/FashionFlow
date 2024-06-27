import React from "react";

import Input from "../../components/Input";

import CartCard from "@/components/CartCard";
import PriceDetails from "@/components/PriceDetails";
import RelatedProductsCard from "@/components/RelatedProductsCard";
import Layout from "@/components/Layout";
const index = () => {
  return (
    <Layout>
      {/* <div>BreadScrumbing</div> */}
      <div className="lg:px-20 lg:py-10 px-4 flex flex-col lg:flex-row   ">
        <div className=" px-2 md:px-4 lg:px-4 lg:w-[60%] w-full lg:border-r-2">
          <div className=" text-xl font-semibold flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between gap-y-4 border-b-2 pb-4">
            <div className="flex gap-x-3 items-center ">
              <span>
                <Input type="checkbox" color="1b2834" />
              </span>
              <span>4/4 ITEMS SELECTED</span>
            </div>
            <div>
              <span>REMOVE &nbsp; &nbsp;| &nbsp; &nbsp;</span>
              <span>MOVE TO WISHLIST</span>
            </div>
          </div>
          <div>
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div className="lg:w-[40%] mt-4 lg:mt-0 w-full px-6">
          <PriceDetails btnText="PLACE ORDER" />
        </div>
      </div>
      <div className="lg:px-20 lg:py-10 px-4 py-3 mt-6 lg:mt-0">
        <span className="text-xl font-semibold">Related Product</span>
        <h1 className="text-2xl font-bold my-4">Discover Related Products</h1>

        <div className="my-10 flex flex-wrap lg:flex-row flex-col gap-y-8 lg:gap-y-8 justify-evenly">
          <RelatedProductsCard />
          <RelatedProductsCard />
          <RelatedProductsCard />
        </div>
      </div>
    </Layout>
  );
};

export default index;
