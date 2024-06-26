import React from "react";
import "../app/globals.css";

interface inputProps {
  type: string;
  placeholder?: string;
  color?: string;
  label?: string;
}
const Input = ({ type, placeholder, color , label }: inputProps) => {
  return (
    <>
      <label className="text-lg font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-2 border-gray-400 px-4 py-2 mt-2 rounded-md w-full"
        required
      />
    </>
  );
};

export default Input;
