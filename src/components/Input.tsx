import React from "react";
import "../app/globals.css";

interface inputProps {
  type: string;
  placeholder: string;
}
const Input = ({ type, placeholder }: inputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-2 border-gray-400 px-4 py-2 mt-2 rounded-md w-full"
    />
  );
};

export default Input;
