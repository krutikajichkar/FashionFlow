import React from "react";
import Layout from "@/components/Layout";
import PriceDetails from "@/components/PriceDetails";
import Input from "@/components/Input";
import { Button } from "@/components/Button";

const index = () => {
  return (
    <Layout>
      <div className="lg:px-20 px-4 py-10">
        {/* <div>BreadCrumbs</div> */}

        <div className="flex lg:flex-row flex-col gap-x-10">
          <div className="lg:px-8 md:px-8 px-4 lg:border-r-2 border-r-0 lg:w-[60%] w-full ">
            <h1 className="text-xl font-medium pb-4 border-b-2">
              Saved Address
            </h1>

            <div className="flex items-center justify-between border rounded-md py-3 px-6 my-6">
              <div className="flex items-center justify-start gap-x-10">
                <div>
                <Input type="radio" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <span className="text-lg font-medium">Jone Copper</span>
                  <span>2118 Thornridge cir. Syracuse, Connecticut 35624</span>
                </div>
              </div>

              <div>
                <span className="font-medium cursor-pointer">Edit</span>
              </div>
            </div>

            <div className="flex items-center justify-between border rounded-md py-3 px-6 my-6">
              <div className="flex items-center justify-start gap-x-10">
                <div>
                <Input type="radio" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <span className="text-lg font-medium">Jone Copper</span>
                  <span>2118 Thornridge cir. Syracuse, Connecticut 35624</span>
                </div>
              </div>

              <div>
                <span className="font-medium cursor-pointer">Edit</span>
              </div>
            </div>

            <form className="border p-4 rounded-md">
              <span className="text-xl font-medium">Add New Address</span>
              <div className="my-4">
                <Input type="text" label="Name" placeholder="Enter Your Name" />
              </div>

              <div className="flex lg:flex-row flex-col  justify-between gap-x-10">
                <div className="my-4 lg:w-[50%] w-full">
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="my-4 lg:w-[50%] w-full">
                  <Input
                    type="text"
                    label="Phone Number"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>

              {/* this will be dropdown */}

              <div className="my-4">
                <Input
                  type="text"
                  label="Country"
                  placeholder="Select Country"
                />
              </div>

              <div className="mt-8">
                <Input
                  type="text"
                  label="Your Address"
                  placeholder="Enter Your Address"
                />
              </div>

              <div className="lg:w-[50%] w-full">
                <Button text="ADD ADDRESS" />
              </div>
            </form>
          </div>

          <div className="lg:w-[40%] w-full">
            <PriceDetails btnText="CONFIRM PAYMENT" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
