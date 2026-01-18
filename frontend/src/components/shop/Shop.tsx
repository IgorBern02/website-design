import { useProducts } from "../../hooks/useProducts";
import { Card } from "./Card";

export const Shop = () => {
  const { products } = useProducts();

  return (
    <section className="min-h-screen pt-28 px-20 flex flex-col gap-20">
      <h2 className="text-[8rem] font-black leading-none">SHOP</h2>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-end">
        {products.slice(0, 3).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
