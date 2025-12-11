import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { PageTitleProvider } from "./context/PageTitleContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LoadScript } from "@react-google-maps/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <PageTitleProvider>
      <LoadScript googleMapsApiKey="AIzaSyD-de6OTIs2NRXKOaO6p2M19h1omc0iLzo" >
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
        </LoadScript>
      </PageTitleProvider>
    </ThemeProvider>
  </BrowserRouter>
);
