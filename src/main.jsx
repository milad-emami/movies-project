import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HeroHeaderProvider from "./context/HeroHeaderContext";
import App from "./App";
import "antd/dist/antd.css";
import "./assets/css/global.scss";
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <HeroHeaderProvider>
          <App />
        </HeroHeaderProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
