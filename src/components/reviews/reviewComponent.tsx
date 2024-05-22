import React from "react";
import { MdClose } from "react-icons/md";

const ReviewComponent = () => {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h2 className="text-secondary-green-100 font-medium ">Reviews</h2>
        <MdClose
          className=" text-primary-black-90 text-2xl"
          onClick={() => {}}
        />
      </header>
    </div>
  );
};

export default ReviewComponent;
