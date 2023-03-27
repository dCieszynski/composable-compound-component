import React from "react";
import { useProductCardContext } from "../../assets/context/ProductCardContext";

function ProductImage() {
  const { product } = useProductCardContext();
  return (
    <div className="w-[298px] h-[350px]">
      <img className="w-full h-full object-cover rounded" src={product.image} alt="Shoes" />
    </div>
  );
}

export default ProductImage;
