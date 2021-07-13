import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination, Spin } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function Home() {
  const [latestmoviesData, setLatestMoviesData] = useState({});
  const { results = [], page, total_pages, total_results } = latestmoviesData;
  const [loading, setLoding] = useState(false);

  function fetchMovies(page) {
    setLoding(true);
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setLatestMoviesData(data))
      .finally(() => setLoding(false));

  }
  function handleClick(id) {
    // console.log(
    //   `https://api.themoviedb.org/3/movie/${id}?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US`
    // );
  }

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <>
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {results.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Link to={`/movie/${movie.id}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={movie.title}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      onClick={() => handleClick(movie.id)}
                    />
                  }
                >
                  <Meta title={movie.original_title} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Spin>
      <Row style={{ marginTop: 35 }} justify="center">
        <Col>
          <Pagination
            current={page}
            defaultCurrent={1}
            total={total_results}
            defaultPageSize={20}
            showSizeChanger={false}
            onChange={fetchMovies}
          />
        </Col>
      </Row>
    </>
  );
}
