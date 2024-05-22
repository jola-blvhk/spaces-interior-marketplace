import React from "react";
import { MdClose } from "react-icons/md";
import StarRating from "../StarRating";

interface ReviewComponentProps {
  modalClose: () => void;
  rating: number;
  numberofReviews: number;
}
const ReviewComponent: React.FC<ReviewComponentProps> = ({
  modalClose,
  rating,
  numberofReviews,
}) => {
  return (
    <div>
      <header className="flex justify-between items-center pb-4 md:pb-5 ">
        <h2 className="text-secondary-green-100 text-lg md:text-xl font-medium ">
          Reviews
        </h2>
        <MdClose
          className=" text-primary-black-90 text-xl  md:text-2xl"
          onClick={modalClose}
        />
      </header>
      <div className="grid justify-center py-6 gap-y-3 border-y-[0.46px] border-y-secondary-green-100/50">
        <StarRating totalStars={5} rating={rating} />
        <h3 className="text-center text-primary-black-90 font-semibold">
          {rating}{" "}
          <span className="font-normal">({numberofReviews} Reviews)</span>
        </h3>
      </div>
    </div>
  );
};

export default ReviewComponent;
