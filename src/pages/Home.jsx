import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination, Spin } from "antd";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useMovieDb from "../hooks/useMovieDb";

const { Meta } = Card;

export default function Home() {
  const {
    data: latestmoviesData = {},
    loading,
    reFetch,
  } = useMovieDb("movie/upcoming");
  const { results = [], page, total_pages, total_results } = latestmoviesData;

  function handleChangePage(page) {
    reFetch({ page });
  }

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
                      // onClick={() => handleClick(movie.id)}
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
            onChange={handleChangePage}
          />
        </Col>
      </Row>
    </>
  );
}
