import React from "react";
import { FaFilter } from "react-icons/fa6";
const ColorPriceFilter = () => {
  return (
    <div className=" bg-secondary-green-100/10 border border-[#D9D9D9] rounded-[10px] cursor-pointer  text-secondary-green-100 md:rounded-[15px] w-fit p-4 hover:bg-secondary-green-100/60 font-bold focus:bg-secondary-green-100/60 focus:text-white  hover:text-white">
      <FaFilter className="lg:text-lg " />
    </div>
  );
};

export default ColorPriceFilter;
