import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import CartAmountToggle from "./CartAmountToggle";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { _id, colors, stock } = product;
  const [pickColor, setpickColor] = useState(colors[0]);
  const [productsQuantity, setProductQuantity] = useState(1);
  const increaseQuantity = () => {
    productsQuantity < stock
      ? setProductQuantity(productsQuantity + 1)
      : setProductQuantity(stock);
  };
  const decreaseQuantity = () => {
    productsQuantity > 1
      ? setProductQuantity(productsQuantity - 1)
      : setProductQuantity(1);
  };
  return (
    <>
      <div className="colors">
        <div className="flex  items-center">
          Colors :
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: `${color}` }}
                className={`bg-[${color}] w-7 h-7 mx-1 rounded-full`}
                onClick={() => setpickColor(color)}
                type="button"
              >
                {pickColor === color ? <DoneIcon /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex  flex-wrap justify-around items-center">
        <CartAmountToggle
          productsQuantity={productsQuantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          className="basis-[48%]"
        />
        <NavLink
          to={"/cart"}
          onClick={() => addToCart(_id, pickColor, productsQuantity, product)}
          className="basis-[48%] text-center h-11 w-full rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <button>Add to Cart</button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
