import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
const ThirdPartyAuth = () => {
  return (
    <div className="flex gap-2 justify-between">
      <div>
        <FcGoogle className="h-6 w-6 00" />
      </div>
      <div>
        <SiApple className="h-6 w-6 00" />
      </div>
      <div></div>
    </div>
  );
};

export default ThirdPartyAuth;
