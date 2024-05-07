import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const CategoriesPage = dynamic(() => import("@/components/categories-page"), {
  ssr: false,
});

const Categories = () => {
  return (
    <>
      <Head>
        <title>Categories | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <CategoriesPage />
        </div>
      </RootLayout>
    </>
  );
};

export default Categories;
