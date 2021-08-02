import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";

import Home from "./Home";
import About from "./About";
import Auth from "./Auth";
import Movie from "./Movie";
import TvShow from "./TvShow";
import Celebrity from "./Celebrity";
import Profile from "./Profile";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <PrivateRoutes path="/profile">
        <Profile />
      </PrivateRoutes>
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
