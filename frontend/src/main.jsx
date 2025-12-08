import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { PageTitleProvider } from "./context/PageTitleContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <PageTitleProvider>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </PageTitleProvider>
    </ThemeProvider>
  </BrowserRouter>
);
