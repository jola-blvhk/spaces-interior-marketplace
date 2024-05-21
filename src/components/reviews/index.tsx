import { useAppDispatch, useAppSelector } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import React from "react";
import "animate.css";
import "animate.css/animate.min.css";

const Reviews = () => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;
  return (
    <div className="relative">
      <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000000000000] block md:flex ">
        <div
          className="  w-screen h-screen order-last md:order-first cursor-pointer bg-primary-black-100 opacity-30"
          onClick={() => {
            dispatch(setReviewsComponentState(false));
          }}
        ></div>
        <div className="absolute block md:hidden bottom-0 h-[25%]  w-screen animate__animated animate__slideInUp   bg-primary-white-100">
          <h1>ReviewsPage</h1>
        </div>
        <div className=" hidden md:block absolute right-0 h-screen md:w-[50%] lg:w-[35%] xl:w-[25%] animate__animated animate__slideInRight  bg-primary-white-100">
          <h1>ReviewsPage</h1>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
