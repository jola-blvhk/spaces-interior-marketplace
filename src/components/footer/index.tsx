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
      <div className="max-width-section"></div>
    </div>
  );
};

export default Footer;
