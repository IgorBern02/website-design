import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../../src/context/FavoritesContext";

export const FavoritePage = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <section className="flex items-center gap-4 px-10 py-6 bg-white">
        <button
          onClick={() => window.history.back()}
          className="hover:opacity-60 transition-opacity cursor-pointer"
        >
          <FontAwesomeIcon
            icon="arrow-left"
            className="text-gray-800 text-sm"
          />
        </button>

        <nav className="flex items-center gap-2 font-comfortaa text-[12px] tracking-wide">
          <span className="text-gray-400">Home</span>
          <span className="text-gray-300 mx-1">•</span>
          <span className="text-gray-600 font-medium">Favorites</span>
        </nav>
      </section>
      <div className="p-10">
        <h2 className="text-[6rem] font-black leading-none uppercase">
          Favorites
        </h2>

        {favorites.length === 0 && <p>Nenhum item favoritado.</p>}

        <div className="grid grid-cols-4 grid-rows-auto gap-6 p-2 ">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 w-full h-full gap-2  p-5 flex flex-col items-center justify-center overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover "
              />
              <div className="flex flex-col items-center justify-center bottom-0  w-full">
                <h2>{item.title}</h2>
                <p>R$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
