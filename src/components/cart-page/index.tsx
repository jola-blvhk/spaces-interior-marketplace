import React from "react";
import TitleHeading from "../products-components/title-heading";
import CartItem from "./cart-item";
import ExampleProduct from "/public/assets/products/example-product.png";

const Cart = () => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          title="Cart"
          description="Your cart items"
          showBackButton={true}
        />

        <div className="grid md:grid-cols-2">
          <div>
            <CartItem
              image={ExampleProduct.src}
              name="Tobacco Product"
              price={500000}
              color="White"
              size="5ft x 7ft"
              quantity={2}
            />
          </div>
          <div>Total</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
