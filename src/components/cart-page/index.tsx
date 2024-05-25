import React from "react";
import TitleHeading from "../products-components/title-heading";

const Cart = () => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          title="Cart"
          description="Your cart items"
          showBackButton={true}
        />
      </div>
    </div>
  );
};

export default Cart;
