import { useAppDispatch, useAppSelector } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import React, { useState } from "react";
import "animate.css";
import "animate.css/animate.min.css";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

const Reviews = () => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;

  // State to track the height of the draggable div
  const [height, setHeight] = useState<string>("35%");
  const [yPosition, setYPosition] = useState<number>(0);

  // Function to handle drag stop
  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    const windowHeight = window.innerHeight;
    const dragY = data.y + yPosition;

    if (dragY < -windowHeight / 2) {
      setHeight("100%");
      setYPosition(-windowHeight); // Set the y position to the top of the screen
    } else {
      setHeight("35%");
      setYPosition(0); // Reset the y position to the original
    }
  };

  // Function to handle drag
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setYPosition(data.y);
  };
  return (
    <div className="relative">
      <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000000000000] block md:flex ">
        <div
          className="  w-screen h-screen  cursor-pointer bg-primary-black-100 opacity-30"
          onClick={() => {
            dispatch(setReviewsComponentState(false));
          }}
        ></div>
        <Draggable
          axis="y"
          bounds="parent"
          onDrag={handleDrag}
          onStop={handleDragStop}
        >
          <div
            className="absolute block md:hidden bottom-0 w-screen animate__animated animate__slideInUp bg-primary-white-100 transition-all duration-300 ease-in-out"
            style={{ height }}
          >
            <h1>ReviewsPage</h1>
          </div>
        </Draggable>
        <div className=" hidden md:block absolute right-0 h-screen md:w-[50%] lg:w-[35%] xl:w-[25%] animate__animated animate__slideInRight  bg-primary-white-100">
          <h1>ReviewsPage</h1>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
