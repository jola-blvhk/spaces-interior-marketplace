import React from "react";

const Header = () => {
  return (
    <div className="padding-section py-6 md:py-10 ">
      <div className="max-width-section flex justify-between items-center">
        <div>
          <h2>Consult with us</h2>
        </div>
        <div className="text-center">
          <h2 className=" font-megrim  text-4xl font-bold tracking-tight text-secondary-green-100">
            SPACES
          </h2>
          <p className="text-xs">Interior Market Place</p>
        </div>
        <div className="flex items-center justify-between gap-10">
          <button>Log in</button>
          <button className="border-black bg-black text-white py-[14px] px-[28.5px] w-full text-center md:max-w-fit rounded-[15px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
