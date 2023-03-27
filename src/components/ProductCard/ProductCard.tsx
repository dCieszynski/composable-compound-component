import React, { ReactNode } from "react";
import ProductCardContext from "../../assets/context/ProductCardContext";
import { Product } from "../../types";
import ProductButton from "./ProductButton";
import ProductCategory from "./ProductCategory";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

type Props = {
  product: Product;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ product, image, info, action }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="w-[300px] h-[510px] border-2 border-black rounded flex flex-col gap-3">
        {image}
        <div className="flex flex-col items-center gap-2">
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Info = ProductInfo;
ProductCard.Category = ProductCategory;
ProductCard.Title = ProductTitle;
ProductCard.Price = ProductPrice;
ProductCard.Action = ProductButton;

export default ProductCard;
