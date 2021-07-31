import React, { useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../components/Layout/Container";
import { UserContext } from "../context/UserContext";

export default function Auth() {
  const { setSessionId } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const requestToken = new URLSearchParams(location.search).get(
    "request_token"
  );
  useEffect(() => {
    if (requestToken) {
      const url =
        "https://api.themoviedb.org/3/authentication/session/new?api_key=293a7d3b6bf12a19fa75475364fcbd0f";
      fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          request_token: requestToken,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          setSessionId(data.session_id);
          history.replace("/");
        });
    }
  }, [requestToken]);

  return (
    <Container>
      <div style={{ color: "white" }}>you are login </div>;
    </Container>
  );
}
