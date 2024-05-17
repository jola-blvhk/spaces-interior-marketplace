import React, { useState } from "react";
import TitleHeading from "./title-heading";
import Image from "next/image";
import ExampleProduct from "/public/assets/products/example-product.png";
import { GoHeartFill } from "react-icons/go";

interface ShopProductProps {
  title: string | String;
  description?: string;
}
const ShopProduct: React.FC<ShopProductProps> = ({ title }) => {
  const variations = [1, 2, 3];
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          title={title}
          description="Your one stop market place for all things furniture, accessories and more"
          showBackButton={true}
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-7 md:mt-16 lg:mt-24">
          <div className="flex gap-[2%]">
            <div className="w-[23%] grid grid-rows-3  gap-y-3">
              {variations?.map((variation, index) => (
                <div
                  key={index}
                  className="relative w-full h-auto rounded-[8.18px] md:rounded-[15px]"
                >
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

          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-primary-black-90  font-semibold text-xl mb-1  lg:text-3xl tracking-wide">
                {title}
              </h1>
              <GoHeartFill
                className={`text-3xl cursor-pointer ${
                  isHeartClicked ? " text-red-600" : " text-primary-black-100"
                }`}
                onClick={handleHeartClick}
              />
            </div>
            <p className="text-primary-black-90 text-sm leading-6 lg:text-base mr-6 md:mr-0">
              Your one stop market place for all things furniture, accessories
              and more. Your one stop market place for all things furniture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
