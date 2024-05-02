import React, { useState } from "react";
import Image from "next/image";
import Rug from "/public/assets/background-images/rugTexture.jpg";

const VendorProductFilter = () => {
  // State to track which section is clicked
  const [selectedSection, setSelectedSection] = useState<string | null>("vendor");

  return (
    <div className="bg-secondary-green-100/10 relative grid grid-cols-2 items-center text-center py-2 px-2 rounded-[8.72px] md:rounded-[15px] text-sm md:text-base max-w-[400px] border border-[#D9D9D9] m-auto ">
      <div
        className={`relative w-full h-full rounded-[8.72px] cursor-pointer md:rounded-[15px] ${
          selectedSection === "vendor"
            ? "text-primary-white-100"
            : "text-primary-black-100"
        }`}
        onClick={() => setSelectedSection("vendor")}
        tabIndex={0} // This makes the div focusable
      >
        <p className={`relative px-6 z-20 py-3`}>Vendor</p>
        {selectedSection === "vendor" && (
          <Image
            src={Rug}
            alt="rug"
            className="rounded-[8.72px] md:rounded-[15px] w-full object-cover h-auto"
            fill={true}
          />
        )}
      </div>
      <div
        className={`relative w-full h-full  rounded-[8.72px] cursor-pointer md:rounded-[15px] ${
          selectedSection === "product"
            ? "text-primary-white-100"
            : "text-primary-black-100"
        }`}
        onClick={() => setSelectedSection("product")}
        tabIndex={0} // This makes the div focusable
      >
        <p className={`relative px-6 z-20 py-3`}>Product</p>
        {selectedSection === "product" && (
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
