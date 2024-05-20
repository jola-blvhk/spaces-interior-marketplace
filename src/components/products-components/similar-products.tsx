import { sign } from "crypto";
import React from "react";
import ProductBox from "./product-box";

interface SimilarProductsProps {
  similarProducts: object[] | Array<any>;
}
const SimilarProducts: React.FC<SimilarProductsProps> = ({
  similarProducts,
}) => {
  return (
    <div>
      <h1 className="text-secondary-green-100  font-medium text-xl mb-1  lg:text-3xl">
        More like this
      </h1>
      <div className=" grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-1.5 md:gap-x-7 lg:gap-x-10 gap-y-6 md:gap-y-12 lg:gap-y-14 mt-4 md:mt-10 ">
        {similarProducts?.map((product, index) => (
          <ProductBox
            key={index}
            name={product.name}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
