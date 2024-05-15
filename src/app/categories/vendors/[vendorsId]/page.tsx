import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import VendorsCategoriesPagee from "@/components/categories-page/vendor-categories-page";
import React from "react";
const VendorsCategoriesPage = dynamic(
  () => import("@/components/categories-page/products-categories-page"),
  {
    ssr: false,
  }
);

const VendorsCategories = ({
  params,
}: {
  params: {
    vendorsId: string;
  };
}) => {
  return (
    <>
      <Head>
        <title>Vendors Categories | Spaces</title>
      </Head>
      <RootLayout>
        <div className="  pt-24 md:pt-32">
          <VendorsCategoriesPagee title={params.vendorsId} />
        </div>
      </RootLayout>
    </>
  );
};

export default VendorsCategories;
