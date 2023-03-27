import { createContext, useContext } from "react";
import { Product } from "../../types";

const ProductCardContext = createContext<{ product: Product } | null>(null);

export function useProductCardContext() {
  const context = useContext(ProductCardContext);

  if (!context) {
    throw new Error("useProductCardContext must be used within a ProductCardContextProvider");
  }

  return context;
}

export default ProductCardContext;
