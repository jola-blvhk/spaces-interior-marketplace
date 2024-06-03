import React from "react";
import BackButton from "../back-button";
import { IoChevronBackOutline } from "react-icons/io5";

interface SettingsHeaderProps {
  title: string | String;
  description: string;
  handleBack?: () => void;
}
const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  title,
  description,
  handleBack,
}) => {
  return (
    <div className="flex gap-x-3 md:gap-x-6 lg:items-center">
      <div className="h-fit md:hidden ">
        <div
          className=" bg-secondary-green-100/10 border border-[#D9D9D9] rounded-[10px] text-secondary-green-100 cursor-pointer  md:rounded-[15px] w-fit p-4 md:p-5 hover:bg-secondary-green-100/60 font-bold focus:bg-secondary-green-100/60 focus:text-white  hover:text-white"
          onClick={handleBack}
        >
          <IoChevronBackOutline className="lg:text-lg" />
        </div>
      </div>
      <div>
        <h1 className="text-secondary-green-100  font-medium text-xl mb-1  md:text-base">
          {title}
        </h1>
        <p className="text-primary-black-90 text-sm leading-6 lg:text-base mr-6 md:mr-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SettingsHeader;
