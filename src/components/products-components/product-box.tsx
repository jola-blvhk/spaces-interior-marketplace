import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductBoxProps {
  price: string | number;
  name: string;
  desc: string;
  imageSrc?: string;
  id: string | number;
}
const ProductBox: React.FC<ProductBoxProps> = ({
  price,
  name,
  desc,
  imageSrc,
  id,
}) => {
  return (
    <Link href={`/shop/${id}`}>
      <div className="relative w-full text-primary-black-90 font-medium cursor-pointer">
        <div className="relative bg-[#E3E3E3] w-full  h-[200px] md:h-[300px] max-h-[300px] rounded-lg md:rounded-[15px]">
          <Image
            src={imageSrc ? imageSrc : ""}
            className=""
            alt="name"
            fill={true}
            objectFit="contain rounded-lg md:rounded-[15px]"
          />
        </div>
        <div className="flex justify-between gap-5 md:gap-8 lg:gap-12 mt-3 md:mt-4 lg:mt-[18px]">
          <div>
            <h3 className="line-clamp-2 text-sm md:text-base lg:text-lg">
              {name}
            </h3>
            <p className=" line-clamp-1 pt-1 text-[#C6C6C6] text-xs md:text-sm lg:text-base">
              {desc}
            </p>
          </div>
          <h3 className="text-base md:text-xl  lg:text-xl xl:text-2xl">
            ₦{price.toLocaleString()}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
