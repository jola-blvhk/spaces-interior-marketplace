"use client";

import React from "react";
import TitleHeading from "../products-components/title-heading";
import CartItem from "./cart-item";
import ExampleProduct from "/public/assets/products/example-product.png";
import { useAppSelector } from "@/redux";

const Cart = () => {
  const colorOptions = ["White", "Black", "Brown"];
  const sizeOptions = ["5ft x 7ft", "6ft x 8ft", "7ft x 9ft"];
  let total = 0;
  const cartItems = useAppSelector((state) => state.cart.itemsList);

  cartItems?.forEach((item) => {
    total += item.totalPrice;
  });
  console.log(total);
  const cartItemss = [
    {
      id: "4",
      price: 600000,
      quantity: 1,
      totalPrice: 600000,
      name: "Product 4",
      size: "",
      color: "blue",
      image: {
        src: "/_next/static/media/example-product.e5bd79bc.png",
        height: 2068,
        width: 1784,
        blurDataURL:
          "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexample-product.e5bd79bc.png&w=7&q=70",
        blurWidth: 7,
        blurHeight: 8,
      },
    },
    {
      id: "23",
      price: 600000,
      quantity: 2,
      totalPrice: 1200000,
      name: "Product 3",
      size: "",
      color: "blue",
      image: {
        src: "/_next/static/media/example-product.e5bd79bc.png",
        height: 2068,
        width: 1784,
        blurDataURL:
          "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexample-product.e5bd79bc.png&w=7&q=70",
        blurWidth: 7,
        blurHeight: 8,
      },
    },
    {
      id: "21",
      price: 600000,
      quantity: 1,
      totalPrice: 600000,
      name: "Tobacco plant",
      size: { value: "small", label: "small" },
      color: "red",
      image: {
        src: "/_next/static/media/example-product.e5bd79bc.png",
        height: 2068,
        width: 1784,
        blurDataURL:
          "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexample-product.e5bd79bc.png&w=7&q=70",
        blurWidth: 7,
        blurHeight: 8,
      },
    },
  ];
  return (
    <div className="padding-section ">
      <div className="max-width-section">
        <TitleHeading
          title="Cart"
          description="Your cart items"
          showBackButton={true}
        />

        <div className="grid lg:grid-cols-2 divide-x-2 divide-secondary-green-100/10 pt-7 md:pt-10">
          <div className="space-y-8 md:space-y-11">
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
                  quantity={item.quantity}
                />
              ))}
          </div>
          <div className="lg:pl-14 max-w-[450px]">
            <h1 className="text-secondary-green-100  font-medium text-xl mb-1  lg:text-3xl">
              Total
            </h1>
            <div className="font-semibold  py-4 border-y-2 border-secondary-green-100/10">
              <div className="flex justify-between items-center">
                <h4>Sub Total</h4> <p>₦  {total.toLocaleString()}</p>
              </div>
              <div className="flex justify-between items-center">
                <h4>Delivery</h4> <p>-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
