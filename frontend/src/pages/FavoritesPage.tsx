import { useFavorites } from "../../src/context/FavoritesContext";

export const FavoritePage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Favoritos</h1>

      {favorites.length === 0 && <p>Nenhum item favoritado.</p>}

      <div className="grid grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div key={item.id} className="border p-4 rounded-xl">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>R$ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
