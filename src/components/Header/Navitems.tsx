const ListItems = ["main", "shop", "custom", "about", "contact"];
const activeItem = "main";

export const listHeaderItems = () => (
  <ul className="flex space-x-6">
    {ListItems.map((item) => {
      const isActive = item === activeItem;

      return (
        <li
          key={item}
          className={`
            font-comfortaa text-base cursor-pointer p-2 rounded-md transition
            ${isActive ? "text-white font-bold" : "text-black hover:text-white"}
          `}
        >
          {item}
        </li>
      );
    })}
  </ul>
);
