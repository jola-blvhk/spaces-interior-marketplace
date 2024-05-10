import Image from "next/image";
import React from "react";
import Rug from "/public/assets/background-images/rugTexture.svg";

interface ButtonProps {
  backgroundImage?: boolean;
  onclick: () => void;
  title: string;
  icon?: string;
  greenBackground?: boolean;
  lightGreenBackground?: boolean;
  blackBackground?: boolean;
  className?: string; // Add className prop
}

const Button: React.FC<ButtonProps> = ({
  backgroundImage,
  title,
  onclick,
  icon,
  greenBackground,
  lightGreenBackground,
  blackBackground,
  className, // Destructure className prop
}) => {
  return (
    <button
      className={`tracking-wide py-3 md:py-4 ${className || ""} ${
        icon && "text-primary-black-100 bg-white"
      }
      px-6 text-sm md:text-base ${
        greenBackground &&
        "bg-secondary-green-100 text-primary-white-100 hover:bg-secondary-green-100/50"
      } ${lightGreenBackground && "bg-secondary-green-100/50"} ${
        blackBackground &&
        " bg-primary-black-100 text-primary-white-100 border hover:border-[#d9d9d9]  hover:bg-primary-white-100 hover:text-primary-black-100"
      }
      w-full relative rounded-[8.72px] cursor-pointer md:rounded-[15px] ${
        backgroundImage && "text-primary-white-100"
      } ${icon ? "flex gap-2 items-center justify-center" : "text-center"}`}
      onClick={onclick}
    >
      <p className={`relative z-20`}>{title}</p>
      {backgroundImage && (
        <Image
          src={Rug}
          alt="rug"
          className="rounded-[8.72px] md:rounded-[15px] w-full object-cover h-auto"
          fill={true}
        />
      )}
      {icon && (
        <Image src={icon} alt="icon" className="w-4 h-4 md:w-6 md:h-6" />
      )}
    </button>
  );
};

export default Button;
