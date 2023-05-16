import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productContext.jsx";
import { FilterContextProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <Toaster />
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </UserProvider>
);
