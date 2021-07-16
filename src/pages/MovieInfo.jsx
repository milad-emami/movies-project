import { useParams } from "react-router-dom";
import React, { useState, useEffect, Suspense } from "react";
import { Layout, Button, Card, Spin, Modal } from "antd";
import { PauseOutlined, CreditCardOutlined } from "@ant-design/icons";
import MovieInfoRightSide from "../components/MovieInfoRightSide";
// const MovieInfoRightSide = React.lazy(() =>
//   import("../components/MovieInfoRightSide")
// );

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export default function MovieInfo() {
  const [detailMovies, setDetailMovies] = useState();
  const [trailerMovies, setTrailerMovies] = useState({});
  const [loading, setLoding] = useState(false);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleTrailerClick = () => {
    setShowModal(true);
    fetch(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=293a7d3b6bf12a19fa75475364fcbd0f`
    )
      .then((response) => response.json())
      .then((data) => setTrailerMovies(data));
  };
  useEffect(() => {
    if (trailerMovies?.results)
      console.log(
        `https://www.youtube.com/watch?v=${trailerMovies?.results[0].key}`,
        trailerMovies.results
      );
  }, [trailerMovies]);

  useEffect(() => {
    setLoding(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetailMovies(data))
      .finally(() => setLoding(false));
  }, []);
  // console.log(detailMovies);
  //if (!detailMovies) return <Spin spinning={loading}></Spin>;

  return !detailMovies ? (
    <Spin spinning={loading}></Spin>
  ) : (
    <>
      <Modal
        title="Basic Modal"
        visible={showModal}
        onOk={() => {
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        {trailerMovies?.results && (
          <iframe
            style={{ justifyContent: "center" }}
            width="420"
            height="345"
            src={`https://www.youtube.com/embed/${trailerMovies?.results[0]?.key}`}
          ></iframe>
        )}
      </Modal>
      <Spin spinning={loading}>
        <Layout>
          <Sider
            style={{ backgroundColor: "red", width: "330px", height: "100%" }}
          >
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
                    borderColor: "black",
                  }}
                  type="primary"
                  icon={<PauseOutlined />}
                  onClick={handleTrailerClick}
                >
                  Watch trailer
                </Button>
                <Button
                  style={{
                    marginBottom: "12px",
                    width: "100%",
                    background: "yellow",
                    borderColor: "black",
                    color: "black",
                  }}
                  type="primary"
                  icon={<CreditCardOutlined />}
                >
                  Buy Ticket
                </Button>
              </Card>
            </Content>
          </Sider>

          {/* <Suspense fallback={<Spin spinning={true}></Spin>}> */}
          <MovieInfoRightSide movieInfo={detailMovies} />
          {/* </Suspense> */}
        </Layout>
      </Spin>
    </>
  );
}
