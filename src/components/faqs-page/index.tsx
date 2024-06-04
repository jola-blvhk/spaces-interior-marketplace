import React from "react";
import image from "/public/assets/faqsDummyImage.png";
import Image from "next/image";
const FaqsPage = () => {
  return (
    <div className="">
      <div className={`relative cursor-pointer w-full h-44 md:h-96 `}>
        <h1 className="absolute z-20 bottom-0 pl-5 pb-5 lg:pl-10 lg:pb-10  text-center text-[#D9D9D9] font-medium  text-lg md:text-xl lg:text-3xl  tracking-wide">
          Title
        </h1>

        <div className="w-full h-full relative">
          <Image
            src={image}
            alt="faqs"
            className="object-cover w-full h-full "
            // fill={true}
          />
        </div>
      </div>
      <div className="padding-section">
        <div className="max-width-section"></div>
      </div>
    </div>
  );
};

export default FaqsPage;
