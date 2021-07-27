import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HeroHeaderProvider from "./context/HeroHeaderContext";
import App from "./App";
import "antd/dist/antd.css";
import "./assets/css/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroHeaderProvider>
        <App />
      </HeroHeaderProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
