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

const similarProducts = [
  {
    id: 1,
    name: "Tobacco plant",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
];
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
          <ShopProductPage
            title={decodedName}
            originalPrice={645000}
            currentPrice={600000}
            similarProducts={similarProducts}
            rating={3}
            numberofReviews={20}
          />
        </div>
      </RootLayout>
    </>
  );
};

export default ShopProduct;
