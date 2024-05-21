import { useAppDispatch } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import React, { useState } from "react";
import "animate.css";
import "animate.css/animate.min.css";
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableCore,
} from "react-draggable";

const Reviews = () => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;

  // State to track the height of the draggable div
  const [height, setHeight] = useState<string>("35%");

  // Function to handle drag stop
  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    const windowHeight = window.innerHeight;
    const finalYPosition = data.y + data.node.offsetHeight; // Calculate the final Y position

    if (finalYPosition < windowHeight / 2) {
      setHeight("100%");
    } else {
      setHeight("35%");
    }
  };

  return (
    <div className="relative">
      <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000000000000] block md:flex">
        <div
          className="w-screen h-screen cursor-pointer bg-primary-black-100 opacity-30"
          onClick={() => {
            dispatch(setReviewsComponentState(false));
          }}
        ></div>
        <DraggableCore>
          <Draggable axis="y" bounds="parent" onStop={handleDragStop}>
            <div
              className="absolute block md:hidden bottom-0 w-screen animate__animated animate__slideInUp bg-primary-white-100 transition-all duration-300 ease-in-out"
              style={{ height }}
            >
              <h1>ReviewsPage</h1>
            </div>
          </Draggable>
        </DraggableCore>
        <div className="hidden md:block absolute right-0 h-screen md:w-[50%] lg:w-[35%] xl:w-[25%] animate__animated animate__slideInRight bg-primary-white-100">
          <h1>ReviewsPage</h1>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
