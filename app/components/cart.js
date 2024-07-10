import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const Cart = ({ variant, className }) => {
  if (variant === "small") {
    return (
      <button className={`icon-large rounded white border_white ${className}`}>
        <FiShoppingBag />
      </button>
    );
  } else if (variant === "large") {
    return (
      <button className="container-space-between gap-[1.25rem] rounded p-[5px] border-gray ">
        <p className="pl-1 font-medium">Cart</p>
        <div className="icon-small rounded black">
          <FiShoppingBag />
        </div>
      </button>
    );
  }
};

export default Cart;
