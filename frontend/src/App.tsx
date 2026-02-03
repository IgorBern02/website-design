import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductPage } from "./components/shop/ProductPage/ProductPage";
import { Home } from "./pages/Home";

import { useState } from "react";

import { NavSideBar } from "./components/ui/NavSideBar";
import { FavoritePage } from "./pages/FavoritesPage";
import { CartSidebar } from "./components/ui/CartSidebar";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <NavSideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Header
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((p) => !p)}
        onCartToggle={() => setIsCartOpen((p) => !p)}
      />

      <main className="w-full p-10 mt-10">
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
