import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import SwiperCore from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import vendor1Svg from "/public/assets/vendors/vendor1.svg";
import vendor2Svg from "/public/assets/vendors/vendor2.svg";
import vendor3Svg from "/public/assets/vendors/vendor3.svg";
import vendor4Svg from "/public/assets/vendors/vendor4.svg";
import vendor5Svg from "/public/assets/vendors/vendor5.svg";
import product1Svg from "/public/assets/products/product1.svg";
import product2Svg from "/public/assets/products/product2.svg";
import product3Svg from "/public/assets/products/product3.svg";
import product4Svg from "/public/assets/products/product4.svg";
import product5Svg from "/public/assets/products/product5.svg";

type VendorImage =
  | typeof vendor1Svg
  | typeof vendor2Svg
  | typeof vendor3Svg
  | typeof vendor4Svg
  | typeof vendor5Svg;
type ProductImage =
  | typeof product1Svg
  | typeof product2Svg
  | typeof product3Svg
  | typeof product4Svg
  | typeof product5Svg;

type SlideImage = VendorImage | ProductImage;
export enum SlideType {
  Product = "product",
  Vendor = "vendor",
}

export interface VendorProductSlideProps {
  type: SlideType;
}
export const VendorProductSlide: React.FC<VendorProductSlideProps> = ({
  type,
}) => {
  const [images, setImages] = useState<SlideImage[]>([]);

  useEffect(() => {
    if (type === "vendor") {
      setImages([vendor1Svg, vendor2Svg, vendor3Svg, vendor4Svg, vendor5Svg]);
    } else if (type === "product") {
      setImages([
        product1Svg,
        product2Svg,
        product3Svg,
        product4Svg,
        product5Svg,
      ]);
    }
  }, [type]);

  const [imagesPerPage, setImagesPerPage] = useState(2);
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

  const widthForImages = windowWidth / imagesPerPage - 10;

  SwiperCore.use([Autoplay, EffectFade]);

  return (
    <div
      className={`max-width-section w-fit m-auto  py-2 md:py-5 text-primary-black-100`}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={imagesPerPage}
        speed={500}
        loop={true}
        navigation
        autoplay={{ delay: 2000 }}
        style={{
          maxWidth:
            windowWidth > 1500
              ? 1500
              : windowWidth > 1028
              ? windowWidth - 128
              : windowWidth > 768
              ? windowWidth - 96
              : windowWidth - 40,
        }}
        className="my-auto h-fit"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="my-auto max-w-fit">
            <div className="w-fit">
              <Image
                src={image}
                width={widthForImages}
                height={widthForImages}
                alt={
                  type === "vendor"
                    ? `vendor ${index + 1}`
                    : `product ${index + 1}`
                }
                className="h-full object-contain "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
