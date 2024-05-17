import React from "react";
import BackButton from "../back-button";
import ColorPriceFilter from "../filter/color-price-filter";
import { IoSearch } from "react-icons/io5";
import StarRating from "../StarRating";
import Banner from "./banner";
import TypeFilter from "../filter/type-filter";

interface HeaderProductProps {
  title: string | String;
  description: string;
  placeholder: string; // Making placeholder optional
  vendor?: boolean;
  product?: boolean;
  vendorLogoSrc?: any;
}
const HeaderProduct: React.FC<HeaderProductProps> = ({
  title,
  description,
  placeholder,
  vendor,
  vendorLogoSrc,
  product, // Adding product to the props
  ...props
}) => {
  const types = ["All", "Home", "Office", "Kitchen"];
  return (
    <div>
      <div className="md:flex justify-between">
        <div className="grid md:flex gap-3 md:gap-6 md:items-center">
          <div className="h-fit my-auto flex gap-3 items-center">
            <BackButton />
            {product && (
              <div className="flex md:hidden rounded-[10px]  w-full  items-center gap-4 py-3 px-4    md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] h-fit md:my-auto  box-border rotate-[0.02deg]">
                <IoSearch className="text-[#737373B2] text-2xl" />
                <input
                  className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-sm placeholder:md:text-sm  text-sm tracking-wider"
                  placeholder={placeholder}
                  // onClick={handleSearchClicked}
                  {...props}
                />
              </div>
            )}
          </div>
          <div>
            <h1 className="text-secondary-green-100  font-medium text-xl mb-1  lg:text-3xl">
              {title}
            </h1>
            <p className="text-primary-black-90 text-sm leading-6 lg:text-base mr-6 md:mr-0">
              {description}
            </p>
          </div>
        </div>
        <div className=" md:flex md:items-center gap-4">
          {vendor && (
            <div className="pt-1 md:pt-0">
              {" "}
              <StarRating totalStars={5} rating={4} />{" "}
            </div>
          )}
          {product && (
            <div className="hidden md:flex items-center gap-4">
              <ColorPriceFilter />
              <div className=" hidden rounded-[10px] md:rounded-[15px] w-full md:flex md:ml-auto items-center gap-2 py-3 px-4 md:px-6   md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] md:h-fit md:my-auto  box-border rotate-[0.02deg]">
                <IoSearch className="text-[#737373B2] text-3xl" />
                <input
                  type="text"
                  className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-xs placeholder:md:text-sm  text-sm tracking-wider"
                  placeholder={placeholder}
                  {...props}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {vendor && (
        <div className="mt-10">
          <Banner imageSrc={vendorLogoSrc} />

          <div className="md:flex justify-between">
            <div className="grid md:flex gap-3 md:gap-6 md:items-center">
              <div className="h-fit my-auto flex gap-3 items-center">
                <div className="md:hidden">
                  <ColorPriceFilter />
                </div>

                <div className="flex md:hidden rounded-[10px]  w-full  items-center gap-4 py-3 px-4    md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] h-fit md:my-auto  box-border rotate-[0.02deg]">
                  <IoSearch className="text-[#737373B2] text-2xl" />
                  <input
                    className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-sm placeholder:md:text-sm  text-sm tracking-wider"
                    placeholder={placeholder}
                    // onClick={handleSearchClicked}
                    {...props}
                  />
                </div>
              </div>
              <div>
                <TypeFilter name="All" types={types} />
              </div>
            </div>
            <div className=" md:flex md:items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <ColorPriceFilter />
                <div className=" hidden rounded-[10px] md:rounded-[15px] w-full md:flex md:ml-auto items-center gap-2 py-3 px-4 md:px-6   md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] md:h-fit md:my-auto  box-border rotate-[0.02deg]">
                  <IoSearch className="text-[#737373B2] text-3xl" />
                  <input
                    type="text"
                    className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-xs placeholder:md:text-sm  text-sm tracking-wider"
                    placeholder={placeholder}
                    {...props}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProduct;
