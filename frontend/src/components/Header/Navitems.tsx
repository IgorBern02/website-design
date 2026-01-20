const ListItems = ["main", "shop", "custom", "about", "contact"];

export const ListHeaderItems = ({ active }: { active: string }) => (
  <ul className="flex space-x-6">
    {ListItems.map((item) => (
      <li key={item}>
        <a
          href={`#${item}`}
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
        </a>
      </li>
    ))}
  </ul>
);
