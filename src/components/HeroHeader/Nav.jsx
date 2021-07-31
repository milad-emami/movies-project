import { Button } from "antd";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Container from "../Layout/Container";

export default function Nav() {
  const { user } = useContext(UserContext);
  function handleLogin() {
    fetch(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=293a7d3b6bf12a19fa75475364fcbd0f"
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data.request_token);

        window.location = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/auth
      `;
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
