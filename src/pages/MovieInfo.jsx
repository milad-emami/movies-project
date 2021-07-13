import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Layout, Button, Card } from "antd";
import { PauseOutlined, CreditCardOutlined } from "@ant-design/icons";
import MovieInfoRightSide from "../components/MovieInfoRightSide";

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export default function MovieInfo() {
  const [detailMovies, setDetailMovies] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetailMovies(data));
  }, []);
  //console.log(detailMovies);

  return (
    <Layout>
      <Sider style={{ backgroundColor: "red", width: "330px", height: "100%" }}>
        <Content>
          <Card
            hoverable
            cover={
              <img
                alt={detailMovies.title}
                src={`https://image.tmdb.org/t/p/w500/${detailMovies.poster_path}`}
              />
            }
          >
            <Button
              style={{
                marginBottom: "12px",
                marginTop: "12px",
                width: "100%",
                background: "red",
                borderColor: "black"
                
              }}
              type="primary"
              icon={<PauseOutlined />}
            >
              Watch trailer
            </Button>
            <Button
              style={{
                marginBottom: "12px",
                width: "100%",
                background: "yellow",
                borderColor: "black",
                color:'black'
              }}
              type="primary"
              icon={<CreditCardOutlined />}
            >
              Buy Ticket
            </Button>
          </Card>
        </Content>
      </Sider>
      <MovieInfoRightSide movieInfo={detailMovies} />
    </Layout>
  );
}
