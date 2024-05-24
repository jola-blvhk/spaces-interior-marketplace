import { useAppDispatch } from "@/redux";
import { reviewsComponentActions } from "@/redux/reviews-slice";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "animate.css";
import "animate.css/animate.min.css";
import Draggable, {
  DraggableCore,
  DraggableEvent,
  DraggableData,
} from "react-draggable";
import ReviewComponent from "./reviewComponent";
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
  const [isDragging, setIsDragging] = useState(false);

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
    if (!isDragging) {
      setPosition({ x: data.x, y: data.y });
    }
  };

  // Function to handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Function to handle drag stop
  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    setIsDragging(false);
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
        className="fixed block top-0 bottom-0 left-0 right-0 z-[1000000] bg-primary-black-100/30"
        onClick={() => {
          dispatch(setReviewsComponentState(false));
        }}
      >
        <Draggable
          onDrag={handleDrag}
          onStart={handleDragStart}
          onStop={handleDragStop}
        >
          <div
            className="absolute z-[10000000000] block md:hidden bottom-0 w-screen px-6 py-8 animate__animated animate__slideInUp bg-primary-white-100 rounded-t-2xl transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
            style={{
              height,
              transform: `translate(${position.x}px, ${position.y}px)`,
              WebkitOverflowScrolling: "touch",
              WebkitTransform: "translate3d(0,0,0)",
              overflowY: height === "95%" ? "auto" : "hidden", // Enable scrolling when height is 95%
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
        </Draggable>
        <div
          className="hidden md:block absolute px-6 py-9 right-0 h-screen md:w-[50%] lg:w-[35%] xl:w-[30%] animate__animated animate__slideInRight bg-primary-white-100"
          onClick={(e) => e.stopPropagation()}
          style={{
            overflowY: "auto", // Enable scrolling for desktop view
          }}
        >
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
