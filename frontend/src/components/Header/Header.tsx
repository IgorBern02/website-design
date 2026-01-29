import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  text_up: string;
  text_down: string;
}

export const Header = ({ text_up, text_down }: HeaderProps) => {
  return (
    <header className=" w-full h-20 flex items-center justify-between px-6">
      <section className="leading-none">
        <span className="block font-bold text-2xl">{text_up}</span>
        <span className="block font-bold text-xl -mt-1">{text_down}</span>
      </section>

      <section className="flex items-center gap-7">
        <nav className="flex items-center p-2">
          <ul className="flex gap-8">
            <li className="font-comfortaa text-sm cursor-pointer">About</li>
            <li className="font-comfortaa text-sm cursor-pointer">FAQs</li>
          </ul>
        </nav>
        <div className="flex items-center justify-center p-3  shadow-sm shadow-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition">
          <FontAwesomeIcon icon="bag-shopping" className="text-sm" />
        </div>
      </section>
    </header>
  );
};
