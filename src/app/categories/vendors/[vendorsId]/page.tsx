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

const VendorLogos = [
  {
    name: "Yellowcraft",
    image: "/public/assets/vendors-categories/yellowcraft.svg",
  },
  {
    name: "Beveledge",
    image: "/public/assets/vendors-categories/beveledge.svg",
  },
  {
    name: "WoodTerritory",
    image: "/public/assets/vendors-categories/wood.svg",
  },
  {
    name: "FurnitureSquare",
    image: "/public/assets/vendors-categories/furnituresquare.svg",
  },
  { name: "Candl", image: "/public/assets/vendors-categories/candl.svg" },
  { name: "Empreyer", image: "/public/assets/vendors-categories/emperyer.svg" },
];

const VendorsCategories = ({
  params,
}: {
  params: {
    vendorsId: string;
  };
}) => {
  const logo = VendorLogos.find((vendor) => vendor.name === params.vendorsId);
  console.log(logo)
  return (
    <>
      <Head>
        <title>Vendors Categories | Spaces</title>
      </Head>
      <RootLayout>
        <div className="pt-24 md:pt-32">
          <VendorsCategoriesPagee
            title={params.vendorsId}
            vendorSrcLogo={logo}
          />
        </div>
      </RootLayout>
    </>
  );
};

export default VendorsCategories;
