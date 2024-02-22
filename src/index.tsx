import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AppCore from "./impl/components/AppCore";
import styles from "./impl/styles/index.module.scss";
import { coreLoader } from "impl/utils/coreLoader";

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement == null) {
  throw new Error("Failed to find root element");
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<AppCore />} loader={coreLoader}>
      <Route
        index={true}
        lazy={async () => await import("./impl/components/AppJobSeeker")}
      />
      ,
      <Route
        lazy={async () =>
          await import("./impl/components/personal/AppPersonal")
        }
        path="personal"
      />
      ,
    </Route>,
  ]),
);

root.render(
  <React.StrictMode>
    <RouterProvider
      fallbackElement={
        <div className={styles.fallback}>
          <Spinner variant="primary" />
        </div>
      }
      router={router}
    />
  </React.StrictMode>,
);
