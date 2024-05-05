import Image from "next/image";
import Link from "next/link";
import React from "react";
import Instagram from "/public/assets/social-media/instagram.svg";
import linkedin from "/public/assets/social-media/linkedin.svg";
import gmail from "/public/assets/social-media/gmail.svg";
import countryFlag from "/public/assets/social-media/country-flag.svg";

const Footer = () => {
  return (
    <div className="pt-12 md:pt-20 padding-section">
      <div className="flex max-width-section items-center justify-center divide-x py-4 md:py-7 divide-secondary-green-100/50 border-y border-y-secondary-green-100/50">
        <div className="flex items-center justify-center gap-3  md:gap-7 pr-5 md:pr-10 ">
          <Link
            href="https://www.instagram.com/_ojuolape_/"
            className=" flex items-center justify-center"
          >
            <Image
              src={Instagram}
              alt="instagram"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </Link>
          <Link
            href="https://twitter.com/uxbabe?s=21"
            className=" flex items-center justify-center"
          >
            <Image src={gmail} alt="gmail" className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
          <Link
            href="https://twitter.com/uxbabe?s=21"
            className=" flex items-center justify-center"
          >
            <Image
              src={linkedin}
              alt="linkedin"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </Link>
        </div>
        <Link
          href="https://twitter.com/uxbabe?s=21"
          className=" flex items-center justify-center pl-5 md:pl-10 "
        >
          <Image
            src={countryFlag}
            alt="countryFlag"
            className="w-6 h-6 md:w-9 md:h-9 "
          />
        </Link>
      </div>

      <div className="max-width-section grid grid-cols-2 gap-8 lg:gap-0 lg:grid-cols-4 pt-16 pb-20 lg:pt-20 lg:pb-28 justify-between">
        <div className="">
          <h2 className=" font-megrim text-3xl  md:text-4xl  lg:text-5xl font-extrabold tracking-tight text-secondary-green-100 ">
            SPACES
          </h2>
          <p className=" text-[10px] md:text-xs lg:text-base text-primary-black-90">
            Interior Market Place
          </p>
        </div>

        <div className="">
          <h4 className="pb-2 md:pb-4 text-base md:text-lg text-secondary-green-100 font-semibold">
            Help and Information
          </h4>
          <div className=" grid gap-1 md:gap-2 text-sm text-primary-black-100 md:text-base lg:text-lg">
            <p>Help</p>
            <p>Track Order</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className="">
          <h4 className="pb-2 md:pb-4 text-base md:text-lg text-secondary-green-100 font-semibold">
            About Spaces
          </h4>
          <div className=" grid gap-1 md:gap-2 text-sm text-primary-black-100 md:text-base lg:text-lg">
            <p>About us</p>
            <p>Careers at Spaces</p>
            <p>Help improve Spaces website</p>
          </div>
        </div>
        <div className="">
          <h4 className="pb-2 md:pb-4 text-base md:text-lg text-secondary-green-100 font-semibold">
            Become a vendor
          </h4>
          <div className=" grid gap-1 md:gap-2 text-sm text-primary-black-100 md:text-base  lg:text-lg">
            <p>Sell with us</p>
            <p>Vendor help center</p>
            <p>Become a partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
