import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chai from "./components/Chai.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Chai />
  </React.StrictMode>
);
