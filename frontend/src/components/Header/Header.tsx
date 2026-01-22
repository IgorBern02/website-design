import { useEffect, useState } from "react";
import { ListHeaderItems } from "./Navitems";
import { useLocation } from "react-router-dom";

const sections = ["main", "shop"];

interface HeaderProps {
  text_up: string;
  text_down: string;
}

export const Header = ({ text_up, text_down }: HeaderProps) => {
  const [active, setActive] = useState("main");
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Se o usuário estiver em uma página de produto,
    // podemos limpar o active ou deixar marcado como vazio
    if (pathname.includes("/product")) {
      setActive("");
      return;
    }

    // 2. Se o usuário voltar para a Home "/" sem hash específico,
    // ou se o hash for "#main", marcamos como "main"
    if (pathname === "/" && (!hash || hash === "#main")) {
      setActive("main");
      window.scrollTo(0, 0); // Garante que subiu pro topo
    } else if (hash) {
      // 3. Se houver um hash (ex: #shop), atualiza o active
      setActive(hash.replace("#", ""));
    }
  }, [pathname, hash]); // Executa sempre que mudar a URL ou o #ID

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center px-6 backdrop-blur-md z-50">
      <div className="leading-none">
        <span className="block font-bold text-2xl">{text_up}</span>
        <span className="block font-bold text-xl -mt-1">{text_down}</span>
      </div>

      <nav className="mx-auto">
        <ListHeaderItems active={active} />
      </nav>
    </header>
  );
};
