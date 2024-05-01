import Image from "next/image";
import React from "react";
import Search from "../../assets/icons/search.svg";
import Profile from "../../assets/icons/profile.svg";
import Cart from "../../assets/icons/cart.svg";
import ProfileGreen from "../../assets/icons/profile-green.svg";
import CartGreen from "../../assets/icons/cart-green.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import { useAppSelector } from "@/redux";
const Header = () => {
  const authState = useAppSelector((state) => state.auth.authState);

  return (
    <div className="padding-section py-4  md:py-6  ">
      <div className="max-width-section flex justify-between items-center">
        <div>
          <Image
            className=" cursor-pointer md:hidden w-6 h-6 "
            src={Hamburger}
            alt="menu"
          />
          <h2 className="hidden md:block text-primary-black-90">
            Consult with us
          </h2>
        </div>
        {/* logo  */}
        <div className="text-center ml-8 md:ml-10">
          <h2 className=" font-megrim text-3xl  md:text-4xl font-bold tracking-tight text-secondary-green-100">
            SPACES
          </h2>
          <p className=" text-[10px] md:text-xs text-primary-black-90">
            Interior Market Place
          </p>
        </div>

        {/* mobile profile and cart */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between gap-3">
            <Image
              className=" cursor-pointer w-7 h-7 "
              src={ProfileGreen}
              alt="profile"
            />
            <Image
              className=" cursor-pointer w-7 h-7"
              src={CartGreen}
              alt="cart"
            />
          </div>
        </div>

        {/*desktop profile, cart and auth */}
        <div className="hidden md:block">
          {authState && (
            <div className="flex items-center justify-between gap-[49px]">
              <Image
                className=" cursor-pointer w-7 h-7 "
                src={Search}
                alt="search"
              />
              <Image
                className=" cursor-pointer w-7 h-7"
                src={Profile}
                alt="profile"
              />
              <Image
                className=" cursor-pointer w-7 h-7"
                src={Cart}
                alt="cart"
              />
            </div>
          )}
          {!authState && (
            <div className="flex items-center justify-between gap-10">
              <button>Log in</button>
              <button className="border-2 border-black  bg-black text-white py-[14px] px-[28.5px] w-full text-center md:max-w-fit rounded-[15px] hover:bg-white hover:text-black">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
