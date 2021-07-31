import React, { useContext } from "react";
import { Row, Col } from "antd";
import Search from "../Search/Search";
import Container from "../Layout/Container";
import classes from "./HeroHeader.module.scss";
import PopularMoviesSwiper from "../PopularMoviesSwiper/PopularMoviesSwiper";
import { HeroHeaderContext } from "../../context/HeroHeaderContext";
import Nav from "./Nav";

export default function HeroHeader({ children }) {
  const [bg] = useContext(HeroHeaderContext);
  return (
    <header
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(rgb(3 13 24), rgb(3 13 24 / 40%)), url(${bg})`,
      }}
    >
      <Nav />
      <Container>
        <Search />
      </Container>

      {children && (
        <div style={{ margin: "48px auto" }}>
          <Container>{children}</Container>
        </div>
      )}
    </header>
  );
}
