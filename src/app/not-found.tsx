"use client";

import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";

import React from "react";
import Lottie from "lottie-react";
import LottieFile from "../components/404.json";
import Button from "@/components/button";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Spaces</title>
      </Head>
      <RootLayout>
        <div className=" pt-20 md:pt-24 padding-section">
          <Lottie
            animationData={LottieFile}
            loop={true}
            className=" w-[300px] md:w-[520px] max-w-[520px] m-auto mt-6 md:mt-16"
          />
          <h3 className="text-center text-sm md:text-base max-w-[474px] mb-7 text-[#454545] m-auto">
            Sorry! This page your are looking for does not exist or is not
            available at the moment
          </h3>
          <div className="w-[180px] m-auto">
            <Button
              title="Go Home"
              greenBackground
              className=""
              onclick={() => {}}
            />
          </div>
        </div>
      </RootLayout>
    </>
  );
};

export default NotFound;
