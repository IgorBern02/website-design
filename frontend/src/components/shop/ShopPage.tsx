import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Card } from "./Card/Card";
import { ViewMore } from "./ViewMore/ViewMore";
import { Filters } from "./ProductPage/Filters/Filters";

export const ShopPage = () => {
  const { products } = useProducts();
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // 1. Novo estado

  const isExpanded = visibleCount > INITIAL_COUNT;

  // 2. Filtro combinado: Texto + Categoria
  const filteredProducts = products.filter((product) => {
    // Busca por texto
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Busca por Categoria:
    // Se for "All", retorna true para todos.
    // Se não, verifica se a categoria do produto é IGUAL à selecionada.
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleToggleViewMore = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_COUNT);
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(products.length); // Abre tudo para facilitar a navegação
    }
  };

  return (
    <section className="pt-20 px-20 flex flex-col gap-20" id="shop">
      {/* 3. Atualizamos o estado quando uma categoria é clicada */}
      <Filters
        onSearch={setSearchTerm}
        onCategorySelect={(cat) => {
          setSelectedCategory(cat);
          setVisibleCount(INITIAL_COUNT); // Reseta a paginação ao trocar de categoria
        }}
      />

      <h2 className="text-[6rem] font-black leading-none uppercase">shop</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-end">
        {filteredProducts.slice(0, visibleCount).map((product, index) => (
          <div key={product.id} style={{ transitionDelay: `${index * 120}ms` }}>
            <Card product={product} />
          </div>
        ))}
      </div>

      {/* Exibe o botão apenas se houver mais itens filtrados do que o limite inicial */}
      {filteredProducts.length > INITIAL_COUNT && (
        <ViewMore isExpanded={isExpanded} onClick={handleToggleViewMore} />
      )}

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}
    </section>
  );
};
