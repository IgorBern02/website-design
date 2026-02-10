import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./lib/fontawesome";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
