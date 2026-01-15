const ListItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

export const listHeaderItems = () => (
  <div>
    <ul className="flex space-x-6 ">
      {ListItems.map((item, index) => (
        <li
          key={index}
          className="font-poppins text-sm cursor-pointer p-2 rounded-md hover:bg-gray-700"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
