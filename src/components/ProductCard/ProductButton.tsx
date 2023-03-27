import React from "react";
import { useProductCardContext } from "../../assets/context/ProductCardContext";
import { Product } from "../../types";

type Props = {
  onAddToCart: (product: Product) => void;
};

function ProductButton({ onAddToCart }: Props) {
  const { product } = useProductCardContext();

  const handleAddToCart = () => {
    onAddToCart(product);
  };
  return (
    <button
      type="button"
      className="bg-green-300 px-4 py-2 rounded-xl font-bold"
      onClick={handleAddToCart}
    >
      ADD TO CART
    </button>
  );
}

export default ProductButton;
