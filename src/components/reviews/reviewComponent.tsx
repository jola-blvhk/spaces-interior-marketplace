import React from "react";
import { MdClose } from "react-icons/md";
import StarRating from "../StarRating";
import { CustomerReview } from "@/app/types/reviewTypes";
import Image from "next/image";

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
          className=" text-primary-black-90 cursor-pointer text-2xl"
          onClick={() => modalClose()}
        />
      </header>
      <div className="grid justify-center py-6 gap-y-3 border-y-[0.3px] border-y-secondary-green-100/50">
        <StarRating
          totalStars={5}
          rating={rating}
          sizeOfStars="text-2xl md:text-3xl gap-4 "
        />
        <h3 className="text-center text-primary-black-90 font-semibold">
          {rating}{" "}
          <span className="font-normal">({numberofReviews} Reviews)</span>
        </h3>
      </div>

      <main className="overflow-y-scroll relative">
        {customerReviews?.map((review, index) => (
          <div
            key={index}
            className="border-b-[0.3px] border-secondary-green-100/50 grid gap-y-2 py-4"
          >
            <div className="flex items-center justify-between  ">
              <StarRating
                totalStars={5}
                rating={review.rating}
                sizeOfStars="text-sm md:text-base gap-3 md:gap-4 "
              />
              <p className="text-primary-black-90 text-[11px] md:text-xs">
                {review.date}
              </p>
            </div>

            <h4 className="text-primary-black-90 font-semibold md:text-lg ">
              {review.title}
            </h4>
            <p className=" text-primary-black-90 text-xs md:text-sm">
              {review?.review}
            </p>

            {review.images.map(({ imageSrc, index }: any) => (
              <div
                key={index}
                className="relative bg-[#E3E3E3] w-full  h-[200px] md:h-[300px] max-h-[300px] rounded-lg md:rounded-[15px]"
              >
                <Image
                  src={imageSrc ? imageSrc : ""}
                  className=""
                  alt="review picture"
                  fill={true}
                  objectFit="contain rounded-lg md:rounded-[15px]"
                />
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

export default ReviewComponent;
