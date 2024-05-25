"use client";

import { allProducts } from "@/app/utils/allProducts";
import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
const ShopProductPage = dynamic(
  () => import("@/components/products-components/shop-product"),
  {
    ssr: false,
  }
);

const similarProducts = [
  {
    id: 21,
    name: "Tobacco plant",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Product 2",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Product 3",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "Product 4",
    desc: "Lorem ipsum seus ipsummm",
    price: "6000",
    image: "https://via.placeholder.com/150",
  },
];

const customerReviews = [
  {
    title: "Love them",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 4,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: ["https://via.placeholder.com/150"],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    title: "Great product",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    rating: 5,
    date: "13 days ago",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
];
const ShopProduct = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {

  const product = allProducts.find((product) => product.id === params.id); // Find the product with the matching id



  return (
    <>
      <Head>
        <title>Shop Product | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          {product && (
            <ShopProductPage
              title={product?.name}
              originalPrice={645000}
              currentPrice={600000}
              similarProducts={similarProducts}
              rating={3}
              numberofReviews={20}
              customerReviews={customerReviews}
              id={params?.id}
            />
          )}
        </div>
      </RootLayout>
    </>
  );
};

export default ShopProduct;
