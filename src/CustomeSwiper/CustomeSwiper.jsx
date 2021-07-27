import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Prototype from "prop-types";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import MovieCard from "../components/MovieCard/MovieCard";
import image from "../helper/image";
import slugify from "../helper/slugify";

SwiperCore.use([Pagination, Autoplay]);

export default function CustomeSwiper({ slides, onHoverSlide }) {
  console.log(slides);
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: 2000,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} onMouseEnter={() => onHoverSlide(slide)}>
          <MovieCard
            poster={image(slide.poster_path, "w500")}
            title={slide.title}
            rate={slide.vote_average}
            linkPath={`/movie/${slide.id}/${slugify(slide.title)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
CustomeSwiper.prototype = {
  slides: Prototype.array.isRequired,
};
