import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement == null) {
  throw new Error("Failed to find root element");
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
