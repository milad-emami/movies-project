import { useState, useEffect } from "react";

export default function useFetch({ url, query, method = "GET" }) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function reFetch(extraQuery) {
    const newQuery = { ...query, ...extraQuery };
    const queryParams = Object.keys(newQuery).length
      ? new URLSearchParams(newQuery).toString()
      : null;

    fetch(`${url}${queryParams ? `?${queryParams}` : ""}`, { method })
      .then((r) => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    reFetch(query);
  }, []);
  return { data, error, reFetch, loading };
}
