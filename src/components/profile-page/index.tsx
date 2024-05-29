import React from "react";
import TitleHeading from "../products-components/title-heading";

const ProfilePageComponent = () => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          showBackButton
          title="Profile"
          description="Your one stop market place for all things furniture, accessories and more"
        />
      </div>
    </div>
  );
};

export default ProfilePageComponent;
