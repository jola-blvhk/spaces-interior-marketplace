"use client";
import { useAppDispatch } from "@/redux";
import { cartActions } from "@/redux/cart-slice";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface CounterProps {
  className?: string;
  count?: number; // Make count an optional prop
  id: string | String;
  name: string | String;
  price: number;
  onAdd?: () => void;
  onSubtract?: () => void;
  largeCounter?: boolean;
}

export const Counter: React.FC<CounterProps> = ({
  className,
  count = 1, // Default value is 1 if count is not provided
  id,
  name,
  price,
  onAdd,
  onSubtract,
  largeCounter,
}) => {
  const [currentCount, setCurrentCount] = useState(count);
  const [isMinusClicked, setIsMinusClicked] = useState(false);
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const dispatch = useAppDispatch();

  const handleMinusClick = () => {
    if (currentCount > 1) {
      setIsMinusClicked(true);
      setTimeout(() => setIsMinusClicked(false), 200); // Reset after 200ms
      if (onSubtract) onSubtract();
      dispatch(cartActions.removeFromCart(id.toString()));
      setCurrentCount(currentCount - 1);
    }
  };

  const handlePlusClick = () => {
    setIsPlusClicked(true);
    setTimeout(() => setIsPlusClicked(false), 200); // Reset after 200ms
    if (onAdd) onAdd();
    // dispatch(
    //   cartActions.addToCart({
    //     id,
    //     name,
    //     price,
    //     quantity: 1,
    //     totalPrice: price,
    //     image: ExampleProduct,
    //     totalPrice: 0,
    //     size: selectedOption || "",
    //     color: colors[clickedColor]?.name || colors[0]?.name,
    //   })
    // );
    setCurrentCount(currentCount + 1);
  };

  return (
    <div
      className={`flex justify-between gap-4 items-center w-full border border-[#D9D9D9] h-full   ${
        largeCounter
          ? "rounded-[8.72px] md:rounded-[15px] p-2"
          : " rounded-[8.72px] p-1 md:p-1.5"
      } bg-primary-white-100 text-primary-black-90 align-items font-medium ${className}`}
    >
      <div
        className={`border border-[#D9D9D9] ${
          isMinusClicked
            ? "bg-secondary-green-100 text-white"
            : "hover:text-secondary-green-100 hover:bg-secondary-green-100/10"
        } font-bold  ${
          largeCounter
            ? " rounded-[8.72px] ] px-2 py-1 md:rounded-[15px] md:px-4 md:py-2  text-base md:text-xl"
            : " rounded-[8.72px] px-2 py-1 text-sm md:text-base"
        } cursor-pointer ${
          currentCount === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handleMinusClick}
      >
        <FiMinus />
      </div>
      <div className={` ${largeCounter ? "text-base md:text-xl" : "text-sm "}`}>
        {currentCount}
      </div>
      <div
        className={`border border-[#D9D9D9] ${
          isPlusClicked
            ? "bg-secondary-green-100 text-white"
            : "hover:text-secondary-green-100 hover:bg-secondary-green-100/10"
        } font-bold  ${
          largeCounter
            ? " rounded-[8.72px] ] px-2 py-1 md:rounded-[15px] md:px-4 md:py-2  text-base md:text-xl"
            : " rounded-[8.72px] px-2 py-1 text-sm md:text-base"
        } cursor-pointer`}
        onClick={handlePlusClick}
      >
        <FiPlus />
      </div>
    </div>
  );
};
