import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MovieInfo from "./MovieInfo";
import Auth from "./Auth";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/movie/:id">
        <MovieInfo />
      </Route>
    </Switch>
  );
}
