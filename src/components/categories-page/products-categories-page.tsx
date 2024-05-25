import React from "react";
import HeaderProduct from "../products-components/header-product";
import ProductBox from "../products-components/product-box";

const productCategories = [
  {
    id: 1,
    name: "Tobacco plant with red flowers",
    desc: "Lorem ipsum seus ipsummm",
    price: 5000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "Lorem ipsum seus ipsummm",
    price: 4000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "Lorem ipsum seus ipsummm",
    price: "7000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "Lorem ipsum seus ipsummm",
    price: 3400,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    desc: "Lorem ipsum seus ipsummm",
    price: 3500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    desc: "Lorem ipsum seus ipsummm",
    price: 5500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Product 7",
    desc: "Lorem ipsum seus ipsummm",
    price: 2700,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Product 8",
    desc: "Lorem ipsum seus ipsummm",
    price: 3400,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Product 9",
    desc: "Lorem ipsum seus ipsummm",
    price: 5000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Product 10",
    desc: "Lorem ipsum seus ipsummm",
    price: 7000,
    image: "https://via.placeholder.com/150",
  },
];

interface ProductsCategoriesPageProps {
  title: String;
}
const ProductsCategoriesPage = ({ title }: ProductsCategoriesPageProps) => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <HeaderProduct
          title={title}
          description="Your one stop market place for all things furniture, accessories and more"
          placeholder="Search Product"
          product
        />

        <main className=" grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-1.5 md:gap-x-7 lg:gap-x-10 gap-y-6 md:gap-y-12 lg:gap-y-14 mt-4 md:mt-10 ">
          {productCategories?.map((product) => (
            <ProductBox
              key={product?.id}
              id={product?.id}
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

export default ProductsCategoriesPage;
