"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface CounterProps {
  className?: string;
  count: number;
  onAdd?: () => void;
  onSubtract?: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  className,
  count,
  onAdd,
  onSubtract,
}) => {
  const [isMinusClicked, setIsMinusClicked] = useState(false);
  const [isPlusClicked, setIsPlusClicked] = useState(false);

  const handleMinusClick = () => {
    setIsMinusClicked(true);
    setTimeout(() => setIsMinusClicked(false), 200); // Reset after 200ms
    if (onSubtract) onSubtract();
  };

  const handlePlusClick = () => {
    setIsPlusClicked(true);
    setTimeout(() => setIsPlusClicked(false), 200); // Reset after 200ms
    if (onAdd) onAdd();
  };

  return (
    <div
      className={`flex justify-between gap-4 items-center w-full border border-[#D9D9D9] h-full p-2 rounded-[8.72px] md:rounded-[15px] bg-primary-white-100 text-primary-black-90 align-items font-medium ${className}`}
    >
      <div
        className={`border border-[#D9D9D9] ${
          isMinusClicked
            ? "bg-secondary-green-100 text-white"
            : "hover:text-secondary-green-100 hover:bg-secondary-green-100/10"
        } text-base md:text-xl font-bold px-2 py-1 md:px-4 md:py-2 rounded-[8.72px] md:rounded-[15px] cursor-pointer`}
        onClick={handleMinusClick}
      >
        <FiMinus />
      </div>
      <div className="text-xl">{count}</div>
      <div
        className={`border border-[#D9D9D9] ${
          isPlusClicked
            ? "bg-secondary-green-100 text-white"
            : "hover:text-secondary-green-100 hover:bg-secondary-green-100/10"
        } text-lg md:text-xl font-bold px-2 py-1 md:px-4 md:py-2 rounded-[8.72px] md:rounded-[15px] cursor-pointer`}
        onClick={handlePlusClick}
      >
        <FiPlus />
      </div>
    </div>
  );
};
