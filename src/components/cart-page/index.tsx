import React from "react";
import TitleHeading from "../products-components/title-heading";
import CartItem from "./cart-item";
import ExampleProduct from "/public/assets/products/example-product.png";

const Cart = () => {
  const colorOptions = ["White", "Black", "Brown"];
  const sizeOptions = ["5ft x 7ft", "6ft x 8ft", "7ft x 9ft"];
  return (
    <div className="padding-section ">
      <div className="max-width-section">
        <TitleHeading
          title="Cart"
          description="Your cart items"
          showBackButton={true}
        />

        <div className="grid lg:grid-cols-2  pt-7 md:pt-10">
          <div>
            <CartItem
              image={ExampleProduct.src}
              name="Tobacco stool"
              price={500000}
              colorOptions={colorOptions}
              defaultColorOption={colorOptions[0]}
              sizeOptions={sizeOptions}
              defaultSizeOption={sizeOptions[0]}
              idOfProduct="3"
            />
          </div>
          <div>Total</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
