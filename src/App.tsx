import "./globals.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Header text_up="Aura" text_down="store" />

      <main className="pt-20">
        <Hero />
      </main>

      <section className="min-h-screen bg-white p-20">
        <h2 className="text-6xl font-bold">New Collection</h2>
        <p className="mt-10">Aqui começa o site...</p>
      </section>
    </div>
  );
}

export default App;
