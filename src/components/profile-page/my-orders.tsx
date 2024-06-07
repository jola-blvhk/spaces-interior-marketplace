import React from "react";
import SettingsHeader from "./settings-header";
import Button from "../button";

import OrderStatus from "./order-status";

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
      <div className="m-auto h-fit space-y-6 md:space-y-8 pt-0 md:pt-8 md:border-t md:border-secondary-green-100/20  mt-10 ">
        <OrderStatus status="Unsuccessful" />
        <OrderStatus status="Ongoing" />
        <OrderStatus status="Successful" />
      </div>
    </div>
  );
};

export default MyOrders;
