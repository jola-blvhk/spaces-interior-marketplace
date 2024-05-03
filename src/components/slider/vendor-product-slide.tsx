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
import vendor1 from "/public/assets/vendors/vendor1.jpg";
import vendor2 from "/public/assets/vendors/vendor2.jpg";
import vendor3 from "/public/assets/vendors/vendor3.jpg";
import vendor4 from "/public/assets/vendors/vendor4.jpg";
import vendor5 from "/public/assets/vendors/vendor5.jpg";

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
    if (windowWidth < 768) {
      setImagesPerPage(2);
    } else if (windowWidth < 1024) {
      setImagesPerPage(4);
    } else {
      setImagesPerPage(5);
    }
  }, [windowWidth]);

  SwiperCore.use([Autoplay]);

  return (
    <div
      className={` max-w-full border border-red-500 gap-8 py-2 md:py-5 text-primary-black-100`}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={imagesPerPage}
        loop={true}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
        }}
        style={{ maxWidth: windowWidth }} // Set max-width dynamically
        className="my-auto h-fit"
      >
        <SwiperSlide className="my-auto   max-w-fit ">
          <div className=" w-fit">
            <Image
              src={vendor1}
              width={150}
              height={150}
              alt="vendor 1"
              className=" h-full  object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className="  ">
            <Image
              src={vendor2}
              width={150}
              height={150}
              alt="vendor 2"
              className=" h-full object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className=" ">
            <Image
              src={vendor3}
              width={150}
              height={150}
              alt="vendor 3"
              className="h-full   object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className=" ">
            <Image
              src={vendor4}
              width={150}
              height={150}
              alt="vendor 4"
              className=" h-full    object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto max-w-fit">
          <div className="">
            <Image
              src={vendor5}
              width={150}
              height={150}
              alt="vendor 5"
              className=" h-full  object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
