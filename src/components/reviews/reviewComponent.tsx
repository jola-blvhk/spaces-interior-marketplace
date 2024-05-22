import React from "react";
import { MdClose } from "react-icons/md";

interface ReviewComponentProps {
  modalClose: () => void;
}
const ReviewComponent: React.FC<ReviewComponentProps> = ({ modalClose }) => {
  return (
    <div>
      <header className="flex justify-between items-center pb-4 md:pb-5 border-b-[0.46px] border-b-secondary-green-100/50">
        <h2 className="text-secondary-green-100 text-lg md:text-xl font-medium ">
          Reviews
        </h2>
        <MdClose
          className=" text-primary-black-90 text-2xl"
          onClick={modalClose}
        />
      </header>
    </div>
  );
};

export default ReviewComponent;
