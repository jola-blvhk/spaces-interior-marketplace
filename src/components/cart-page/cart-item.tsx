"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Counter } from "../counter";

interface CartItemProps {
  image: string;
  name: string | String;
  price: number;
  colorOptions?: string[];
  sizeOptions?: string[];
  defaultColorOption?: string;
  defaultSizeOption?: string;
  idOfProduct: string | String;
  quantity: number;
}
const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  price,
  idOfProduct,
  quantity,
  colorOptions,
  sizeOptions,
  defaultColorOption,
  defaultSizeOption,
}) => {
  const [selectedColorOption, setSelectedColorOption] = useState(undefined);

  const handleSelect = (option: any) => {
    setSelectedColorOption(option);
  };

  return (
    <div className="flex items-center text-primary-black-90 text-sm lg:text-base  gap-x-4 md:gap-x-6 ">
      <div className="relative  w-32 h-32 md:w-36 md:h-36 rounded-[8.18px] md:rounded-[15px]">
        <Image
          src={image ? image : ""}
          className="object-cover rounded-[11px] md:rounded-[15px]"
          alt="name"
          fill={true}
          // objectFit="contain rounded-lg md:rounded-[15px]"
        />
      </div>
      <div className=" h-full gap-y-3 md:gap-y-4 grid justify-between">
        <h3 className="line-clamp-2 ">{name}</h3>
        <h3 className=" line-clamp-1  font-semibold">
          ₦ {price?.toLocaleString()}
        </h3>
        <div className="flex gap-2 md:gap-3 divide-x ">
          {colorOptions && (
            <Dropdown
              options={colorOptions}
              value={defaultColorOption}
              className="w-fit max-w-fit text-primary-black-90 text-sm lg:text-base"
              controlClassName=" border-none text-primary-black-90 text-sm lg:text-base  flex items-center gap-3 cursor-pointer p-0"
              placeholderClassName="text-primary-black-90 text-sm lg:text-base"
              menuClassName="rounded-[15px] border border-[#D9D9D9] shadow-md"
              arrowClosed={
                <IoIosArrowDown className=" text-lg text-black-primary-90" />
              }
              arrowOpen={
                <IoIosArrowUp className=" text-lg text-primary-black-90" />
              }
            />
          )}

          <div className="flex items-center gap-2">
            {sizeOptions && (
              <Dropdown
                options={sizeOptions}
                value={defaultSizeOption}
                className="w-fit max-w-fit"
                controlClassName=" border-none text-sm lg:text-base  flex items-center gap-3 cursor-pointer p-0 pl-2 md:pl-3"
                placeholderClassName=" text-primary-black-90 text-sm lg:text-base"
                menuClassName="rounded-[15px] border border-[#D9D9D9] shadow-md"
                arrowClosed={<IoIosArrowDown className=" text-lg" />}
                arrowOpen={<IoIosArrowUp className=" text-lg" />}
              />
            )}
          </div>
        </div>
        <div className="max-w-[120px]">
          <Counter
            onAdd={() => {}}
            onSubtract={() => {}}
            name={name}
            price={price}
            id={idOfProduct}
            count={quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
