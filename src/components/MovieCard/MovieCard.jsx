import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

function MovieCard({ poster, title, rate, linkPath }) {
  return (
    <div className={classes.root}>
      <span className={classes.overlay} />
      <Link to={linkPath}>
        <h3>{title.toUpperCase()}</h3>
        <img src={poster} />
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rate: PropTypes.number,
};

export default MovieCard;
