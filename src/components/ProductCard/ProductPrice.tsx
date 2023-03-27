import React from "react";
import { useProductCardContext } from "../../assets/context/ProductCardContext";

function ProductPrice() {
  const { product } = useProductCardContext();
  return <p className="text-lg text-gray-700">Price: ${product.price}</p>;
}

export default ProductPrice;
