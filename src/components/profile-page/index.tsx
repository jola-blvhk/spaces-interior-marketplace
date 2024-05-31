"use client";

import React, { useState } from "react";
import TitleHeading from "../products-components/title-heading";
import { useMediaQuery } from "react-responsive";
import MyOrders from "./my-orders";
import UserDetails from "./details";
import PaymentMethods from "./payment-methods";
import { IoArrowBackCircle } from "react-icons/io5";

const ProfilePageComponent = () => {
  const [activeTab, setActiveTab] = useState<
    "myorder" | "mydetails" | "payment" | "needhelp"
  >("myorder");
  const breakPoint = useMediaQuery({
    query: "(max-width:  786px)",
  });

  const [showDetailCard, setShowDetailCard] = useState(breakPoint);
  const isMobile = window.innerWidth < 1000;
  const mobilePhone = window.innerWidth < 480;

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
                <div className="w-full md:w-[30%]">
                  <div className="cursor-pointer p-4 border border-gray-300 rounded-md">
                    {/* Sidebar content, e.g., user info and menu items */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                          JS
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">
                            Hi Julius Shoyemi
                          </h2>
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setActiveTab("myorder");
                          setShowDetailCard(false);
                        }}
                      >
                        <h3 className="text-lg font-medium">My Orders</h3>
                      </div>
                      <div
                        onClick={() => {
                          setActiveTab("mydetails");
                          setShowDetailCard(false);
                        }}
                      >
                        <h3 className="text-lg font-medium">My Details</h3>
                      </div>
                      <div
                        onClick={() => {
                          setActiveTab("payment");
                          setShowDetailCard(false);
                        }}
                      >
                        <h3 className="text-lg font-medium">Payment Methods</h3>
                      </div>
                      <div
                        onClick={() => {
                          setActiveTab("needhelp");
                        }}
                      >
                        <h3 className="text-lg font-medium">Need Help?</h3>
                      </div>
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
