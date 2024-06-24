import React from "react";
import Image from "next/image";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import signup_img from "../../../public/signup_img.jpg";
import "../../app/globals.css";

const Register = () => {
  return (
    <div className="flex-col flex sm:flex-row items-start">
      <div className="sm:p-14 p-10 sm:w-[50%] w-full  flex flex-col justify-center">
       <Logo/>
        <p className="text-3xl font-semibold my-6">Sign up to create your account</p>
        <form>
          <div className="flex w-full gap-x-4">
          <div className="mb-6">
            
            <Input type="text" placeholder="First Name" label="First Name" />
          </div>
          <div className="mb-6">
            
            <Input type="text" placeholder="Last Name" label="Last Name" />
          </div>
          </div>
          <div className="mb-6">
          
          <Input type="text" placeholder="Email Address" label="Email Address"/>
          </div>
          <div className="mb-6">
          
          <Input type="tel" placeholder="Phone Number" label="Phone Number" />
          </div>
          <div className="flex gap-x-1">
            <div className="w-8"><Input type='checkbox' placeholder=''/></div>
            <span>By signing up I agree to the Terms & Condition and Privacy Policy</span>
          </div>
          <Button text="SIGN UP" />
        </form>
        <div className="text-center">
          <span>
            Already have an account ?{" "}
            <span className="font-semibold text-lg">Sign in</span>
          </span>
        </div>
      </div>
      <div className="sm:w-[50%] w-full">
        <Image src={signup_img} alt="Boy Image" />
      </div>
    </div>
  );
};

export default Register;
