import { useParams } from "react-router-dom";
import React, { useState } from "react";

export default function MovieInfo() {
  const { id } = useParams();
  return <h1>This is video number {id}</h1>;
}
