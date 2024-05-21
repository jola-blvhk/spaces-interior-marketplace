import { useAppDispatch, useAppSelector } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import Link from "next/link";
import React from "react";

const Reviews = () => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-[1000000000] cursor-pointer bg-primary-black-100 opacity-30"
      onClick={() => {
        dispatch(setReviewsComponentState(false));
      }}
    ></div>
  );
};

export default Reviews;
