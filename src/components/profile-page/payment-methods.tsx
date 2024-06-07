import React from "react";
import SettingsHeader from "./settings-header";
import InputField from "../input/input";
import Button from "../button";

interface PaymentMethodProps {
  handleBack?: () => void;
}

const PaymentMethods: React.FC<PaymentMethodProps> = ({ handleBack }) => {
  return (
    <div>
      <SettingsHeader
        title="Payment Method"
        description="Add payment method to your account."
        handleBack={handleBack}
      />
      <form className="m-auto h-fit space-y-6 md:space-y-8 pt-0 md:pt-8 md:border-t md:border-secondary-green-100/20  mt-10 ">
        <div className="w-full md:w-[200px]">
          <Button title="Add" onclick={() => {}} blackBackground />
        </div>
      </form>
    </div>
  );
};

export default PaymentMethods;
