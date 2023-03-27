import React from "react";

import ProductCard from "./components/ProductCard/ProductCard";
import { product } from "./components/ProductCard/productData";

function App() {
  const addToCart = () => {
    console.log("Added to cart");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <ProductCard
        product={product}
        image={<ProductCard.Image />}
        info={
          <ProductCard.Info>
            <ProductCard.Category />
            <ProductCard.Title />
            <ProductCard.Price />
          </ProductCard.Info>
        }
        action={<ProductCard.Action onAddToCart={addToCart} />}
      />
    </div>
  );
}

export default App;
