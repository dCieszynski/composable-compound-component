import React from "react";
import { useProductCardContext } from "../../assets/context/ProductCardContext";

function ProductCategory() {
  const { product } = useProductCardContext();
  return <h2 className="text-sm text-gray-600">{product.category}</h2>;
}

export default ProductCategory;
