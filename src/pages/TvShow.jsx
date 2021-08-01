import React from "react";
import { useParams } from "react-router";
import Container from "../components/Layout/Container";
import useMovieDB from "../hooks/useMovieDB";

export default function TvShow() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`tv/${id}`);
  return (
    <Container>
      <h1>{data.name}</h1>
    </Container>
  );
}
