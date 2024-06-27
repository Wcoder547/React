import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chai from "./components/Chai.jsx";
import "./index.css";

const anotherElem = (
  <a href="https://google.com" target="_blank">
    click to visit google
  </a>
);

const createElem = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click to visit google"
);
ReactDOM.createRoot(document.getElementById("root")).render(createElem);
