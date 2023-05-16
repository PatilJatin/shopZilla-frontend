import React, { useEffect } from "react";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import ProductList from "../../components/ProductList";
import { useFilterContext } from "../../context/filterContext";

const Products = () => {
  const { filterProducts } = useFilterContext();

  return (
    <div className=" bg-gray-50">
      <div className="w-full mx-auto  product-container flex">
        <div className="category-section hidden md:block basis-[25%] ">
          <Filter />
        </div>
        <div className="product-list   ">
          <div className=" bg-primary-300 py-4 text-white mb-2">
            <Sort length={filterProducts?.length} />
          </div>
          <ProductList products={filterProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
