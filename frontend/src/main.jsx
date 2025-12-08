import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { PageTitleProvider } from "./context/PageTitleContext";
import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageTitleProvider>
      <ToastProvider position="center">
        <App />
      </ToastProvider>
    </PageTitleProvider>
  </BrowserRouter>
);
