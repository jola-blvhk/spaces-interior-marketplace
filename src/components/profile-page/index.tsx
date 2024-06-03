"use client";

import React, { useState } from "react";
import TitleHeading from "../products-components/title-heading";
import { useMediaQuery } from "react-responsive";
import MyOrders from "./my-orders";
import UserDetails from "./details";
import PaymentMethods from "./payment-methods";
import { IoArrowBackCircle } from "react-icons/io5";
import Image from "next/image";
import Cart from "@/assets/icons/cart-2.svg";
import CartGreen from "/public/assets/icons/cart-two-green.svg";
import ProfileGreen from "/public/assets/icons/profile-fill-green.svg";
import ProfileFill from "@/assets/icons/profile-fill.svg";
import Card from "/public/assets/icons/atm-card.svg";
import CardGreen from "/public/assets/icons/atm-card-green.svg";
import QuestionMark from "/public/assets/icons/question-mark.svg";
const ProfilePageComponent = () => {
  const [activeTab, setActiveTab] = useState<
    "myorder" | "mydetails" | "payment" | "needhelp"
  >("myorder");
  const breakPoint = useMediaQuery({
    query: "(max-width:  786px)",
  });

  const [showDetailCard, setShowDetailCard] = useState(breakPoint);

  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          showBackButton
          title="Profile"
          description="Your one stop market place for all things furniture, accessories and more"
        />

        <div>
          {breakPoint ? (
            <div className="flex flex-col md:flex-row mt-7 md:gap-[10%]">
              {showDetailCard ? (
                <div className="w-full md:w-[30%] text-primary-black-90 font-normal">
                  <div className="grid ">
                    <div className="grid items-center gap-2">
                      <div className="h-24 w-24 bg-secondary-green-100 rounded-full flex font-medium items-center justify-center text-4xl   text-white m-auto">
                        <h4 className="text-center">JS</h4>
                      </div>
                      <div>
                        <h2 className="text-lg text-center ">
                          <span className="text-secondary-green-100 text-2xl font-medium">
                            Hi{" "}
                          </span>
                          {""}
                          Julius Shoyemi
                        </h2>
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        setActiveTab("myorder");
                        setShowDetailCard(false);
                      }}
                      className={`flex items-center mt-4 px-3 gap-4 py-6 border-b border-secondary-green-100/50  text-lg cursor-pointer ${
                        activeTab === "myorder" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className=" cursor-pointer w-8 h-8 "
                        src={activeTab === "myorder" ? CartGreen : Cart}
                        alt="cart"
                      />
                      <h3 className="text-lg font-medium">My Orders</h3>
                    </div>
                    <div
                      onClick={() => {
                        setActiveTab("mydetails");
                        setShowDetailCard(false);
                      }}
                      className={`flex items-center px-3 gap-4 py-6 border-b border-secondary-green-100/50  text-lg cursor-pointer ${
                        activeTab === "mydetails" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className=" cursor-pointer w-8 h-8 "
                        src={
                          activeTab === "mydetails" ? ProfileGreen : ProfileFill
                        }
                        alt="cart"
                      />
                      <h3 className="text-lg font-medium">My Details</h3>
                    </div>
                    <div
                      onClick={() => {
                        setActiveTab("payment");
                        setShowDetailCard(false);
                      }}
                      className={`flex items-center px-3 gap-4 py-6 border-b border-secondary-green-100/50  text-lg cursor-pointer ${
                        activeTab === "payment" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className=" cursor-pointer w-8 h-8 "
                        src={activeTab === "payment" ? CardGreen : Card}
                        alt="cart"
                      />
                      <h3 className="text-lg font-medium">Payment Methods</h3>
                    </div>
                    <div
                      onClick={() => {
                        setActiveTab("needhelp");
                        setShowDetailCard(false);
                      }}
                      className={`flex items-center px-3 gap-4 py-6  text-lg cursor-pointer ${
                        activeTab === "needhelp" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className=" cursor-pointer w-8 h-8 "
                        src={QuestionMark}
                        alt="cart"
                      />
                      <h3 className="text-lg font-medium">Need help?</h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full  mt-4 md:mt-0">
                  <IoArrowBackCircle onClick={() => setShowDetailCard(true)} />
                  <div>
                    {activeTab === "myorder" && <MyOrders />}
                    {activeTab === "mydetails" && <UserDetails />}
                    {activeTab === "payment" && <PaymentMethods />}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-10 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    JS
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Hi Julius Shoyemi</h2>
                  </div>
                </div>
                <div onClick={() => setActiveTab("myorder")}>
                  <h3 className="text-lg font-medium">My Orders</h3>
                </div>
                <div onClick={() => setActiveTab("mydetails")}>
                  <h3 className="text-lg font-medium">My Details</h3>
                </div>
                <div onClick={() => setActiveTab("payment")}>
                  <h3 className="text-lg font-medium">Payment Methods</h3>
                </div>
                <div onClick={() => setActiveTab("needhelp")}>
                  <h3 className="text-lg font-medium">Need Help?</h3>
                </div>
              </div>
              <div>
                {activeTab === "myorder" && <MyOrders />}
                {activeTab === "mydetails" && <UserDetails />}
                {activeTab === "payment" && <PaymentMethods />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
