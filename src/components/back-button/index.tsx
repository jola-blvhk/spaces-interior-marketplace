import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div
      className=" bg-secondary-green-100/10 border border-[#D9D9D9] rounded-[10px] cursor-pointer  md:rounded-[15px] w-fit p-4 md:p-5 hover:bg-secondary-green-100/80 font-bold focus:bg-secondary-green-100/80 focus:text-white  hover:text-white"
      onClick={handleBack}
    >
      <IoChevronBackOutline className="lg:text-lg" />
    </div>
  );
};

export default BackButton;
