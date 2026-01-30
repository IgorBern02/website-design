import { useFavorites } from "../../src/context/FavoritesContext";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export const FavoritePage = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <section className="flex items-center gap-4 px-10 py-6 bg-white">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Favorites" }]}
        />
      </section>
      <div className="p-10">
        <h2 className="text-[6rem] font-black leading-none uppercase">
          Favorites
        </h2>

        {favorites.length === 0 && <p>Nenhum item favoritado.</p>}

        <div className="grid grid-cols-4 grid-rows-auto gap-6 p-2 mt-5">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="w-full h-full gap-2  p-5 flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-gray-500"
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
