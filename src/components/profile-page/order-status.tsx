import Image from "next/image";
import React from "react";
import ExampleProduct from "/public/assets/products/example-product.png";
import Button from "../button";

interface OrderStatusProps {
  status: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
  const variations = [1, 2, 3, 4];

  const getMessage = () => {
    switch (status) {
      case "Unsuccessful":
        return "Sorry, we were not able to process your order.";
      case "Ongoing":
        return "Congratulations, you have successfully placed your order.";
      case "Successful":
        return "Your order was successfully completed.";
      default:
        return "";
    }
  };

  const getButtonTitle = () => {
    switch (status) {
      case "Unsuccessful":
        return "Retry";
      case "Ongoing":
        return "Track";
      default:
        return "";
    }
  };

  const handleButtonClick = () => {
    if (status === "Unsuccessful") {
      // Handle retry logic
    } else if (status === "Ongoing") {
      // Handle track logic
    }
  };

  return (
    <div className="text-primary-black-90 grid gap-y-5">
      <div className=" space-y-1 md:space-y-0">
        <h3 className="text-base">
          Order Status :{" "}
          <span
            className={`font-medium ${
              status === "Unsuccessful" && "text-[#F84040]"
            } ${status === "Ongoing" && "text-[#74f840]"} ${
              status === "Successful" && "text-[#3771C8]"
            }`}
          >
            {status}
          </span>
        </h3>
        <p className="text-sm">{getMessage()}</p>
      </div>

      <div className="h-auto grid grid-cols-4 w-fit gap-1 md:gap-2">
        {variations.map((variation, index) => (
          <div
            key={index}
            className="relative  w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-[7.92px] md:rounded-[15px]"
          >
            <Image
              src={ExampleProduct ? ExampleProduct : ""}
              className="object-cover rounded-[7.92px] md:rounded-[15px]"
              alt="name"
              fill={true}
            />
          </div>
        ))}
      </div>

      <div className="grid gap-y-4 lg:flex justify-between items-center">
        <div className=" text-base md:text-sm">
          <h5>Order ID : 778499</h5>
          <h4>Cancel date : 5, May 2024</h4>
        </div>

        {status !== "Successful" && (
          <div className=" md:w-[200px] lg:w-[191px]">
            <Button
              title={getButtonTitle()}
              blackBackground
              onclick={handleButtonClick}
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
