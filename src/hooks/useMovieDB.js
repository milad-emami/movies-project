import useFetch from "./useFetch";

export default function useMovieDb(endpoint, query) {
  return useFetch({
    url: `https://api.themoviedb.org/3/${endpoint}`,
    query: {
      api_key: "293a7d3b6bf12a19fa75475364fcbd0f",
      language: "en-US",
      ...query,
    },
  });
}
