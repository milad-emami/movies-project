import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieInfo from "./pages/MovieInfo";
import Search from "./components/Search/Search";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {/*       <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Row>
          <Col span={24}>
            <Search />
          </Col>
        </Row>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380, marginTop: 48 }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/movie/:id">
              <MovieInfo />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
