import React from "react";
import ReactDOM from "react-dom/client";

import App from "./global/App";
import Preloader from "./global/Preloader";

import "./index.css";
import "./reset.css";

import "./styles/preloader.css";

const preloader = ReactDOM.createRoot(document.getElementById("preloader"));
preloader.render(
   <React.StrictMode>
      <Preloader />
   </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
