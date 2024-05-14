"use client";

import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";

import React from "react";
const ProductsCategoriesPage = dynamic(
  () => import("@/components/categories-page/products-categories-page"),
  {
    ssr: false,
  }
);

const ProductsCategories = ({
  params,
}: {
  params: {
    productsId: string;
  };
}) => {
  return (
    <>
      <Head>
        <title>Products Categories | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <ProductsCategoriesPage title={params.productsId} />
        </div>
      </RootLayout>
    </>
  );
};

export default ProductsCategories;
