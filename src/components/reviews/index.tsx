import { useAppDispatch } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import React, { useState, useEffect } from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { DraggableCore, DraggableEvent, DraggableData } from "react-draggable";
import ReviewComponent from "./ReviewComponent";
import { CustomerReview } from "@/app/types/reviewTypes";

interface ReviewContainerProps {
  rating: number;
  numberofReviews: number;
  customerReviews: CustomerReview[];
}

const ReviewContainer: React.FC<ReviewContainerProps> = ({
  rating,
  numberofReviews,
  customerReviews,
}) => {
  const dispatch = useAppDispatch();
  const setReviewsComponentState =
    reviewsComponentActions.setReviewsComponentState;

  // State to track the position and height of the draggable div
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [height, setHeight] = useState("45%");

  useEffect(() => {
    // Add non-scrollable class to body when component mounts
    document.body.style.overflow = "hidden";

    // Remove non-scrollable class from body when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
      setHeight("45%");
      setPosition({ x: 0, y: windowHeight * 0.5 }); // Snap to 50%
    }
  };

  return (
    <div className="relative">
      <div
        className="fixed block top-0 bottom-0 left-0 right-0 z-[10000000000] bg-primary-black-100/30"
        onClick={() => {
          dispatch(setReviewsComponentState(false));
        }}
      >
        <DraggableCore onDrag={handleDrag} onStop={handleDragStop}>
          <div
            className="absolute z-[100000000] block md:hidden bottom-0 w-screen px-6 py-8 animate__animated animate__slideInUp bg-primary-white-100 rounded-t-2xl transition-all duration-300 ease-in-out"
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
              rating={rating}
              numberofReviews={numberofReviews}
              customerReviews={customerReviews || []}
              height={height}
            />
          </div>
        </DraggableCore>
        <div className="hidden md:block absolute px-6 py-9 right-0 h-screen md:w-[50%] lg:w-[35%] xl:w-[25%] animate__animated animate__slideInRight bg-primary-white-100">
          <ReviewComponent
            modalClose={() => {
              dispatch(setReviewsComponentState(false));
            }}
            rating={rating}
            numberofReviews={numberofReviews}
            customerReviews={customerReviews || []}
            height="100%" // Always 100% for desktop view
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
