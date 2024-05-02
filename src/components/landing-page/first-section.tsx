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
    <div className="padding-section py-4 bg-primary-white-100">
      <div className="max-width-section grid w-full justify-center">
        <div className=" rounded-[10px] md:rounded-[15px] flex items-center gap-2 py-3 px-4 md:px-6  bg-primary-white-100 border border-solid border-[##D9D9D9] w-[350px] max-w-[400px] md:w-[420px] md:max-w-[420px] box-border rotate-[0.02deg]">
          <IoSearch className="text-[#737373B2] text-2xl md:text-3xl" />
          <input
            placeholder="Search for furniture, accessories and more"
            defaultValue={searchValue}
            className="focus:outline-none w-full text-darkSecondary placeholder:text-[#726D6DB2] text-xs md:text-sm  tracking-wider"
            // onClick={handleSearchClicked}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
