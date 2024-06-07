import React from "react";
import SettingsHeader from "./settings-header";
import InputField from "../input/input";
import Button from "../button";

interface UserDetailsProps {
  handleBack?: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ handleBack }) => {
  return (
    <div>
      <SettingsHeader
        title="My Details"
        description="Edit and save any of your details below."
        handleBack={handleBack}
      />
      <form className="h-fit space-y-6 md:space-y-8 pt-0 md:pt-8 md:border-t md:border-secondary-green-100/20 lg:w-[70%]  xl:w-[60%] mt-10 ">
        <InputField label="Full name" />
        <InputField label="Email address" />
        <InputField label="Phone number" />
        <div className="w-full md:w-[200px]">
          <Button title="Save" onclick={() => {}} blackBackground />
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
