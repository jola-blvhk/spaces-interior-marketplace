"use client";

import React from "react";
import TitleHeading from "../products-components/title-heading";
import CartItem from "./cart-item";
import ExampleProduct from "/public/assets/products/example-product.png";
import { useAppSelector } from "@/redux";

const Cart = () => {
  const colorOptions = ["White", "Black", "Brown"];
  const sizeOptions = ["5ft x 7ft", "6ft x 8ft", "7ft x 9ft"];

  const cartItems = useAppSelector((state) => state.cart.itemsList);

  console.log(cartItems);
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
            {cartItems &&
              cartItems?.map((item, index) => (
                <CartItem
                  key={index}
                  image={ExampleProduct.src}
                  name={item.name}
                  price={item.price}
                  colorOptions={colorOptions}
                  defaultColorOption={item.color}
                  sizeOptions={sizeOptions}
                  defaultSizeOption={sizeOptions[0]}
                  idOfProduct={item.id}
                />
              ))}
          </div>
          <div>Total</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
