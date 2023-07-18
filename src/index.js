import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement == null) {
    throw new Error("Failed to find root element");
}
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))));
