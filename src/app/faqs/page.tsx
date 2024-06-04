import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const FaqsPage = dynamic(() => import("@/components/faqs-page"), {
  ssr: false,
});

const Faqs = () => {
  return (
    <>
      <Head>
        <title>Faqs | Spaces</title>
      </Head>
      <RootLayout>
        <div className=" pt-20 md:pt-24 ">
          <FaqsPage />
        </div>
      </RootLayout>
    </>
  );
};

export default Faqs;
