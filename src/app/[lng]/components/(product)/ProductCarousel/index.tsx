"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import styles from "@/app/[lng]/components/(product)/ProductCarousel/productCarousel.module.scss";

interface ProductCarouselProps {
  family: string;
  variant: string;
  url: {
    [variant: string]: string[];
  };
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  family,
  variant,
  url,
}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    if (slider1.current && slider2.current) {
      setNav1(slider1.current);
      setNav2(slider2.current);
    }
  }, []);

  const settings = {
    arrows: true,
    focusOnSelect: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: nav1,
    ref: slider2,
    className: "productCarousel",
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Slider arrows={false} asNavFor={nav2} ref={slider1}>
            {url[variant].map((image, index) => (
              <div key={index}>
                <div className={styles.image__container}>
                  <InnerImageZoom
                    className={styles.image}
                    src={`/assets/trailers/details/images/${family}/${variant}/${image}.webp`}
                    zoomType="hover"
                    zoomPreload={true}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.carousel__secondary}>
          <Slider {...settings}>
            {url[variant].map((image, index) => (
              <div key={index}>
                <div className={styles.image__container__secondary}>
                  <Image
                    className={styles.image__secondary}
                    src={`/assets/trailers/details/images/${family}/${variant}/${image}.webp`}
                    width={174}
                    height={92}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>{" "}
      </div>
    </>
  );
};
