import { useEffect, useState } from "react";
import { ListHeaderItems } from "./Navitems";

const sections = ["main", "shop"];

interface HeaderProps {
  text_up: string;
  text_down: string;
}

export const Header = ({ text_up, text_down }: HeaderProps) => {
  const [active, setActive] = useState("main");

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
