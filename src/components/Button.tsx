import React from "react";
import "../app/globals.css";

interface buttonProps {
  text: string;
}

const Button = ({ text }: buttonProps) => {
  return (
    <button className="w-full text-center text-white text-lg bg-[#1b2834] py-2 rounded-md my-6 cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
