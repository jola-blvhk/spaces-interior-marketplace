import RootLayout from "../../components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const TopProductsPage = dynamic(() => import("../../components/top-products-page/"), {
  ssr: false,
});

const TopProducts = () => {
  return (
    <>
      <Head>
        <title>Top Products | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <TopProductsPage />
        </div>
      </RootLayout>
    </>
  );
};

export default TopProducts;
