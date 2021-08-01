import React, { useEffect } from "react";
import { useParams } from "react-router";
import Container from "../components/Layout/Container";
import useMovieDB from "../hooks/useMovieDB";

export default function Movie() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`movie/${id}`);

  return (
    <Container>
      <h1>{data.title}</h1>
    </Container>
  );
}
