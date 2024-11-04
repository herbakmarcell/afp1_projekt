import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";

function Fooldal() {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
}

// Bejelentkezés oldal render

ReactDom.render(<Fooldal />, document.getElementById("root"));
