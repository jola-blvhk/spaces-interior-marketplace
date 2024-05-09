"use client";

import { useAppDispatch, useAppSelector } from "@/redux";
import React, { useState } from "react";
import VendorProductFilter from "../filter/vendor-product";
import { authPageActions } from "@/redux/auth-page-slice";

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
    <>
      <div className="m-auto  text-center w-fit mb-10 md:mb-11">
        <h2 className=" font-megrim text-3xl  md:text-4xl  lg:text-5xl font-extrabold tracking-tight text-secondary-green-100 ">
          SPACES
        </h2>
        <p className=" text-[10px] md:text-xs lg:text-base text-primary-black-90">
          Interior Market Place
        </p>
      </div>
      <VendorProductFilter
        selectedSection={authPageState}
        onSectionClick={handleSectionClick}
        sections={sections}
      />
    </>
  );
};

export default AuthLayout;
