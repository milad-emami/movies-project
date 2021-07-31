import { Button } from "antd";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Container from "../Layout/Container";
import authService from "../../service/authService";

export default function Nav() {
  const { user } = useContext(UserContext);
  function handleLogin() {
    authService.createRequestToken().then((data) => {
      window.location = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/auth`;
    });
  }

  return (
    <nav>
      <Container>
        {user ? user.username : <Button onClick={handleLogin}>Login</Button>}
      </Container>
    </nav>
  );
}
