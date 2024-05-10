import React from "react";
import InputField from "../input/input";
import Button from "../button";

const SignUp = () => {
  return (
    <div>
      {" "}
      <form className="m-auto h-fit space-y-6 md:space-y-8  mt-12 md:mt-14 ">
        <InputField label="Email Address" placeholder="xyz@gmail.com" />
        <InputField label="First Name" placeholder="first name" />
        <InputField label="Last Name" placeholder="last name" />
        <InputField label="Password" isPassword placeholder="**********" />
        <InputField
          label="Confirm Password"
          isPassword
          placeholder="**********"
        />
        <Button title="Sign Up" onclick={() => {}} blackBackground />
      </form>
    </div>
  );
};

export default SignUp;
