import React from "react";

interface TypeFillerProps {
  name: string;
  types: string[];
}
const TypeFilter: React.FC<TypeFillerProps> = ({ types }) => {
  return (
    <div className="flex gap-2 md:gap-3  justify-between overflow-x-scroll lg:overflow-x-hidden whitespace-nowrap">
      {types?.map((type, index) => {
        return (
          <div
            key={index}
            tabIndex={1}
            className=" bg-secondary-green-100/50 text-primary-white-100 hover:bg-secondary-green-100 py-2 px-7 lg:py-3 lg:px-10 text-sm lg:text-base rounded-3xl lg:rounded-[50px]"
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

export default TypeFilter;
