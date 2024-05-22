import { useAppDispatch } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import React, { useState } from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { DraggableCore, DraggableEvent, DraggableData } from "react-draggable";
import ReviewComponent from "./reviewComponent";

const ReviewContainer = () => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;

  // State to track the position and height of the draggable div
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [height, setHeight] = useState("35%");

  // Function to handle drag
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  // Function to handle drag stop
  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    const windowHeight = window.innerHeight;

    if (data.y < windowHeight / 2) {
      setHeight("95%");
      setPosition({ x: 0, y: 0 }); // Snap to top
    } else {
      setHeight("35%");
      setPosition({ x: 0, y: windowHeight * 0.5 }); // Snap to 50%
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
        <DraggableCore onDrag={handleDrag} onStop={handleDragStop}>
          <div
            className="absolute block md:hidden bottom-0 w-screen px-6 py-8 animate__animated animate__slideInUp bg-primary-white-100 rounded-t-2xl transition-all duration-300 ease-in-out"
            style={{
              height,
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <div className="fixed inset-x-0 top-1.5 m-auto bg-secondary-green-100/50 rounded-3xl w-[10%] h-1.5"></div>
            <ReviewComponent
              modalClose={() => {
                dispatch(setReviewsComponentState(false));
              }}
            />
          </div>
        </DraggableCore>
        <div className="hidden md:block absolute px-6 py-9 right-0 h-screen  md:w-[50%] lg:w-[35%] xl:w-[25%] animate__animated animate__slideInRight bg-primary-white-100">
          <ReviewComponent
            modalClose={() => {
              dispatch(setReviewsComponentState(false));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
