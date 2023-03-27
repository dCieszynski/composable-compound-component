import React, { PropsWithChildren } from "react";

function ProductInfo({ children }: PropsWithChildren) {
  return <div className="flex flex-col items-center">{children}</div>;
}

export default ProductInfo;
