import React from "react";
import BackButton from "../back-button";

interface TitleHeadingProps {
  title: string | String;
  description: string;
  showBackButton: boolean;
}
const TitleHeading: React.FC<TitleHeadingProps> = ({
  title,
  description,
  showBackButton,
}) => {
  return (
    <div className="flex gap-x-3 md:gap-x-6 lg:items-center">
      {showBackButton && (
        <div className="h-fit hidden md:block ">
          <BackButton />
        </div>
      )}

      <div>
        <h1 className="text-secondary-green-100  font-medium text-xl mb-1  lg:text-3xl">
          {title}
        </h1>
        <p className="text-primary-black-90 text-sm leading-6 lg:text-base mr-6 md:mr-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TitleHeading;
