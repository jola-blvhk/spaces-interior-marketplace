"use client";

import React, { useEffect, useState } from "react";
import BackButton from "../back-button";
import VendorProductFilter from "../filter/vendor-product";
import { SlideType } from "../slider/vendor-product-slide";
import { IoSearch } from "react-icons/io5";
import Accessories from "/public/assets/products-categories/accessories.svg";
import Office from "/public/assets/products-categories/office.svg";
import Sofas from "/public/assets/products-categories/sofas.svg";
import Kitchen from "/public/assets/products-categories/kitchen.svg";
import Bathroom from "/public/assets/products-categories/bathroom.svg";
import Beddings from "/public/assets/products-categories/beddings.svg";
import Yellowcraft from "/public/assets/vendors-categories/yellowcraft.svg";
import Beveledge from "/public/assets/vendors-categories/beveledge.svg";
import WoodTerritory from "/public/assets/vendors-categories/wood.svg";
import FurnitureSquare from "/public/assets/vendors-categories/furnituresquare.svg";
import Candl from "/public/assets/vendors-categories/candl.svg";
import Empreyer from "/public/assets/vendors-categories/emperyer.svg";
import CategoryBox from "./category-box";

type ProductImages =
  | typeof Accessories
  | typeof Office
  | typeof Sofas
  | typeof Kitchen
  | typeof Bathroom
  | typeof Beddings;
type VendorImages =
  | typeof Yellowcraft
  | typeof Beveledge
  | typeof WoodTerritory
  | typeof FurnitureSquare
  | typeof Candl
  | typeof Empreyer;

type CategoryImage = ProductImages | VendorImages;
export enum CategoryType {
  Product = "products",
  Vendor = "vendors",
}
export interface CategoryImagesProps {
  type: CategoryType;
}
const CategoriesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSection, setSelectedSection] = useState<CategoryType>(
    CategoryType.Product
  );
  const [categories, setCategories] = useState<CategoryImage[]>([]);

  useEffect(() => {
    if (selectedSection === "products") {
      setCategories([
        {
          id: 1,
          title: "Accessories",
          image: Accessories,
        },
        {
          id: 2,
          title: "Office",
          image: Office,
        },
        {
          id: 3,
          title: "Sofas",
          image: Sofas,
        },
        {
          id: 4,
          title: "Kitchen",
          image: Kitchen,
        },
        {
          id: 5,
          title: "Bathroom",
          image: Bathroom,
        },
        {
          id: 6,
          title: "Beddings",
          image: Beddings,
        },
      ]);
    } else if (selectedSection === "vendors") {
      setCategories([
        {
          id: 1,
          title: "Yellowcraft",
          image: Yellowcraft,
        },
        {
          id: 2,
          title: "Beveledge",
          image: Beveledge,
        },
        {
          id: 3,
          title: "Wood Territory",
          image: WoodTerritory,
        },
        {
          id: 4,
          title: "Furniture",
          image: FurnitureSquare,
        },
        {
          id: 5,
          title: "Candl",
          image: Candl,
        },
        {
          id: 6,
          title: "Empreyer",
          image: Empreyer,
        },
      ]);
    }
  }, [selectedSection]);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };

  const sections = [
    { value: CategoryType.Product, label: "Product" },
    { value: CategoryType.Vendor, label: "Vendor" },
  ];

  const handleSectionClick = (section: CategoryType) => {
    setSelectedSection(section);
  };

  // Determine the appropriate placeholder text based on the selected filter
  const getPlaceholderText = () => {
    if (selectedSection === CategoryType.Product) {
      return "Search Product";
    } else {
      return "Search Vendor";
    }
  };

  return (
    <div>
      <div className="padding-section">
        <div className=" gap-4 space-y-5 md:space-y-0 md:flex lg:grid grid-cols-3 md:justify-between max-width-section items-center">
          <div className="h-fit my-auto flex gap-3 items-center">
            <BackButton />
            <div className="flex md:hidden rounded-[10px]  w-full  items-center gap-4 py-3 px-4    md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] h-fit md:my-auto  box-border rotate-[0.02deg]">
              <IoSearch className="text-[#737373B2] text-2xl" />
              <input
                placeholder={getPlaceholderText()}
                defaultValue={searchValue}
                className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-sm placeholder:md:text-sm  text-sm tracking-wider"
                // onClick={handleSearchClicked}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full md:w-full lg:w-[90%] md:m-auto order-3 md:order-none">
            <VendorProductFilter
              selectedSection={selectedSection}
              onSectionClick={handleSectionClick}
              sections={sections}
            />
          </div>

          <div className=" hidden rounded-[10px] md:rounded-[15px] w-full md:flex md:ml-auto items-center gap-2 py-3 px-4 md:px-6   md:w-fit cursor-pointer bg-primary-white-100 border border-solid border-[##D9D9D9] md:h-fit md:my-auto  box-border rotate-[0.02deg]">
            <IoSearch className="text-[#737373B2] text-3xl" />
            <input
              placeholder={getPlaceholderText()}
              defaultValue={searchValue}
              className="focus:outline-none w-full text-primary-black-90 placeholder:text-[#726D6DB2] placeholder:text-xs placeholder:md:text-sm  text-sm tracking-wider"
              // onClick={handleSearchClicked}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {categories?.map((category, index) => (
          <CategoryBox
            key={index}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
