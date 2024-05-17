import React from "react";
import TitleHeading from "./title-heading";
import Image from "next/image";
import ExampleProduct from "/public/assets/products/example-product.png";

interface ShopProductProps {
  title: string | String;
  description?: string;
}
const ShopProduct: React.FC<ShopProductProps> = ({ title }) => {
  const variations = [1, 2, 3];
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          title={title}
          description="Your one stop market place for all things furniture, accessories and more"
          showBackButton
        />

        <div className="grid lg:grid-cols-2 mt-7 md:mt-16 lg:mt-24">
          <div className="flex gap-[2%]">
            <div className="w-[23%] grid grid-rows-3  gap-y-3">
              {variations?.map((variation, index) => (
                <div key={index} className="relative w-full h-auto rounded-[8.18px] md:rounded-[15px]">
                  <Image
                    src={ExampleProduct}
                    className=""
                    alt="name"
                    fill={true}
                    objectFit="contain rounded-lg md:rounded-[15px]"
                  />
                </div>
              ))}
            </div>
            <div className="relative bg-[#E3E3E3] w-[75%]  h-[300px] md:h-[500px] rounded-[8.18px] md:rounded-[15px]">
              <Image
                src={ExampleProduct}
                className=""
                alt="name"
                fill={true}
                objectFit="contain rounded-lg md:rounded-[15px]"
              />
            </div>
          </div>
          <div>{/* product details */}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
