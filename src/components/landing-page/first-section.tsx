import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const FirstSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="padding-section pt-4 md:pt-6 lg:pt-12 bg-primary-white-100">
      <div className="max-width-section grid w-full justify-center">
        <div className=" rounded-[10px] md:rounded-[15px] flex m-auto items-center gap-2 py-3 px-4 md:px-6  bg-primary-white-100 border border-solid border-[##D9D9D9] w-[350px] max-w-[400px] md:w-[420px] md:max-w-[420px] box-border rotate-[0.02deg]">
          <IoSearch className="text-[#737373B2] text-3xl" />
          <input
            placeholder="Search for furniture, accessories and more"
            defaultValue={searchValue}
            className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-xs placeholder:md:text-sm  text-sm tracking-wider"
            // onClick={handleSearchClicked}
            onChange={handleChange}
          />
        </div>

              
        <div className="text-center pt-7 ">
          <h1 className="text-secondary-green-100 text-xl md:text-3xl lg:text-4xl font-medium leading-[30px]md:leading-[33px] lg:leading-[55px]">
            Shop for latest furniture and home accessories
            <br /> from your favourite vendors
          </h1>
          <h3 className="pt-3 lg:pt-0 text-sm text-primary-black-90 md:text-base lg:text-lg">
            Your one stop market place for all things furniture, accessories and
            more
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
