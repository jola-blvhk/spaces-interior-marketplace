import React from "react";
import SettingsHeader from "./settings-header";
import Button from "../button";
import OrderStatus from "./order-status";

interface MyOrdersProps {
  handleBack?: () => void;
}

const MyOrders: React.FC<MyOrdersProps> = ({ handleBack }) => {
  const orders = [
    { status: "Unsuccessful", orderId: "778499", cancelDate: "5, May 2024" },
    { status: "Ongoing", orderId: "778500", cancelDate: "6, May 2024" },
    { status: "Successful", orderId: "778501", cancelDate: "7, May 2024" },
    // Add more orders as needed
  ];

  return (
    <div>
      <SettingsHeader
        title="My Orders"
        description="Your one stop market place for all things furniture, accessories and more"
        handleBack={handleBack}
      />
      <div className="m-auto h-fit divide-y divide-secondary-green-100/20 md:border-t md:border-secondary-green-100/20 mt-2 md:mt-6">
        {orders.map((order, index) => (
          <OrderStatus
            key={index}
            status={order.status}
            orderId={order.orderId}
            cancelDate={order.cancelDate}
          />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
