import Image from "next/image";
import React from "react";

interface BannerProps {
  imageSrc?: any;
}
const Banner: React.FC<BannerProps> = ({ imageSrc }) => {
  return (
    <div className="border-y border-[#D6D6D6] h-24 md:h-32 lg:h-52">
      <Image
        src={imageSrc ? imageSrc : ""}
        alt="logo"
        width={100}
        height={100}
        className="m-auto"
      />
    </div>
  );
};

export default Banner;
