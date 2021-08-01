import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title} | Movies </title>
      <meta content={description} name="description" />
    </Helmet>
  );
}

SEO.defaultProps = {
  title: "Fill title",
  description: " Movies Database",
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
