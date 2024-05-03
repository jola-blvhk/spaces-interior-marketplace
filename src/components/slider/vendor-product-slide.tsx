"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore from "swiper";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import Image from "next/image";
import vendor1 from "/public/assets/vendors/vendor1.svg";
import vendor2 from "/public/assets/vendors/vendor2.svg";
import vendor3 from "/public/assets/vendors/vendor3.svg";
import vendor4 from "/public/assets/vendors/vendor4.svg";
import vendor5 from "/public/assets/vendors/vendor5.svg";

export const VendorProductSlide = () => {
  const [imagesPerPage, setImagesPerPage] = useState(3);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 450) {
      setImagesPerPage(2);
    } else if (windowWidth < 600) {
      setImagesPerPage(3);
    } else if (windowWidth < 768) {
      setImagesPerPage(4);
    } else {
      setImagesPerPage(5);
    }
  }, [windowWidth]);

  const widthForImages = (windowWidth / imagesPerPage) - 10;

  console.log("widthForImages", widthForImages);
  SwiperCore.use([Autoplay]);

  return (
    <div
      className={` w-fit m-auto  max-w-full  py-2 md:py-5 text-primary-black-100 `}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={imagesPerPage}
        speed={500}
        // loop={true}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
        }}
        style={{ maxWidth: windowWidth - 40 }} // Set max-width dynamically
        className="my-auto h-fit "
      >
        <SwiperSlide className="my-auto   max-w-fit ">
          <div className=" w-fit">
            <Image
              src={vendor1}
              width={widthForImages}
              height={widthForImages}
              alt="vendor 1"
              className=" h-full  object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className="  ">
            <Image
              src={vendor2}
              width={widthForImages}
              height={widthForImages}
              alt="vendor 2"
              className=" h-full object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className=" ">
            <Image
              src={vendor3}
              width={widthForImages}
              height={widthForImages}
              alt="vendor 3"
              className="h-full   object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className=" ">
            <Image
              src={vendor4}
              width={widthForImages}
              height={widthForImages}
              alt="vendor 4"
              className=" h-full    object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className="">
            <Image
              src={vendor5}
              width={widthForImages}
              height={widthForImages}
              alt="vendor 5"
              className=" h-full  object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
