import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Signin_girl_img from "../../../public/Signin_girl_img.png";
import AccountSidebar from "@/components/AccountSidebar";
import Input from "@/components/Input";
import {Button} from "@/components/Button";
const index = () => {
  return (
    <Layout>
      <div className="lg:px-20 px-10 py-10">
        {/* <div>BreadCrumbs</div> */}
        <div className="flex lg:flex-row flex-col lg:gap-x-10 gap-y-10 relative">
          <AccountSidebar />

          {/* {Personal Information} */}

          <div className=" lg:w-[60%] w-full relative">
            <div className="relative inline-block">
              <Image
                src={Signin_girl_img}
                alt="Profile Photo"
                className="w-[80px] h-[80px] rounded-full border relative"
              />

              <div className="absolute bottom-0 right-0">Edit</div>
            </div>

            <form action="">
                <div className="flex lg:flex-row flex-col lg:gap-x-3 gap-y-4 items-center my-4">
                    <span className="lg:w-[50%] w-full"><Input type="text" placeholder="First Name" label="First Name"/></span>
                    <span className="lg:w-[50%] w-full"><Input type="text" placeholder="Last Name" label="Last Name"/></span>
                </div>
                <div className="my-4">
                    <Input type="text" placeholder="ex:abc@gmail.com" label="Email"/>
                </div>
                <div className="my-4">
                    <Input type="text" placeholder="1234" label="Phone"/>
                </div>

                {/* {this will be dropdown} */}

                <div className="my-4">
                    
                    <Input type="text" placeholder="Female" label="Gender"/>
                </div>
                <div className="lg:w-[40%] w-full">
                    <Button text="UPDATE"/>
                </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
