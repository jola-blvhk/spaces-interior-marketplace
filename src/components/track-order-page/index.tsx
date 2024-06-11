"use client";

import React, { useEffect, useState } from "react";
import TitleHeading from "../products-components/title-heading";
import InputField from "../input/input";
import { FaCog, FaTruck, FaCheckCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { HiCog6Tooth } from "react-icons/hi2";
import { LuPackageCheck } from "react-icons/lu";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

const TrackOrderPage = ({ trackingNumber }: { trackingNumber: String }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  // Debounce the input value
  const debouncedInputValue = useDebounce(inputValue, 3000);
  const steps = [
    {
      status: "Order placed",
      date: "Tue, 5 May 2024",
      time: "5:55 AM",
      icon: <MdShoppingCart className="text-xl" />,
      completed: true,
    },
    {
      status: "Processing order",
      date: "Tue, 5 May 2024",
      time: "5:55 AM",
      icon: <HiCog6Tooth className="text-xl" />,
      completed: true,
    },
    {
      status: "Order in transit",
      date: "Tue, 5 May 2024",
      time: "5:55 AM",
      icon: <FaTruck className="text-xl" />,
      completed: false,
    },
    {
      status: "Order delivered",
      date: "Tue, 5 May 2024",
      time: "5:55 AM",
      icon: <LuPackageCheck className="text-xl" />,
      completed: false,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedInputValue) {
      router.push(`/trackorder/${debouncedInputValue}`);
    }
  }, [debouncedInputValue, router]);

  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          title="Track Order"
          showBackButton
          description="Track your order anytime"
        />
        <main className=" mt-6 md:mt-16  max-w-[705px] m-auto md:border border-[#D9D9D9] rounded-[15px] md:shadow-md md:py-12 md:px-16 text-primary-black-90  space-y-8 md:space-y-6">
          <InputField
            placeholder="Enter tracking number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="">
            <h2 className="hidden md:block text-secondary-green-100 mb-1 text-lg md:text-xl font-medium">
              Tracking
            </h2>
            <div className="grid lg:flex items-center gap-0.5 md:gap-x-3">
              <p>Tracking number NG{trackingNumber} </p>
              <p>Estimated delivery date Wed, 10 May 2024</p>
            </div>
            <div className="relative">
              <div className="absolute border-l-[2px] border-dashed  border-[#D9D9D9] left-5 top-0 h-full"></div>
              {steps.map((step, index) => (
                <div key={index} className="flex items-center mt-10">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center z-10 ${
                      step.completed
                        ? " bg-secondary-green-100"
                        : "bg-[#D9D9D9]"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="ml-4 text-primary-black-90">
                    <h4
                      className={`text-base font-medium ${
                        step.completed ? "" : ""
                      }`}
                    >
                      {step.status}
                    </h4>
                    <p className="text-xs text-gr">
                      {step.date} • {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TrackOrderPage;
