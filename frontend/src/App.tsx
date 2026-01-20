import "./globals.css";
import { Header } from "./components/Header/Header";

import { Shop } from "./pages/Shop";
import { HeroPage } from "./pages/HeroPage";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Header text_up="Aura" text_down="store" />

      <main className="pt-20">
        <HeroPage />
        <Shop />
      </main>
    </div>
  );
}

export default App;
