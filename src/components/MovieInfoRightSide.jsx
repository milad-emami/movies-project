import React, { useState, useEffect } from "react";
import { Layout, Typography, Tabs, Row, Col, Divider, Rate } from "antd";
import { StarFilled } from "@ant-design/icons";
import RateTool from "./RateTool";
import Tab2 from "../pages/Tabs/Tab2";
import Cast from "../pages/Cast";
import PopularMoviesSwiper from "../components/PopularMoviesSwiper/PopularMoviesSwiper";

const { TabPane } = Tabs;

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

const MovieInfoRightSide = ({ movieInfo }) => {
  if (!movieInfo) return null;

  console.log("movieInfoid right side", movieInfo.id);
  return (
    <Layout style={{ marginLeft: "24px" }}>
      <Title level={3}>
        {movieInfo.title}
        {movieInfo.release_date
          ? movieInfo.release_date?.split("-")[0]
          : "loading"}
      </Title>
      <PopularMoviesSwiper />
      <Divider></Divider>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ display: "flex" }}>
          <StarFilled
            style={{
              fontSize: "18px",
              color: "#ff9270",
              marginRight: "10px",
              borderColor: "black",
            }}
          />
          <p>
            <span>8.1</span>/10
          </p>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          Rate This Movie:
          <Rate allowHalf value={movieInfo.vote_average / 2} />
        </div>
      </div>

      {/* <Row>
        <Col flex={2}>
          <Row>
            <Col>
              <StarFilled
                style={{
                  fontSize: "16px",
                  color: "#ff9270",
                  borderColor: "black",
                }}
              />
            </Col>
            <Col>
              <Row>
                <p>
                  <span>8.1</span>/10
                </p>
              </Row>
              <Row>
                <span>56 Reviews</span>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col flex={3}>
          Rate This Movie:
          <Rate allowHalf value={movieInfo.vote_average / 2} />
        </Col>
      </Row> */}
      <Divider></Divider>

      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="OVERVIEW" key="1">
          <p>{movieInfo.overview}</p>
          <Divider orientation="left">Cast</Divider>
          <Cast id={movieInfo.id} />
        </TabPane>
        <TabPane tab="REVIEWS" key="2">
          <Tab2 id={movieInfo.id} />
        </TabPane>
        <TabPane tab="CAST&CREW" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default MovieInfoRightSide;
