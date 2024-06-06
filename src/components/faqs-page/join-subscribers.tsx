"use client";

import React from "react";
import InputField from "../input/input";
import Button from "../button";

const JoinSubscribers = () => {
  return (
    <div className=" bg-secondary-green-100/20 rounded-[15px] border border-[#d9d9d9] grid md:flex gap-6 md:justify-between md:items-center px-4 py-12 md:px-10 lg:px-14">
      <div className="">
        <h1 className=" font-semibold md:pb-2 text-secondary-green-100  text-3xl md:text-4xl lg:text-6xl  ">
          Join 2000+ <span className="text-base md:text-2xl lg:text-3xl xl:text-4xl"> subscribers</span>
        </h1>
        <p className="text-primary-black-90 text-sm md:text-base lg:text-lg">
          Everything you need to know about us
        </p>
      </div>
      <div className="md:w-[40%] space-y-4 md:space-y-5">
        <InputField placeholder="enter your email" />
        <div className="md:w-[224px]">
          <Button title="Send" onclick={() => {}} backgroundImage />
        </div>
      </div>
    </div>
  );
};

export default JoinSubscribers;
