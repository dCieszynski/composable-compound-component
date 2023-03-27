import React from "react";
import { useProductCardContext } from "../../assets/context/ProductCardContext";

function ProductTitle() {
  const { product } = useProductCardContext();
  return <h3 className="text-2xl">{product.title}</h3>;
}

export default ProductTitle;
