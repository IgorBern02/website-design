import "./globals.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./pages/Hero";
import { Shop } from "./components/shop/Shop";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Header text_up="Aura" text_down="store" />

      <main className="pt-20">
        <Hero />
        <Shop />
      </main>
    </div>
  );
}

export default App;
