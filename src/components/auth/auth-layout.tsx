"use client";

import { useAppDispatch, useAppSelector } from "@/redux";
import React, { useState } from "react";
import VendorProductFilter from "../filter/vendor-product";
import { authPageActions } from "@/redux/auth-page-slice";
import SignUp from "./signup";
import Login from "./login";
import { ROUTES } from "@/app/utils/routes";
import Link from "next/link";

const AuthLayout = () => {
  // const [selectedSection, setSelectedSection] = useState<string>("login");
  const authPageState = useAppSelector((state) => state.authPage.authPageState);
  const setAuthPageState = authPageActions.setAuthPageState;

  const handleSectionClick = (section: string) => {
    // setSelectedSection(section);
    dispatch(setAuthPageState(section));
  };
  const sections = [
    { value: "signup", label: "Sign Up" },
    { value: "login", label: "Log in" },
  ];
  const dispatch = useAppDispatch();
  return (
    <div className="padding-section pt-12 grid items-center md:h-screen">
      <div className="  max-w-[450px] h-fit   w-full m-auto my-auto ">
        <div className="pb-10 md:pb-11">
          <Link href={ROUTES.Home} className="m-auto text-center w-fit ">
            <h2 className=" font-megrim text-3xl  md:text-4xl  lg:text-5xl font-extrabold tracking-tight text-secondary-green-100 ">
              SPACES
            </h2>
            <p className=" text-[10px] md:text-xs lg:text-base text-primary-black-90">
              Interior Market Place
            </p>
          </Link>
        </div>
        <VendorProductFilter
          selectedSection={authPageState}
          onSectionClick={handleSectionClick}
          sections={sections}
        />

        {authPageState === "signup" && <SignUp />}

        {authPageState === "login" && <Login />}
      </div>
    </div>
  );
};

export default AuthLayout;
