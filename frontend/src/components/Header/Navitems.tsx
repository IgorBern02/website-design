import { HashLink } from "react-router-hash-link";

const ListItems = ["main", "shop", "collection", "about", "contact"];

export const ListHeaderItems = ({ active }: { active: string }) => (
  <ul className="flex space-x-6">
    {ListItems.map((item) => (
      <li key={item}>
        <HashLink
          smooth // Faz o scroll suave
          to={item === "main" ? "/#main" : `/#${item}`}
          className={`
            font-comfortaa text-base p-2 transition-all duration-300
            ${
              active === item
                ? "text-white font-bold"
                : "text-black hover:text-white"
            }
          `}
        >
          {item}
        </HashLink>
      </li>
    ))}
  </ul>
);
