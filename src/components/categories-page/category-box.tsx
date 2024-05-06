import NextImageType from "next/image";
import Image from "next/image";
import React from "react";

interface CategoryBoxProps {
  image: string;
}
const categoryBox: React.FC<CategoryBoxProps> = ({ image }) => {
  return (
    <div className={`relative   z-40 m-auto  py-8 md:py-10 px-1 md:px-3 `}>
      <h1 className="text-center text-secondary-green-90 font-medium text-xl md:text-3xl lg:text-4xl tracking-wide">
        Top Products
      </h1>

      <Image
        src={image}
        alt="top product"
        className="object-cover w-full h-auto"
      />
      {/* <Image
          src={image}}
          alt="rug"
          className="w-full object-cover h-auto"
          fill={true}
        /> */}
    </div>
  );
};

export default categoryBox;
