import React from "react";
import { useFilterContext } from "../context/filterContext";

const Sort = ({ length }) => {
  const { sorting } = useFilterContext();
  return (
    <div className="w-full flex justify-around gap-12 ">
      <div>
        <span>{length}</span> Product Available now
      </div>
      <div className="dropdown ">
        <form action="#" className="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="bg-slate-900 text-white"
            onClick={sorting}
          >
            <option value="lowest">Low to High</option>
            <option value="#" disabled></option>
            <option value="highest">High to low</option>
            <option value="#" disabled></option>
            <option value="A-to-Z">A to Z</option>
            <option value="#" disabled></option>
            <option value="Z-to-A">Z to A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
