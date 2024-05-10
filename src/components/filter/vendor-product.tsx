import React from "react";
import Image from "next/image";
import Rug from "/public/assets/background-images/rugTexture.jpg";

interface FilterProps<T> {
  selectedSection: T;
  sections: { value: T; label: string }[];
  onSectionClick: (section: T) => void;
}

const VendorProductFilter = <T,>({
  selectedSection,
  sections,
  onSectionClick,
}: FilterProps<T>) => {
  return (
    <div className="bg-secondary-green-100/10 relative grid grid-cols-2 items-center text-center p-1 md:p-2 rounded-[8.72px] md:rounded-[15px] text-sm md:text-base max-w-[450px] border border-[#D9D9D9] m-auto px-1 ">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`relative py-3 md:py-4 w-full h-full rounded-[8.72px] cursor-pointer md:rounded-[15px] ${
            selectedSection === section.value
              ? "text-primary-white-100"
              : "text-primary-black-90"
          }`}
          onClick={() => onSectionClick(section.value)}
          tabIndex={0} // This makes the div focusable
        >
          <p className={`relative px-6 z-20 `}>{section.label}</p>
          {selectedSection === section.value && (
            <Image
              src={Rug}
              alt="rug"
              className="rounded-[8.72px] md:rounded-[15px] w-full object-cover h-auto"
              fill={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VendorProductFilter;
