import React, { InputHTMLAttributes, useState } from "react";
import { BiHappyHeartEyes } from "react-icons/bi";
import { PiSmileyXEyesBold } from "react-icons/pi";
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isPassword?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  isPassword = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-primary-black-90">
      <label className="block text-sm  md:text-base mb-1 md:mb-3">
        {label}
      </label>
      <div className="relative">
        <input
          className="text-sm md:text-base tracking-wide bg-white focus-within:bg-white appearance-none border border-[#D9D9D9] rounded-[11px] w-full md:rounded-[15px]  px-3 py-3  md:py-4 leading-tight focus:outline-none focus:shadow-outline"
          type={isPassword ? (!showPassword ? "password" : "text") : "text"}
          {...props}
        />
        {isPassword && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-3 text-primary-black-90"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <PiSmileyXEyesBold className="h-6 w-6 text-secondary-green-100" />
            ) : (
              <BiHappyHeartEyes className="h-6 w-6 text-secondary-green-100" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
