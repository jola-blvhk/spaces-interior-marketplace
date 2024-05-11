import React from "react";
import HeaderProduct from "../products-components/header-product";

const TopProductsPage = () => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <HeaderProduct
          title="Top Products"
          description="Your one stop market place for all things furniture, accessories and more"
          placeholder="Search Product"
        />
      </div>
    </div>
  );
};

export default TopProductsPage;
