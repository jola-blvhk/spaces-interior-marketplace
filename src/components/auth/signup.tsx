import React from "react";
import InputField from "../input/input";
import Button from "../button";

const SignUp = () => {
  return (
    <div>
      {" "}
      <form className="m-auto h-fit space-y-6 md:space-y-8  mt-12 md:mt-14 ">
        <InputField label="Email Address" />
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <InputField label="Password" isPassword />
        <InputField label="Confirm Password" isPassword />
        <Button title="Sign Up" onclick={() => {}} blackBackground />
      </form>
    </div>
  );
};

export default SignUp;
