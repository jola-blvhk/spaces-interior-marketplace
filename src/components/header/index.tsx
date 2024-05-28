"use client";

import Image from "next/image";
import React, { useState } from "react";
import Search from "../../assets/icons/search.svg";
import Cart2 from "../../assets/icons/cart-2.svg";
import ProfileFill from "../../assets/icons/profile-fill.svg";
import ProfileGreen from "../../assets/icons/profile-green.svg";
import CartGreen from "../../assets/icons/cart-green.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import { useAppDispatch, useAppSelector } from "@/redux";
import { IoMdClose } from "react-icons/io";
import { uiActions } from "@/redux/ui-slice";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "@/app/utils/routes";
import "animate.css";
import "animate.css/animate.min.css";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const authState = useAppSelector((state) => state.auth.authState);
  const hamburgerState = useAppSelector((state) => state.ui.hamBurgerState);
  const setHamburgerState = uiActions.setHamburgerState;
  const dispatch = useAppDispatch();
  const pathName = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const isCategoriesPage = pathName.startsWith("/categories");
  return (
    <div className="relative z-[1000000]">
      <div className="fixed w-full bg-white">
        <div className="padding-section py-3  md:pt-6 md:pb-5   ">
          <div className="max-width-section grid grid-cols-3 items-center">
            <div>
              {hamburgerState ? (
                <IoMdClose
                  className="text-2xl text-secondary-green-100 cursor-pointer md:hidden  animate-pulse"
                  onClick={() => {
                    dispatch(setHamburgerState(false));
                  }}
                />
              ) : (
                <Image
                  className=" cursor-pointer md:hidden w-6 h-6  "
                  src={Hamburger}
                  alt="menu"
                  onClick={() => {
                    dispatch(setHamburgerState(true));
                  }}
                />
              )}

              <div className="hidden md:flex items-center gap-6 lg:gap-12 text-primary-black-90">
                <h2 className=" cursor-pointer hover:text-secondary-green-100">
                  Design with us
                </h2>
                <Link href={ROUTES.Categories}>
                  <h2
                    className={` cursor-pointer text-primary-black-90 hover:text-secondary-green-100 ${
                      isCategoriesPage && "text-secondary-green-100 font-medium"
                    }`}
                  >
                    Categories
                  </h2>
                </Link>
              </div>
            </div>
            {/* logo  */}
            <div
              className="text-center m-auto "
              onClick={() => {
                dispatch(setHamburgerState(false));
              }}
            >
              <Link href="/">
                <h2 className=" font-megrim text-3xl  md:text-4xl  font-bold tracking-tight text-secondary-green-100">
                  SPACES
                </h2>
                <p className=" text-[10px] md:text-xs text-primary-black-90">
                  Interior Market Place
                </p>
              </Link>
            </div>

            {/* mobile profile and cart */}
            <div className="grid justify-end md:hidden">
              <div className="flex items-center justify-between gap-3">
                <Image
                  className=" cursor-pointer w-7 h-7 "
                  src={ProfileGreen}
                  alt="profile"
                />
                <Link href={ROUTES.Cart}>
                  <Image
                    className=" cursor-pointer w-7 h-7"
                    src={CartGreen}
                    alt="cart"
                  />
                </Link>
              </div>
            </div>

            {/*desktop profile, cart and auth */}
            <div className="hidden md:grid justify-end">
              {authState && (
                <div className="flex  items-center ml-0 gap-[49px] w-fit">
                  <Image
                    className="block xl:hidden w-7 h-7"
                    src={Search}
                    alt="search"
                  />
                  <div className="flex items-center gap-7">
                    <div className=" md:hidden xl:flex rounded-[10px] md:rounded-[15px] flex m-auto items-center gap-2 py-3 px-4 md:px-6  cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9]  max-w-[350px]  box-border rotate-[0.02deg]">
                      <input
                        placeholder="Search"
                        defaultValue={searchValue}
                        className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-xs placeholder:md:text-sm placeholder:lg:text-base  text-sm md:text-base tracking-wider"
                        // onClick={handleSearchClicked}
                        onChange={handleChange}
                      />
                      <FiSearch className="text-[#737373B2] text-3xl font-bold" />
                    </div>
                    <Image
                      className=" cursor-pointer w-7 h-7"
                      src={ProfileFill}
                      alt="profile"
                    />
                  </div>

                  <Link href={ROUTES.Cart}>
                    <Image
                      className=" cursor-pointer w-7 h-7"
                      src={Cart2}
                      alt="cart"
                    />
                  </Link>
                </div>
              )}
              {!authState && (
                <div className="flex items-center justify-between gap-10">
                  <Link
                    href={ROUTES.AuthLayout}
                    onClick={() => {
                      dispatch(setHamburgerState(false));
                    }}
                  >
                    <button>Log in</button>
                  </Link>
                  <Link
                    href={ROUTES.AuthLayout}
                    onClick={() => {
                      dispatch(setHamburgerState(false));
                    }}
                  >
                    <button className="border-2 border-primary-primary-black-100-100  bg-black text-primary-white-100 py-[14px] px-[28.5px] w-full text-center md:max-w-fit rounded-[15px] hover:bg-primary-white-100 hover:text-black">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {hamburgerState ? (
          <div className="bg-primary-white-100  top-full  md:hidden overflow-hidden ">
            <ul className=" absolute pb-8 top-full w-full grid justify-center bg-primary-white-100 z-[10000000000] animate__animated animate__slideInDown">
              <Link
                href={ROUTES.Home}
                onClick={() => {
                  dispatch(setHamburgerState(false));
                }}
              >
                <li className="text-primary-black-100 text-sm hover:text-secondary-green-100 hover:cursor-pointer transition ease-in-out delay-150 text-center  pt-8 pb-3 ">
                  Design with us
                </li>
              </Link>
              <Link
                href={ROUTES.Categories}
                onClick={() => {
                  dispatch(setHamburgerState(false));
                }}
              >
                <li
                  className={`text-primary-black-100 text-sm hover:text-secondary-green-100 hover:cursor-pointer transition ease-in-out delay-150 text-center ${
                    isCategoriesPage
                      ? "text-secondary-green-100 font-medium"
                      : ""
                  }   py-3`}
                >
                  Categories
                </li>
              </Link>
              <Link
                href={ROUTES.AuthLayout}
                onClick={() => {
                  dispatch(setHamburgerState(false));
                }}
              >
                <li className="text-primary-black-100 text-sm hover:text-secondary-green-100 hover:cursor-pointer transition ease-in-out delay-150  py-3  ">
                  <button className="border border-[#DCDCDC]  bg-primary-white-100 text-black py-[14px]  w-[133px] text-center rounded-[10px] hover:bg-primary-black-100 hover:text-primary-white-100">
                    Log in
                  </button>
                </li>
              </Link>
              <Link
                href={ROUTES.AuthLayout}
                onClick={() => {
                  dispatch(setHamburgerState(false));
                }}
              >
                <li className=" transition ease-in-out delay-150  py-3  ">
                  <button className="border  border-black  bg-primary-black-100 text-primary-white-100 py-[14px]  text-sm w-[133px] text-center  rounded-[10px] hover:bg-primary-white-100 hover:text-primary-black-100">
                    Sign Up
                  </button>
                </li>
              </Link>
            </ul>
            <div
              className="fixed top-[20%] bottom-0 left-0 right-0 z-[1000000000] bg-primary-black-100 opacity-30"
              onClick={() => {
                dispatch(setHamburgerState(false));
              }}
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
