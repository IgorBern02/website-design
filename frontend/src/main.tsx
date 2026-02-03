import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./lib/fontawesome";
import { FavoritesProvider } from "./context/FavoritesContext";
import { PurchaseProvider } from "./context/PurchasesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PurchaseProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </PurchaseProvider>
    </BrowserRouter>
  </StrictMode>,
);
