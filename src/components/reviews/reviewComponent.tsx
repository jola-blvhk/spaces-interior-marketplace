import React from "react";
import { MdClose } from "react-icons/md";
import StarRating from "../StarRating";
import { CustomerReview } from "@/app/types/reviewTypes";
import Image from "next/image";
import EmptyReview from "/public/assets/random/empty-review.png";

interface ReviewComponentProps {
  modalClose: () => void;
  rating: number;
  numberofReviews: number;
  customerReviews: CustomerReview[];
  height: string; // Added height prop
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({
  modalClose,
  rating,
  numberofReviews,
  customerReviews,
  height, // Destructure height prop
}) => {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center pb-4 md:pb-5">
        <h2 className="text-secondary-green-100 text-lg md:text-xl font-medium">
          Reviews
        </h2>
        <MdClose
          className="text-primary-black-90 cursor-pointer text-2xl"
          onClick={modalClose}
        />
      </header>
      <div className="grid justify-center py-6 gap-y-3 border-y-[0.3px] border-y-secondary-green-100/50">
        <StarRating
          totalStars={5}
          rating={rating}
          sizeOfStars="text-2xl md:text-3xl gap-4"
        />
        <h3 className="text-center text-primary-black-90 font-semibold">
          {rating}{" "}
          <span className="font-normal">({numberofReviews} Reviews)</span>
        </h3>
      </div>

      {customerReviews?.length !== 0 ? (
        <div className="md:space-y-7 mt-12 space-y-3 md:mt-40">
          <Image
            src={EmptyReview}
            alt="empty review"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] m-auto"
          />
          <h3 className="text-center text-sm md:text-base">No reviews yet. Kindly drop one</h3>
        </div>
      ) : (
        <main
          className={`flex-1 ${height === "95%" ? "overflow-y-auto" : ""}`}
          style={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            WebkitTransform: "translate3d(0,0,0)",
          }}
        >
          {customerReviews?.map((review, index) => (
            <div
              key={index}
              className="border-b-[0.3px] border-secondary-green-100/50 grid gap-y-2 py-4"
            >
              <div className="flex items-center justify-between">
                <StarRating
                  totalStars={5}
                  rating={review.rating}
                  sizeOfStars="text-sm md:text-base gap-3 md:gap-4"
                />
                <p className="text-primary-black-90 text-[11px] md:text-xs">
                  {review.date}
                </p>
              </div>
              <h4 className="text-primary-black-90 font-semibold md:text-lg">
                {review.title}
              </h4>
              <p className="text-primary-black-90 text-xs md:text-sm">
                {review?.review}
              </p>
              {review.images.map(({ imageSrc, index }: any) => (
                <div
                  key={index}
                  className="relative bg-[#E3E3E3] w-full h-[200px] md:h-[300px] max-h-[300px] rounded-lg md:rounded-[15px]"
                >
                  <Image
                    src={imageSrc ? imageSrc : ""}
                    alt="review picture"
                    fill={true}
                    objectFit="contain"
                    className="rounded-lg md:rounded-[15px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </main>
      )}
    </div>
  );
};

export default ReviewComponent;
