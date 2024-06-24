import React from "react";
import Image from "next/image";
import Input from "../../components/Input";
import {Button} from "../../components/Button";
import Logo from "../../components/Logo";
import Signin_girl_img from "../../../public/Signin_girl_img.png";
import "../../app/globals.css";

const Login = () => {
  return (
    <div className="flex-col flex sm:flex-row items-start">
      <div className="sm:p-14 p-10 sm:w-[50%] w-full  flex flex-col justify-center">
       <Logo/>
        <p className="text-3xl font-semibold my-6">Sign in to your account</p>
        <form>
          <div className="mb-6">
            <Input type="text" placeholder="Email Address" label="Email Address" />
          </div>
          <div className="mb-6">
            
            <Input type="password" placeholder="Password" label="Password"/>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold">Forgot Password ?</span>
          </div>
          <Button text="Sign In" />
        </form>
        <div className="text-center">
          <span>
            Don&apos;t have an account ?{" "}
            <span className="font-semibold text-lg">Sign Up</span>
          </span>
        </div>
      </div>
      <div className="sm:w-[50%] w-full">
        <Image src={Signin_girl_img} alt="Girl Image" />
      </div>
    </div>
  );
};

export default Login;
