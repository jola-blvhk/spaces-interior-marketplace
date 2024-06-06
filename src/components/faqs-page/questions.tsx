"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export const faqItems = [
  {
    heading: "Can I work on a project I started before the hackathon?  ",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "What happens if I need help during the hackathon?",
    description:
      "Selled ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia.",
  },
  {
    heading: "What happens if I don't have an idea for a project?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "Can I join a team or do I have to come with one?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
  {
    heading: "What happens after the hackathon ends?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
  {
    heading: "Can I work on a project I started before the hackathon?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
];
export const Faq = () => {
  const [faqIndex, setFaqIndex] = useState(-1);
  const showResult = (index: number) => {
    setFaqIndex(index);
  };
  const hideResult = () => {
    setFaqIndex(-1);
  };
  return (
    <>
      <section className="text-center md:justify-center md:items-center ">
        <div className=" grid gap-y-4 md:gap-y-6 xl:gap-y-8  ">
          {faqItems.map((item, idx) => (
            <div key={idx} className="">
              <div className="flex gap-x-1 justify-between  h-fit pb-2  md:px-0 text-sm md:text-base lg:text-lg ">
                <h4 className=" text-left font-semibold  text-secondary-green-100">
                  {item.heading}
                </h4>
                <div className="text-center cursor-pointer h-fit items-end">
                  <IoIosAdd
                    className={
                      faqIndex === idx
                        ? "hidden"
                        : "block  text-secondary-green-100 text-xl md:text-2xl lg:text-3xl "
                    }
                    onClick={() => showResult(idx)}
                  />
                  <div
                    onClick={hideResult}
                    className={
                      faqIndex === idx
                        ? "text-primary-black-90 border  border-[#D9D9D9] px-1 py-0.5 md:px-3 md:py-2 rounded-[8.72px] text-base md:text-lg md:rounded-[15px]  "
                        : "hidden "
                    }
                  >
                    <FiMinus />
                  </div>
                </div>
              </div>
              <div
                className={
                  faqIndex === idx ? "text-left w-[85%]" : "hidden text-left "
                }
              >
                <p className="text-sm md:text-base lg:text-lg ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
