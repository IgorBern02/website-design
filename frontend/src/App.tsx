import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductPage } from "./components/shop/ProductPage/ProductPage";
import { Home } from "./pages/Home";

import { useState } from "react";
import { Sidebar } from "./components/Header/Sidebar";
import { FavoritePage } from "./pages/FavoritesPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Header isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      <main className="w-full p-10">
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
