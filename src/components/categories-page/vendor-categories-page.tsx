import React from "react";
import HeaderProduct from "../products-components/header-product";
import ProductBox from "../products-components/product-box";

const vendorCategories = [
  {
    id: 11,
    name: "Tobacco plant with red flowers",
    desc: "Lorem ipsum seus ipsummm",
    price: 6000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Product 2",
    desc: "Lorem ipsum seus ipsummm",
    price: 3000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Product 3",
    desc: "Lorem ipsum seus ipsummm",
    price: 4500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Product 4",
    desc: "Lorem ipsum seus ipsummm",
    price: 5900,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Product 5",
    desc: "Lorem ipsum seus ipsummm",
    price: 8000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Product 6",
    desc: "Lorem ipsum seus ipsummm",
    price: 3400,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Product 7",
    desc: "Lorem ipsum seus ipsummm",
    price: 3200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Product 8",
    desc: "Lorem ipsum seus ipsummm",
    price: 7000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Product 9",
    desc: "Lorem ipssum seus ipsummm",
    price: 5600,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Product 10",
    desc: "Lorem ipsum seus ipsummm",
    price: 4000,
    image: "https://via.placeholder.com/150",
  },
];

interface ProductsCategoriesPageProps {
  title: String;
  vendorSrcLogo: any;
}
const VendorsCategoriesPage = ({
  title,
  vendorSrcLogo,
}: ProductsCategoriesPageProps) => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <HeaderProduct
          title={title}
          description="Your one stop market place for all things furniture, accessories and more"
          placeholder="Search Product"
          vendorLogoSrc={vendorSrcLogo}
          vendor
        />
        <main className=" grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-1.5 md:gap-x-7 lg:gap-x-10 gap-y-6 md:gap-y-12 lg:gap-y-14 mt-4 md:mt-10 ">
          {vendorCategories?.map((product) => (
            <ProductBox
              key={product.id}
              id={product.id}
              price={product?.price}
              name={product?.name}
              desc={product?.desc}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default VendorsCategoriesPage;
