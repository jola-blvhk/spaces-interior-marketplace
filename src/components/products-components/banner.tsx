import Image from "next/image";
import React from "react";

interface BannerProps {
  imageSrc?: any;
}
const Banner: React.FC<BannerProps> = ({ imageSrc }) => {
  return (
    <div className="border-y border-[#D6D6D6] h-20 md:h-32 lg:h-52">
      <Image src={imageSrc ? imageSrc : ""} alt="logo" className="m-auto" />
    </div>
  );
};

export default Banner;
