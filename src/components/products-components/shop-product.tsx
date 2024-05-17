import React from "react";
import TitleHeading from "./title-heading";

interface ShopProductProps {
  title: string | String;
  description?: string;
}
const ShopProduct: React.FC<ShopProductProps> = ({ title }) => {
  return (
    <div className="padding-section">
      <div className="max-width-section">
        <TitleHeading
          title={title}
          description="Your one stop market place for all things furniture, accessories and more"
          showBackButton
        />
      </div>
    </div>
  );
};

export default ShopProduct;
