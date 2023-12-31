import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import SeriesProvider from "./provider/dataSeries";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SeriesProvider>
      <Home name={'felipe'} sobrenome={'lima'}  />
    </SeriesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
