import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiApple, SiFacebook } from "react-icons/si";
const ThirdPartyAuth = () => {
  return (
    <div className="grid grid-cols-3 gap-2 justify-between">
      <div className="border border-[#D9D9D9] rounded-[10px] md:rounded-[15px] py-3 w-full md:py-4 cursor-pointer ">
        <FcGoogle className="h-6 w-6 00 m-auto" />
      </div>
      <div className="border border-[#D9D9D9] rounded-[10px] md:rounded-[15px] py-3  md:py-4 cursor-pointer ">
        <SiApple className="h-6 w-6 00 m-auto" />
      </div>
      <div className="border border-[#D9D9D9] rounded-[10px] md:rounded-[15px] py-3  md:py-4 cursor-pointer ">
        <SiFacebook className="h-6 w-6 00 text-[#1877F2] m-auto" />
      </div>
    </div>
  );
};

export default ThirdPartyAuth;
