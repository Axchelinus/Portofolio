// Libary
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// App
import App from "./App";

// main
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portofolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
