import React from "react";
import { IoStar } from "react-icons/io5";

interface StarProps {
  filled: boolean;

}

const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <IoStar color={filled ? "#FBBC04" : "#A7A4A4"} />
    </div>
  );
};

interface StarRatingProps {
  totalStars: number;
  rating: number;
  onRatingChange?: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars,
  rating,
  onRatingChange,
}) => {
  const handleRatingChange = (index: number) => {
    if (onRatingChange) {
      onRatingChange(index + 1); // Adjust index to start from 1
    }
  };

  return (
    <div className="flex items-center gap-4  text-xl  md:text-2xl lg:text-3xl">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default StarRating;
