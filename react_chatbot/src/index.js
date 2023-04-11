import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/fonts/index.css";
import App from "./App";
import GlobalFonts from "./styles/fonts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalFonts />
    <App />
  </>
);
