import React from "react";
import image from "/public/assets/faqsDummyImage.png";
import Image from "next/image";
import { Faq } from "./questions";
import JoinSubscribers from "./join-subscribers";

const FaqsPage = () => {
  return (
    <div className="">
      <div
        className={`relative cursor-pointer w-full h-44 md:h-60 lg:h-72 xl:h-96 `}
      >
        <div className="absolute w-full z-20 bottom-0  pb-5 md:pb-10 lg:pb-16 padding-section  ">
          <div className="max-width-section space-y-2  md:space-y-4">
            <h2 className="font-semibold text-[12px]  md:text-base lg:text-lg text-secondary-green-100">
              The FAQS
            </h2>
            <h1 className=" font-semibold text-secondary-green-100  text-2xl md:text-4xl lg:text-6xl  ">
              Help Center
            </h1>
            <p className="text-primary-black-90 text-[12px]  md:text-base lg:text-lg">
              Everything you need to know about us
            </p>
          </div>
        </div>
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt="faqs"
            className="object-cover w-full h-full "
            // fill={true}
          />
        </div>
      </div>
      <div className="padding-section ">
        <div className="max-width-section ">
          <div className="grid md:grid-cols-2 md:items-center gap-8 my-10 md:my-16 lg:my-20">
            <div>
              <h1 className=" font-semibold md:pb-2 text-secondary-green-100  text-2xl md:text-4xl lg:text-6xl  ">
                FAQS
              </h1>
              <p className="text-primary-black-90 text-[12px] md:text-base lg:text-lg">
                Everything you need to know about us
              </p>
            </div>
            <Faq />
          </div>
          <JoinSubscribers />
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
