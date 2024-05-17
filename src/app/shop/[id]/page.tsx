"use client";

import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";

import React from "react";
const ShopProductPage = dynamic(
  () => import("@/components/products-components/shop-product"),
  {
    ssr: false,
  }
);

const ShopProduct = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  // Decode the product parameter
  const decodedName = params.id ? decodeURIComponent(params.id as string) : "";
  return (
    <>
      <Head>
        <title>Shop Product | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <ShopProductPage title={decodedName} />
        </div>
      </RootLayout>
    </>
  );
};

export default ShopProduct;
