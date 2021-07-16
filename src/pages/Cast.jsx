import React, { useState, useEffect } from "react";
import { Spin, Row, Col } from "antd";

const Cast = ({ id }) => {
  const [castMovies, setCastMovies] = useState();
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    // console.log("id", id);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setCastMovies(data.cast))
      .finally(() => setLoding(false));
  }, []);

  return !castMovies ? (
    <Spin spinning={loading}></Spin>
  ) : (
    castMovies.map((cast) => (
      <Row align="middle" gutter={[16, 16]} style={{ marginBottom: 12 }}>
        <Col>
          <img
            alt={cast.name}
            src={`https://image.tmdb.org/t/p/w45${cast.profile_path}`}
          />
        </Col>
        <Col span={12}>
          <p style={{ margin: 0 }}>{cast.name}</p>
        </Col>
        <Col>
          <p
            style={{
              fontFamily: "Nunito",
              fontSize: "14px",
              color: "#596979",
            }}
          >
            {cast.character}
          </p>
        </Col>
      </Row>
    ))
  );
};
//};

export default Cast;
