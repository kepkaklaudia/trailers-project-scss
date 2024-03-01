"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/autoplay";
import "swiper/scss/keyboard";
import { nanoid } from "nanoid";
import { CategoryButton } from "@/app/[lng]/components/(common)/CategoryButton";
import { categories } from "@/app/[lng]/components/(common)/CategoryButton/categoriesData";
import styles from "@/app/[lng]/components/(homepage)/CategoriesCarousel/categoriesCarousel.module.scss";

export const CategoriesCarousel = () => {
  const settings = {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 5,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      1800: {
        slidesPerView: 3.5,
        spaceBetween: 270,
      },
      1700: {
        slidesPerView: 3.5,
        spaceBetween: 220,
      },
      1600: {
        slidesPerView: 3.5,
        spaceBetween: 200,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 170,
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 150,
      },
      1300: {
        slidesPerView: 3.5,
        spaceBetween: 120,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 100,
      },
      1100: {
        slidesPerView: 3.5,
        spaceBetween: 85,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 60,
      },
      850: {
        slidesPerView: 3.5,
        spaceBetween: 45,
      },
      767: {
        slidesPerView: 3.5,
        spaceBetween: 35,
      },
      700: {
        slidesPerView: 3.5,
        spaceBetween: 45,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      620: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      420: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      340: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    modules: [EffectCoverflow, Keyboard, Autoplay],
    className: styles.swiper,
  };

  return (
    <>
      <div className={styles.carousel}>
        <Swiper {...settings}>
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={nanoid()}>
              {categories.map((category, categoryIndex) => (
                <SwiperSlide key={nanoid()}>
                  <CategoryButton
                    boxShadow="12px 12px 10px rgba(0, 0, 0, 0.2)"
                    titleKey={category.titleKey}
                    category={category.path}
                    additionalBackgroundClass={styles.background}
                    additionalLinkClass={styles.link}
                  />
                </SwiperSlide>
              ))}
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </>
  );
};
