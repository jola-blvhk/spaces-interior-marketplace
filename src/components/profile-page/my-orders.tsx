import React from "react";
import SettingsHeader from "./settings-header";

interface MyOrdersProps {
  handleBack?: () => void;
}
const MyOrders: React.FC<MyOrdersProps> = ({ handleBack }) => {
  return (
    <div>
      <SettingsHeader
        title="My Orders"
        description="Your one stop market place for all things furniture, accessories and more"
        handleBack={handleBack}
      />
    </div>
  );
};

export default MyOrders;
