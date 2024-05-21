import { useAppDispatch, useAppSelector } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import Link from "next/link";
import React from "react";
import 'animate.css';
import 'animate.css/animate.min.css';

const Reviews = () => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000000000000] block md:flex ">
      <div
        className=" h-[80%] md:h-full md:w-[75%] order-last md:order-first cursor-pointer bg-primary-black-100 opacity-30"
        onClick={() => {
          dispatch(setReviewsComponentState(false));
        }}
      ></div>
      <div className=" h-[20%] md:h-full md:w-[25%] animate__animated md:animate__slideInRight bg-primary-white-100">
        <h1>ReviewsPage</h1>
      </div>
    </div>
  );
};

export default Reviews;
