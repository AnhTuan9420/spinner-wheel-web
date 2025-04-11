import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/main/App";
import { AppProvider } from "context/AppContext";
import { CountdownProvider } from "context/CountdownContext";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <CountdownProvider>
      <Helmet>
        <link rel="icon" href="https://shopdunk.com/icons/icons_0/favicon.ico?v=2" />
      </Helmet>
      <App />
    </CountdownProvider>
  </AppProvider>
);
