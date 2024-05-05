"use client";

import Image from "next/image";
import React from "react";
import Search from "../../assets/icons/search.svg";
import Profile from "../../assets/icons/profile.svg";
import Cart from "../../assets/icons/cart.svg";
import ProfileGreen from "../../assets/icons/profile-green.svg";
import CartGreen from "../../assets/icons/cart-green.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import { useAppDispatch, useAppSelector } from "@/redux";
import { IoMdClose } from "react-icons/io";
import { uiActions } from "@/redux/ui-slice";
import Link from "next/link";
const Header = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  const hamburgerState = useAppSelector((state) => state.ui.hamBurgerState);
  const setHamburgerState = uiActions.setHamburgerState;
  const dispatch = useAppDispatch();
  return (
    <div className="relative z-50">
      <div className="fixed w-full bg-white">
        <div className="padding-section py-3  md:pt-6 md:pb-5   ">
          <div className="max-width-section flex justify-between items-center">
            <div>
              {hamburgerState ? (
                <IoMdClose
                  className="text-2xl text-secondary-green-100 cursor-pointer md:hidden"
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
                <h2 className=" ">Design with us</h2>
                <h2 className=" ">Categories</h2>
              </div>
            </div>
            {/* logo  */}
            <div className="text-center ml-10 md:mr-20 lg:mr-22">
              <h2 className=" font-megrim text-3xl  md:text-4xl  font-bold tracking-tight text-secondary-green-100">
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
                  <button className="border-2 border-primary-primary-black-100-100  bg-black text-primary-white-100 py-[14px] px-[28.5px] w-full text-center md:max-w-fit rounded-[15px] hover:bg-primary-white-100 hover:text-black">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {hamburgerState ? (
          <div className="bg-primary-white-100  top-full  md:hidden overflow-hidden">
            <ul className=" absolute pb-8 top-full w-full grid justify-center bg-primary-white-100 z-[10000000000]">
              <Link
                href="/"
                onClick={() => {
                  dispatch(setHamburgerState(false));
                }}
              >
                <li className="text-primary-black-100 text-sm hover:text-secondary-green-100 hover:cursor-pointer transition ease-in-out delay-150 text-center  pt-8 pb-3 ">
                  Design with us
                </li>
              </Link>
              <Link
                href="/"
                onClick={() => {
                  dispatch(setHamburgerState(false));
                }}
              >
                <li className="text-primary-black-100 text-sm hover:text-secondary-green-100 hover:cursor-pointer transition ease-in-out delay-150 text-center   py-3">
                  Categories
                </li>
              </Link>
              <Link
                href="/"
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
                href="/"
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
