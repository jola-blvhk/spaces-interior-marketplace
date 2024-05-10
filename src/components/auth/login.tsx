"use client";

import React from "react";
import InputField from "../input/input";
import Button from "../button";
import ThirdPartyAuth from "./third-party-auth";

const Login = () => {
  return (
    <>
      <form className="m-auto h-fit space-y-6 md:space-y-8  mt-12 md:mt-14 ">
        <InputField label="Email Address" />
        <InputField label="Password" isPassword />
        <Button title="Log in" onclick={() => {}} blackBackground />
      </form>
      {/* Third Party Authentication */}
      <div className="mt-5">
        <ThirdPartyAuth />
      </div>
    </>
  );
};

export default Login;
