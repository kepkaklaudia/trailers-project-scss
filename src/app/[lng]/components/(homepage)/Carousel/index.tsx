"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/keyboard";

import styles from "@/app/[lng]/components/(homepage)/Carousel/carousel.module.scss";

interface CarouselProps {
  images: string[];
  className?: string;
  priority?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  className,
  priority,
}) => {
  const settings = {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      clickable: true,
    },
    speed: 3000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Keyboard, Autoplay, Pagination],
    className: styles.swiper,
  };

  return (
    <div className={styles.container}>
      <Swiper {...settings}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              key={index}
              className={`${styles.image} ${className}`}
              alt="background"
              width={1920}
              height={1080}
              src={image}
              priority={priority}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
