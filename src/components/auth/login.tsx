"use client";

import React from "react";
import InputField from "../input/input";

const Login = () => {
  return (
    <form className="m-auto h-screen space-y-6  mt-12 md:mt-14 ">
      <InputField label="Email Address" />
      <InputField label="Password" isPassword/>
    </form>
  );
};

export default Login;
