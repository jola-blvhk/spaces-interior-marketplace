"use client";

import React, { useState } from "react";

interface TypeFillerProps {
  name: string;
  types: string[];
}
const TypeFilter: React.FC<TypeFillerProps> = ({ types }) => {
  const [clickedHeader, setClickedHeader] = useState<number>(0);

  const handleHeaderClick = (index: number) => {
    setClickedHeader(index === clickedHeader ? 0 : index);
  };
  return (
    <div className="flex gap-2 md:gap-3  justify-between  whitespace-nowrap">
      {types?.map((type, index) => {
        return (
          <div
            key={index}
            onClick={() => handleHeaderClick(index)}
            className={` text-primary-white-100  py-2 px-7 lg:py-3 lg:px-10 text-sm lg:text-base rounded-3xl lg:rounded-[50px] cursor-pointer ${
              clickedHeader === index
                ? " bg-secondary-green-100"
                : "bg-secondary-green-100/50  hover:bg-secondary-green-100"
            }`}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
