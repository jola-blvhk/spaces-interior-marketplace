import Image from "next/image";
import React from "react";
import Search from '../../assets/icons/search.svg'
import Profile from '../../assets/icons/profile.svg'
import Cart from '../../assets/icons/cart.svg'
const Header = () => {
  const isLoggedIn = true;
  return (
    <div className="padding-section py-6 md:py-10 ">
      <div className="max-width-section flex justify-between items-center">
        <div>
          <h2 className="hidden md:block text-primary-black-90">Consult with us</h2>
        </div>
        <div className="text-center">
          <h2 className=" font-megrim  text-4xl font-bold tracking-tight text-secondary-green-100">
            SPACES
          </h2>
          <p className="text-xs text-primary-black-90">Interior Market Place</p>
        </div>
        {isLoggedIn && (
          <div className="flex items-center justify-between gap-[49px]">
            <Image className="w-7 h-7 " src={Search} alt="search" />
            <Image className="w-7 h-7" src={Profile} alt="profile" />
            <Image className="w-7 h-7" src={Cart} alt="cart" />

          </div>
        )}
        {!isLoggedIn && (
          <div className="flex items-center justify-between gap-10">
            <button>Log in</button>
            <button className="border-2 border-black  bg-black text-white py-[14px] px-[28.5px] w-full text-center md:max-w-fit rounded-[15px] hover:bg-white hover:text-black">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
