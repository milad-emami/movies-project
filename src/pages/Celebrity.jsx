import React from "react";
import { useParams } from "react-router";
import Container from "../components/Layout/Container";
import useMovieDB from "../hooks/useMovieDB";

export default function Celebrity() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`person/${id}`);
  return (
    <Container>
      <h1>{data.name}</h1>
    </Container>
  );
}
