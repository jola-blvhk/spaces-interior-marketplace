import Image from "next/image";
import React from "react";
import Button from "../button";
import Cart from "../../assets/icons/cart.svg";
import RoughBackground from "/public/assets/background-images/roughTexture.jpg";
import SmoothBackground from "/public/assets/background-images/smoothTexture.jpg";
import topProduct1 from "/public/assets/top-products/topProduct1.svg";
import topProduct2 from "/public/assets/top-products/topProduct2.svg";
import topProduct3 from "/public/assets/top-products/topProduct3.svg";
import topProduct4 from "/public/assets/top-products/topProduct4.svg";
import topProduct5 from "/public/assets/top-products/topProduct5.svg";
import topProduct6 from "/public/assets/top-products/topProduct6.svg";
import topProduct7 from "/public/assets/top-products/topProduct7.svg";
import topProduct8 from "/public/assets/top-products/topProduct8.svg";
import topProduct9 from "/public/assets/top-products/topProduct9.svg";

const SecondSection = () => {
  const topProducts = [
    topProduct1,
    topProduct2,
    topProduct3,
    topProduct4,
    topProduct5,
    topProduct6,
    topProduct7,
    topProduct8,
    topProduct9,
    topProduct1,
  ];
  return (
    <div className="relative  my-auto ">
      <div
        className={`relative  z-20 md:py-4  w-full m-auto h-full  `}
      >
        <div className={`relative   z-40 m-auto  py-8 md:py-10 px-1 md:px-3 `}>
          <h1 className="text-center text-secondary-green-90 font-medium text-xl md:text-3xl lg:text-4xl tracking-wide">
            Top Products
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-5 py-6 md:py-12 justify-between gap-1 md:gap-3">
            {topProducts?.map((product, index) => (
              <div key={index} className="w-full h-full">
                <Image
                  src={product}
                  alt="top product"
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
          <div className="m-auto w-[50%] md:w-[180px]">
            <Button
              title="Shop now"
              icon={Cart}
              onclick={() => {
                window.location.href = "/";
              }}
            />
          </div>
        </div>

        <Image
          src={SmoothBackground}
          alt="rug"
          className="w-full object-cover h-auto"
          fill={true}
        />
      </div>

      {/* <Image
        src={RoughBackground}
        alt="background image"
        className="  object-cover w-full"
        fill={true}
      /> */}
    </div>
  );
};

export default SecondSection;
