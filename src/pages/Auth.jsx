import React, { useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../components/Layout/Container";
import { UserContext } from "../context/UserContext";
import accountService from "../service/accountService";
import authService from "../service/authService";

export default function Auth() {
  const { setSessionId } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const requestToken = new URLSearchParams(location.search).get(
    "request_token"
  );
  useEffect(() => {
    if (requestToken) {
      authService.createSession(requestToken).then((data) => {
        setSessionId(data.session_id);
        history.replace("/");

        accountService.getDetails().then((data) => {
          message.success(
            `${data.name || data.username} Welcome to Mapsa Movies!`
          );
        });
      });
    }
  }, []);

  return (
    <Container>
      <div style={{ color: "white" }}>you are login </div>;
    </Container>
  );
}
