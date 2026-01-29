import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductPage } from "./components/shop/ProductPage/ProductPage";
import { Home } from "./pages/Home";

import { Filters } from "./components/shop/Filters/Filters";
import { useState } from "react";
import { Sidebar } from "./components/Header/Sidebar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Header isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <Filters
        onSearch={setSearchTerm}
        onCategorySelect={setSelectedCategory}
      />
      <main className="pt-20">
        <Routes>
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route
            path="/"
            element={
              <Home
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
              />
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
