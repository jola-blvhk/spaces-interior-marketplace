import React from "react";
import { MdClose } from "react-icons/md";
import StarRating from "../StarRating";
import { CustomerReview } from "@/app/types/reviewTypes";

interface ReviewComponentProps {
  modalClose: () => void;
  rating: number;
  numberofReviews: number;
  customerReviews: CustomerReview[];
}
const ReviewComponent: React.FC<ReviewComponentProps> = ({
  modalClose,
  rating,
  numberofReviews,
  customerReviews,
}) => {
  return (
    <div>
      <header className="flex justify-between items-center pb-4 md:pb-5 ">
        <h2 className="text-secondary-green-100 text-lg md:text-xl font-medium ">
          Reviews
        </h2>
        <MdClose
          className=" text-primary-black-90 cursor-pointer text-xl  md:text-2xl"
          onClick={() => modalClose()}
        />
      </header>
      <div className="grid justify-center py-6 gap-y-3 border-y-[0.46px] border-y-secondary-green-100/50">
        <StarRating totalStars={5} rating={rating} />
        <h3 className="text-center text-primary-black-90 font-semibold">
          {rating}{" "}
          <span className="font-normal">({numberofReviews} Reviews)</span>
        </h3>
      </div>

      <main className="overflow-y-scroll">
        {customerReviews?.map((review, index) => (
          <div key={index}>
            <div className="flex items-center justify-between border-b-[0.46px] border-b-secondary-green-100/50 py-4 "></div>
            <div>
              <h4 className="text-primary-black-90 font-semibold">
                {review.title}
              </h4>
              <p className="text-primary-black-70 text-sm">{review.date}</p>
            </div>
            <StarRating totalStars={5} rating={review.rating} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default ReviewComponent;
