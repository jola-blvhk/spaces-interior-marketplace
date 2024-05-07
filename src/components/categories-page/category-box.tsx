import NextImageType from "next/image";
import Image from "next/image";
import React from "react";

interface CategoryBoxProps {
  image: string;
  title: string;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({ image, title }) => {
  return (
    <div className={`relative   cursor-pointer   `}>
      <h1 className="text-center text-secondary-green-90 font-medium text-xl md:text-3xl lg:text-4xl tracking-wide">
        {title}
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

export default CategoryBox;
