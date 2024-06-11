import RootLayout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const TrackOrderPage = dynamic(() => import("@/components/track-order-page"), {
  ssr: false,
});

const TrackOrder = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <>
      <Head>
        <title>Track Order | Spaces</title>
      </Head>
      <RootLayout>
        <div className=" pt-20 md:pt-24 ">
          <TrackOrderPage trackingNumber={params.id} />
        </div>
      </RootLayout>
    </>
  );
};

export default TrackOrder;
