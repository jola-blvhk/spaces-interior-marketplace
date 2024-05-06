"use client";

import React, { useState } from "react";
import BackButton from "../back-button";
import VendorProductFilter from "../filter/vendor-product";
import { SlideType } from "../slider/vendor-product-slide";
import { IoSearch } from "react-icons/io5";

const CategoriesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSection, setSelectedSection] = useState<SlideType>(
    SlideType.Product
  );

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };
  const handleSectionClick = (section: SlideType) => {
    setSelectedSection(section);
  };
  return (
    <div>
      <div className="padding-section">
        <div className=" gap-4 space-y-5 md:space-y-0 md:flex lg:grid grid-cols-3 md:justify-between max-width-section items-center">
          <div className="h-fit my-auto flex gap-3 items-center">
            <BackButton />
            <div className="flex md:hidden rounded-[10px]  w-full  items-center gap-4 py-3 px-4    md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] h-fit md:my-auto  box-border rotate-[0.02deg]">
              <IoSearch className="text-[#737373B2] text-2xl" />
              <input
                placeholder="Search Product"
                defaultValue={searchValue}
                className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-sm placeholder:md:text-sm  text-sm tracking-wider"
                // onClick={handleSearchClicked}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full md:w-full lg:w-[90%] md:m-auto order-3 md:order-none">
            <VendorProductFilter
              selectedSection={selectedSection}
              onSectionClick={handleSectionClick}
            />
          </div>

          <div className=" hidden rounded-[10px] md:rounded-[15px] w-full md:flex md:ml-auto items-center gap-2 py-3 px-4 md:px-6   md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] md:h-fit md:my-auto  box-border rotate-[0.02deg]">
            <IoSearch className="text-[#737373B2] text-3xl" />
            <input
              placeholder="Search Product"
              defaultValue={searchValue}
              className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-xs placeholder:md:text-sm  text-sm tracking-wider"
              // onClick={handleSearchClicked}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
