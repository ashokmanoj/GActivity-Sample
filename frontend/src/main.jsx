import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { PageTitleProvider } from "./context/PageTitleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageTitleProvider>
      <App />
    </PageTitleProvider>
  </BrowserRouter>
);
