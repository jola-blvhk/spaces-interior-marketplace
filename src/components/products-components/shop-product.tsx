import React, { useEffect, useState } from "react";
import TitleHeading from "./title-heading";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Image from "next/image";
import ExampleProduct from "/public/assets/products/example-product.png";
import { GoHeartFill } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./styles.css";
import StarRating from "../StarRating";
import Button from "../button";
import SimilarProducts from "./similar-products";
import { useAppDispatch, useAppSelector } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import ReviewContainer from "../reviews";
import { CustomerReview } from "@/app/types/reviewTypes";
import { Counter } from "../counter";
import { cartActions } from "@/redux/cart-slice";

interface ShopProductProps {
  id: string;
  title: string | String;
  description?: string;
  currentPrice: number;
  originalPrice?: number;
  similarProducts?: any;
  rating: number;
  numberofReviews: number;
  customerReviews: CustomerReview[];
}
const ShopProduct: React.FC<ShopProductProps> = ({
  id,
  title,
  currentPrice,
  originalPrice,
  similarProducts,
  rating,
  numberofReviews,
  customerReviews,
}) => {
  const variations = [1, 2, 3];
  const colors = [
    {
      name: "blue",
      color: "#0A66C2",
    },
    {
      name: "pink",
      color: "#C837AB",
    },
    {
      name: "red",
      color: "#C5221F",
    },
    {
      name: "green",
      color: "#00FF00",
    },
  ];
  const options = ["small", "medium", "large"];
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [clickedColor, setClickedColor] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const dispatch = useAppDispatch();
  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 640); // Adjust the width value as needed
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleColorClick = (index: number) => {
    setClickedColor(index === clickedColor ? 0 : index);
  };

  const reviewsComponentState = useAppSelector(
    (state) => state.reviewsComponent.reviewsComponentState
  );

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name: title,
        id: id,
        price: currentPrice,
        quantity: 1,
        image: ExampleProduct,
        totalPrice: 0,
        size: selectedOption || "",
        color: colors[clickedColor]?.name || colors[0]?.name,
      })
    );
  };
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;

  return (
    <div className="relative">
      <div className="w-full bg-white">
        <div className="padding-section">
          <div className="max-width-section ">
            <TitleHeading
              title={title}
              description="Your one stop market place for all things furniture, accessories and more"
              showBackButton={true}
            />

            <div className="grid lg:grid-cols-2 gap-10 py-7 md:py-16 lg:py-24 border-b border-secondary-green-100/50 text-primary-black-90">
              <div className="flex gap-[2%]">
                <div className="w-[23%] grid grid-rows-3  gap-y-3">
                  {variations?.map((variation, index) => (
                    <div
                      key={index}
                      className="relative w-full h-auto rounded-[8.18px] md:rounded-[15px]"
                    >
                      <Image
                        src={ExampleProduct}
                        className=""
                        alt="name"
                        fill={true}
                        objectFit="contain rounded-lg md:rounded-[15px]"
                      />
                    </div>
                  ))}
                </div>
                <div className="relative bg-[#E3E3E3] w-[75%]  h-[300px] md:h-[500px] rounded-[8.18px] md:rounded-[15px]">
                  <Image
                    src={ExampleProduct}
                    className=""
                    alt="name"
                    fill={true}
                    objectFit="contain rounded-lg md:rounded-[15px]"
                  />

                  <div className="absolute py-1 md:py-2  px-4 md:px-8 bg-[#D9D9D9] bottom-8 rounded-r-[5px] text-sm   md:text-base lg:text-lg  font-medium">
                    Selling fast
                  </div>
                  <GoHeartFill
                    className={` absolute block xl:hidden text-lg md:text-xl right-4 top-4 cursor-pointer ${
                      isHeartClicked
                        ? " text-primary-black-100"
                        : " text-[#C6C6C6]"
                    }`}
                    onClick={handleHeartClick}
                  />
                </div>
              </div>

              <div className="grid gap-y-3 justify-between">
                <div className="flex justify-between items-center">
                  <h1 className="text-primary-black-90  font-semibold text-xl mb-1 max-w-[50%] lg:text-3xl tracking-wide">
                    {title}
                  </h1>
                  <div className="flex xl:hidden gap-x-2 md:gap-x-5 text-lg  xl:text-3xl items-center">
                    <h2 className="font-semibold ">
                      ₦ {currentPrice.toLocaleString()}
                    </h2>
                    {originalPrice && (
                      <h2 className="text-[#FF543E] line-through">
                        ₦ {originalPrice.toLocaleString()}
                      </h2>
                    )}
                  </div>
                  <GoHeartFill
                    className={` hidden xl:block text-3xl cursor-pointer ${
                      isHeartClicked
                        ? " text-primary-black-100"
                        : " text-[#C6C6C6]"
                    }`}
                    onClick={handleHeartClick}
                  />
                </div>
                <p className="text-primary-black-90 text-sm leading-6 lg:text-base mr-6 md:mr-0">
                  Your one stop market place for all things furniture,
                  accessories and more. Your one stop market place for all
                  things furniture.
                </p>
                <h2 className="font-semibold text-[13px]  md:text-sm leading-6 lg:text-base">
                  Delivery duration :{" "}
                  <span className="font-normal">2 weeks</span>
                </h2>
                <div className="grid xl:flex justify-between gap-y-5 xl:gap-y-0 ">
                  <div>
                    <h2 className="font-semibold text-[13px] md:text-sm  mb-3 md:mb-4 leading-6 lg:text-base">
                      Variation
                    </h2>
                    <div className="flex gap-2 md:gap-4">
                      {colors?.map((color, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            handleColorClick(index);
                          }}
                          className={`rounded-full  w-7 h-7 md:w-10 md:h-10 bg-white  p-[2px] md:p-[3px]   z-0`}
                          style={{
                            border: ` 3px solid ${
                              clickedColor === index ? color.color : "white"
                            }`,
                            ...(isSmallScreen && {
                              // Add your small screen styles here
                              border: `2px solid ${
                                clickedColor === index ? color.color : "white"
                              }`,
                            }),
                          }}
                        >
                          <div
                            className="w-full h-full  m-auto border-3 border-white rounded-full cursor-pointer "
                            style={{
                              backgroundColor: color.color,
                              border: clickedColor === index ? "white" : "none",
                            }}
                          >
                            {" "}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-semibold  mb-1 md:mb-3  text-[13px] md:text-sm  leading-6 lg:text-base">
                      Size
                    </h2>
                    <div>
                      <Dropdown
                        options={options}
                        value={selectedOption}
                        onChange={handleSelect}
                        placeholder="size"
                        controlClassName="custom-control"
                        placeholderClassName="custom-placeholder"
                        menuClassName="custom-menu"
                        arrowClosed={
                          <IoIosArrowDown className="custom-arrow" />
                        }
                        arrowOpen={<IoIosArrowUp className="custom-arrow" />}
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex gap-x-3 md:gap-x-5 text-lg md:text-3xl items-center">
                  <h2 className="font-semibold ">
                    ₦ {currentPrice.toLocaleString()}
                  </h2>
                  {originalPrice && (
                    <h2 className="text-[#FF543E] line-through">
                      ₦ {originalPrice.toLocaleString()}
                    </h2>
                  )}
                </div>

                <div className="flex gap-4 md:gap-6 items-center pt-3 lg:pt-0">
                  <StarRating totalStars={5} rating={rating} />
                  <h2
                    onClick={() => {
                      dispatch(setReviewsComponentState(true));
                    }}
                    className="underline text-sm md:text-base text-primary-black-90 cursor-pointer"
                  >
                    Reviews
                  </h2>
                </div>

                <div className="grid grid-cols-2 w-[300px] md:w-[370px] md:max-w-[400px] items-center gap-2  md:gap-5   pt-3 lg:pt-0">
                  <Button
                    title="Add to cart"
                    backgroundImage
                    onclick={() => {
                      addToCart();
                    }}
                  />

                  <Counter
                    onAdd={() => {}}
                    onSubtract={() => {}}
                    name={title}
                    price={currentPrice}
                    id={id}
                    largeCounter={true}
                  />
                </div>
              </div>
            </div>
            <div className="pt-8 md:pt-10">
              <SimilarProducts similarProducts={similarProducts} />
            </div>
          </div>
        </div>
        {reviewsComponentState ? (
          <ReviewContainer
            rating={rating}
            numberofReviews={numberofReviews}
            customerReviews={customerReviews}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ShopProduct;
