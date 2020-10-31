import React from "react";
import ReactDOM from "react-dom";
import { LeaseSummary } from "./App";
import { SiteLayout } from "./layout";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SiteLayout />
  </React.StrictMode>,
  rootElement
);
