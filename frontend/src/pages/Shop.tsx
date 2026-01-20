import { useProducts } from "../hooks/useProducts";
import { Card } from "../components/shop/Card/Card";
import { ViewMore } from "../components/shop/ViewMore/ViewMore";

export const Shop = () => {
  const { products } = useProducts();

  return (
    <section className="min-h-screen pt-28 px-20 flex flex-col gap-20">
      <h2 className="text-[6rem] font-black leading-none">SHOP</h2>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-end">
        {products.slice(0, 6).map((product, index) => (
          <div key={product.id} style={{ transitionDelay: `${index * 120}ms` }}>
            <Card product={product} />
          </div>
        ))}
      </div>

      <ViewMore />
    </section>
  );
};
