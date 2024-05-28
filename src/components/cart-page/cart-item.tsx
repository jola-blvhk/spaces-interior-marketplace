import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}
const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  price,
  color,
  size,
  quantity,
}) => {
  return (
    <div className="flex items-center text-primary-black-90 gap-x-3 md:gap-x-6 ">
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[8.18px] md:rounded-[15px]">
        <Image
          src={image ? image : ""}
          className="object-cover"
          alt="name"
          fill={true}
          objectFit="contain rounded-lg md:rounded-[15px]"
        />
      </div>
      <div className=" h-full gap-y-1 md:gap-y-3 grid justify-between">
        <h3 className="line-clamp-2 text-sm md:text-base lg:text-lg">{name}</h3>
        <h3 className=" line-clamp-1  font-semibold">
          ₦ {price?.toLocaleString()}
        </h3>
        <div className="flex gap-2 divide-x">
          <p>{color}</p>
          <p className="pl-2">{size}</p>
          <div className="flex items-center gap-1">
            <p className="pl-2">Qty {quantity}</p>
            <IoIosArrowDown />
          </div>
        </div>
        <MdDelete />
      </div>
    </div>
  );
};

export default CartItem;
