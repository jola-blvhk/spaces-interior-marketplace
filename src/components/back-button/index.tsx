import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
const BackButton = () => {
  return (
    <div className=" bg-secondary-green-100/10 border border-[#D9D9D9] rounded-[10px]  md:rounded-[15px] w-fit p-4 md:p-5">
      <IoChevronBackOutline className="lg:text-lg"/>
    </div>
  );
};

export default BackButton;
