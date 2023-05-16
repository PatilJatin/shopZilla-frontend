import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CartAmountToggle = ({
  productsQuantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="quantity group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
      <button
        onClick={() => increaseQuantity()}
        type="button"
        className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
      >
        <AddBoxIcon />
      </button>
      <p className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
        {productsQuantity}
      </p>
      <button
        onClick={() => decreaseQuantity()}
        className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
        type="button"
      >
        <IndeterminateCheckBoxIcon />
      </button>
    </div>
  );
};

export default CartAmountToggle;
