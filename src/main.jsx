import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./utils/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router />
  </>
);
