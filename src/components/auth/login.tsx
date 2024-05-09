"use client";

import React from "react";
import InputField from "../input/input";
import Button from "../button";

const Login = () => {
  return (
    <form className="m-auto h-fit space-y-6 md:space-y-8  mt-12 md:mt-14 ">
      <InputField label="Email Address" />
      <InputField label="Password" isPassword />
      <Button title="Log in" onclick={() => {}} blackBackground />
    </form>
  );
};

export default Login;
