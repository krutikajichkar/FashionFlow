import { IoMdClose } from "react-icons/io";
import React from "react";


const withWishListCard = (WrappedComponent: React.ComponentType<any>) => {
  return () => {
    return (
      <div className="relative">
        <WrappedComponent/>
        <div className="absolute top-2 right-4 cursor-pointer"><IoMdClose/></div>
      </div>
    )
  }
};

export default withWishListCard;
