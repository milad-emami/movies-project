import React, { useContext } from "react";
import CustomeSwiper from "../../CustomeSwiper/CustomeSwiper";
import useMovieDB from "../../hooks/useMovieDB";
import { HeroHeaderContext } from "../../context/HeroHeaderContext";
import image from "../../helpers/image";

export default function PopularMoviesSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/popular");

  const [, setBg] = useContext(HeroHeaderContext);

  function changeHeaderBackground(slide) {
    setBg(image(slide.poster_path, "w780"));
  }

  //console.log(data.results);
  return (
    <CustomeSwiper
      slides={data.results}
      onHoverSlide={changeHeaderBackground}
    />
  );
}
