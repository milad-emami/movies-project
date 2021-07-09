import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

export default function Home() {
  const [latestmoviesData, setLatestMoviesData] = useState({});
  const { results = [], page, total_pages, totalResults } = latestmoviesData;
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setLatestMoviesData(data));
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {results.map((movie) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card
            hoverable
            cover={
              <img
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            }
          >
            <Meta title={movie.original_title} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
