import React, { useState, useEffect } from "react";

const Tab2 = ({ id }) => {
  const [MovieReview, setMovieReview] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovieReview(data));
  }, []);
  console.log("tab2" + MovieReview.id);
  // console.log(id);

  return <p>{MovieReview.results[0].content}</p>;
};

export default Tab2;
