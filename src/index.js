import React from "react";
import ReactDOM from "react-dom/client";
import List from "./containers/List";
import {
  InputWithNameValidation,
  InputWithNameAndEmailValidation,
} from "./patterns/withRequired";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <List />
    <br />
    <InputWithNameValidation />
    <br />
    <InputWithNameAndEmailValidation />
  </React.StrictMode>
);
