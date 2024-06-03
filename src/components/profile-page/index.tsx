"use client";

import React, { useEffect, useState } from "react";
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
    "myorder" | "mydetails" | "payment" | "needhelp" | ""
  >("");
  const breakPoint = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [showDetailCard, setShowDetailCard] = useState(breakPoint);
  const [showTitleHeading, setShowTitleHeading] = useState(true);

  useEffect(() => {
    if (!breakPoint) {
      setActiveTab("myorder");
      setShowTitleHeading(true);
    } else {
      setActiveTab("");
    }
  }, [breakPoint]);

  const handleTabClick = (
    tab: "myorder" | "mydetails" | "payment" | "needhelp" | ""
  ) => {
    setActiveTab(tab);
    if (breakPoint) {
      setShowTitleHeading(false);
      setShowDetailCard(false);
    }
  };

  return (
    <div className="padding-section">
      <div className="max-width-section">
        {showTitleHeading && (
          <div className={`${breakPoint ? "mb-7" : "mb-16"}`}>
            <TitleHeading
              showBackButton
              title="Profile"
              description="Your one stop market place for all things furniture, accessories and more"
            />
          </div>
        )}

        <div>
          {breakPoint ? (
            <div className="flex flex-col md:flex-row  md:gap-[10%]">
              {showDetailCard ? (
                <div className="w-full md:w-[30%] text-primary-black-90 font-normal">
                  <div className="grid ">
                    <div className="grid items-center gap-2">
                      <div className="h-24 w-24 bg-secondary-green-100 rounded-full flex font-medium items-center justify-center text-4xl text-white m-auto">
                        <h4 className="text-center">JS</h4>
                      </div>
                      <div>
                        <h2 className="text-lg text-center">
                          <span className="text-secondary-green-100 text-2xl font-medium">
                            Hi{" "}
                          </span>
                          {""}
                          Julius Shoyemi
                        </h2>
                      </div>
                    </div>

                    <div
                      onClick={() => handleTabClick("myorder")}
                      className={`flex items-center mt-4 px-3 gap-4 py-6 border-b border-secondary-green-100/20 text-lg cursor-pointer ${
                        activeTab === "myorder" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className="cursor-pointer w-8 h-8"
                        src={activeTab === "myorder" ? CartGreen : Cart}
                        alt="cart"
                      />
                      <h3 className="">My Orders</h3>
                    </div>
                    <div
                      onClick={() => handleTabClick("mydetails")}
                      className={`flex items-center px-3 gap-4 py-6 border-b border-secondary-green-100/20 text-lg cursor-pointer ${
                        activeTab === "mydetails" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className="cursor-pointer w-8 h-8"
                        src={
                          activeTab === "mydetails" ? ProfileGreen : ProfileFill
                        }
                        alt="profile"
                      />
                      <h3 className="">My Details</h3>
                    </div>
                    <div
                      onClick={() => handleTabClick("payment")}
                      className={`flex items-center px-3 gap-4 py-6 border-b border-secondary-green-100/20 text-lg cursor-pointer ${
                        activeTab === "payment" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className="cursor-pointer w-8 h-8"
                        src={activeTab === "payment" ? CardGreen : Card}
                        alt="payment"
                      />
                      <h3 className="">Payment Methods</h3>
                    </div>
                    <div
                      onClick={() => handleTabClick("needhelp")}
                      className={`flex items-center px-3 gap-4 py-6 text-lg cursor-pointer ${
                        activeTab === "needhelp" && "text-secondary-green-100"
                      }`}
                    >
                      <Image
                        className="cursor-pointer w-8 h-8"
                        src={QuestionMark}
                        alt="help"
                      />
                      <h3 className="">Need help?</h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full ">
                  <div>
                    {activeTab === "myorder" && (
                      <MyOrders handleBack={() => setShowDetailCard(true)} />
                    )}
                    {activeTab === "mydetails" && <UserDetails />}
                    {activeTab === "payment" && <PaymentMethods />}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-6 lg:gap-10 w-full ">
              <div className="h-fit w-[50%] lg:w-[30%] xl:w-[25%] p-5 pb-8 border border-secondary-green-100/20 rounded-[15px] shadow-md">
                <div className="flex items-center gap-x-4 pb-6">
                  <div className="h-16 w-16 bg-secondary-green-100 rounded-full flex font-medium items-center justify-center text-2xl text-white">
                    <h4 className="text-center">JS</h4>
                  </div>
                  <div>
                    <h2 className="text-base text-center">
                      <span className="text-secondary-green-100 text-2xl font-medium ">
                        Hi{" "}
                      </span>
                      {""}
                      Julius Shoyemi
                    </h2>
                  </div>
                </div>

                <div
                  onClick={() => handleTabClick("myorder")}
                  className={`flex items-center px-3 gap-4 py-7 border-y border-secondary-green-100/20 text-base cursor-pointer ${
                    activeTab === "myorder" && "text-secondary-green-100"
                  }`}
                >
                  <Image
                    className="w-7 h-7"
                    src={activeTab === "myorder" ? CartGreen : Cart}
                    alt="cart"
                  />
                  <h3 className="">My Orders</h3>
                </div>
                <div
                  onClick={() => handleTabClick("mydetails")}
                  className={`flex items-center px-3 gap-4 py-7 border-b border-secondary-green-100/20 text-base cursor-pointer ${
                    activeTab === "mydetails" && "text-secondary-green-100"
                  }`}
                >
                  <Image
                    className="w-7 h-7"
                    src={activeTab === "mydetails" ? ProfileGreen : ProfileFill}
                    alt="profile"
                  />
                  <h3 className="">My Details</h3>
                </div>
                <div
                  onClick={() => handleTabClick("payment")}
                  className={`flex items-center px-3 gap-4 py-7 border-b border-secondary-green-100/20 text-base cursor-pointer ${
                    activeTab === "payment" && "text-secondary-green-100"
                  }`}
                >
                  <Image
                    className="w-7 h-7"
                    src={activeTab === "payment" ? CardGreen : Card}
                    alt="payment"
                  />
                  <h3 className="">Payment Methods</h3>
                </div>
                <div
                  onClick={() => handleTabClick("needhelp")}
                  className={`flex items-center px-3 gap-4 py-7 text-base cursor-pointer ${
                    activeTab === "needhelp" && "text-secondary-green-100"
                  }`}
                >
                  <Image className="w-7 h-7" src={QuestionMark} alt="help" />
                  <h3 className="">Need help?</h3>
                </div>
              </div>
              <div className=" ">
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
