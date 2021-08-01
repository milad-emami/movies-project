import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MovieInfo from "./MovieInfo";
import Auth from "./Auth";
import Movie from "./Movie";
import TvShow from "./TvShow";
import Celebrity from "./Celebrity";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/movies/:id/:movieTitle">
        <Movie />
      </Route>
      <Route path="/tv-shows/:id/:tvShowName">
        <TvShow />
      </Route>
      <Route path="/celebrities/:id/:celebrityName">
        <Celebrity />
      </Route>
    </Switch>
  );
}
