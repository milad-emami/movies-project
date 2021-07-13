import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function Tab() {
  const [detailMovies, setDetailMovies] = useState({});

  function fetchOverView() {
    fetch(
      `https://api.themoviedb.org/3/movie/508943?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetailMovies(data));

    console.log(detailMovies.overview);
  }

  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Tab 1" key="1">
        <p>{detailMovies.overview}</p>
        <button onClick={fetchOverView}>q</button>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}
