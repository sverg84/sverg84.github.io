import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
const rootElement = document.getElementById("root");
if (rootElement == null) {
    throw new Error("Failed to find root element");
}
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))));
