import React from "react";
import { useFilterContext } from "../context/filterContext";
import FormatPrice from "../helper/FormatPrice";

const Filter = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    allProducts,
    updateFilter,
    clearFilter,
  } = useFilterContext();

  const getUniqueData = (data, attribute) => {
    let newVal = data.map((ele) => {
      return ele[attribute];
    });
    if (attribute === "colors") {
      newVal = newVal.flat();
    }
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryData = getUniqueData(allProducts, "category");
  const companyData = getUniqueData(allProducts, "company");
  const colorsData = getUniqueData(allProducts, "colors");
  return (
    <div className="text-white bg-primary-500 h-full px-3 py-5 ">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilter}
            className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search product here..."
          />
        </form>
      </div>
      <hr className="my-3 w-[80%] mx-auto" />
      <div className="category text-lg">
        <h2>Category :</h2>
        <div className="flex flex-col">
          {categoryData.map((element, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={element}
                onClick={updateFilter}
                className="font-thin hover:font-semibold transition"
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>
      <hr className="my-3 w-[80%] mx-auto" />

      <div className="company-category">
        <h2 className="mb-3">Company : </h2>
        <form action="#">
          <select
            name="company"
            id="company"
            onClick={updateFilter}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {companyData.map((ele, index) => {
              return (
                <option key={index} value={ele} name="company">
                  {ele}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <hr className="my-3 w-[80%] mx-auto" />

      <div className="colorFilter ">
        <h1 className="mb-3">Color :</h1>
        <div className="flex gap-1 ">
          {colorsData.map((ele, index) => {
            if (ele === "All") {
              return (
                <button
                  className={` text-white rounded-full w-10 h-10 bg-indigo-500`}
                  onClick={updateFilter}
                  value={ele}
                  key={index}
                  name="color"
                  type="button"
                >
                  All
                </button>
              );
            }
            return (
              <button
                style={{ backgroundColor: `${ele}` }}
                className={`  rounded-full w-10 h-10`}
                onClick={updateFilter}
                value={ele}
                key={index}
                name="color"
                type="button"
              >
                {color === ele ? "" : null}
              </button>
            );
          })}
        </div>
      </div>
      <hr className="my-3 w-[80%] mx-auto" />
      <div className="priceFilter">
        <h2 className="mb-3">
          Price : <FormatPrice price={price} />
        </h2>

        <input
          type="range"
          name="price"
          id="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilter}
          className="w-[60%] mx-auto h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <hr className="my-3 w-[80%] mx-auto" />

      <div className="w-[70%] mx-auto">
        <button
          onClick={clearFilter}
          type="button"
          className="w-full my-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
