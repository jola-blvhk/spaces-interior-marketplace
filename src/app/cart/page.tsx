import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const CartPage = dynamic(() => import("@/components/cart-page"), {
  ssr: false,
});

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <CartPage />
        </div>
      </RootLayout>
    </>
  );
};

export default Cart;
