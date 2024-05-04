import React from "react";
import Image from "next/image";
import Rug from "/public/assets/background-images/rugTexture.jpg";
import { SlideType } from "../slider/vendor-product-slide";

interface VendorProductFilterProps {
  selectedSection: SlideType;
  onSectionClick: (section: SlideType) => void;
}

const VendorProductFilter: React.FC<VendorProductFilterProps> = ({
  selectedSection,
  onSectionClick,
}) => {
  return (
    <div className="bg-secondary-green-100/10 relative grid grid-cols-2 items-center text-center p-1 md:p-2 rounded-[8.72px] md:rounded-[15px] text-sm md:text-base max-w-[400px] border border-[#D9D9D9] m-auto px-1 ">
      <div
        className={`relative py-3 md:py-4 w-full h-full rounded-[8.72px] cursor-pointer md:rounded-[15px] ${
          selectedSection === SlideType.Product
            ? "text-primary-white-100"
            : "text-primary-black-90"
        }`}
        onClick={() => onSectionClick(SlideType.Product)}
        tabIndex={0} // This makes the div focusable
      >
        <p className={`relative px-6 z-20 `}>Product</p>
        {selectedSection === SlideType.Product && (
          <Image
            src={Rug}
            alt="rug"
            className="rounded-[8.72px] md:rounded-[15px] w-full object-cover h-auto"
            fill={true}
          />
        )}
      </div>
      <div
        className={`relative  py-3 md:py-4 w-full h-full  rounded-[8.72px] cursor-pointer md:rounded-[15px] ${
          selectedSection === SlideType.Vendor
            ? "text-primary-white-100"
            : "text-primary-black-90"
        }`}
        onClick={() => onSectionClick(SlideType.Vendor)}
        tabIndex={0} // This makes the div focusable
      >
        <p className={`relative px-6 z-20 `}>Vendor</p>
        {selectedSection === SlideType.Vendor && (
          <Image
            src={Rug}
            alt="rug"
            className=" rounded-[8.72px] md:rounded-[15px] w-full object-cover h-auto"
            fill={true}
          />
        )}
      </div>
    </div>
  );
};

export default VendorProductFilter;
