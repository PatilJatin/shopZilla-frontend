import React from "react";

import ProductCart from "./ProductCart";

const ProductList = ({ products }) => {

  if (!products) {
    return null;
  }
  return (
    <div className="product-container flex flex-wrap">
      {products.map((product) => {
        return <ProductCart key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
