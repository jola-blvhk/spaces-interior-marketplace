import NextImageType from "next/image";
import Image from "next/image";
import React from "react";

interface CategoryBoxProps {
  image: string;
  title: string;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({ image, title }) => {
  return (
    <div className={`relative cursor-pointer w-full h-full  `}>
      <h1 className="absolute z-20 bottom-0 pl-5 pb-5 lg:pl-10 lg:pb-10  text-center text-[#D9D9D9] font-medium  text-lg md:text-xl lg:text-3xl  tracking-wide">
        {title}
      </h1>

      <div className="w-full h-full relative">
        <Image
          src={image}
          alt={title}
          className="object-cover w-full h-full "
          // fill={true}
        />
      </div>
    </div>
  );
};

export default CategoryBox;
