import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";
import Stars from "./Stars";
const ProductCart = (product) => {
  const {
    _id,
    images,
    company,
    name,
    price,
    category,
    description,
    colors,
    stars,
    reviews,
  } = product;
  console.log(product);
  return (
    <NavLink to={`/product/${_id}`} className={"my-1 bg-gray-100 mx-auto"}>
      <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src={images[0].secure_url}
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {name}
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              {description.slice(0, 100) + "..."}
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #{name.slice(0, 30) + "..."}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #{company}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #{category}
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <ul class="colors -mr-3 flex flex-wrap">
                {colors.map((color) => (
                  <li
                    style={{ backgroundColor: color }}
                    key={color}
                    class="text-heading mb-2 mr-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                  >
                    <span class="block h-full w-full rounded"></span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="">
              Only in{" "}
              <span className="text-lg font-bold">
                <FormatPrice price={price} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCart;
