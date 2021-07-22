import React, { useState, useEffect } from "react";
import { Divider, Spin } from "antd";
import "./Tab2.css";

const Tab2 = ({ id }) => {
  const [movieReview, setMovieReview] = useState();
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovieReview(data.results))
      .finally(() => setLoding(false));
  }, []);

  return !movieReview ? (
    <Spin spinning={loading}></Spin>
  ) : (
    movieReview.map((review) => {
      console.log("autor", review.author);
      return (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                alt="pic"
                src={`https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`}
              />
            </div>
            <div>
              <div>{review.author}</div>
              <div>rating: 7</div>
              <div>{review.created_at}</div>
            </div>
          </div>
          <div>{review.content}</div>
          <Divider></Divider>
        </>
      );
    })
  );
};

export default Tab2;
