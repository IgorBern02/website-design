import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Card } from "../components/shop/Card/Card";
import { ViewMore } from "../components/shop/ViewMore/ViewMore";

export const ShopPage = () => {
  const { products } = useProducts();

  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section className="pt-20 px-20 flex flex-col gap-20">
      <h2 className="text-[6rem] font-black leading-none">SHOP</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-end">
        {products.slice(0, visibleCount).map((product, index) => (
          <div key={product.id} style={{ transitionDelay: `${index * 120}ms` }}>
            <Card product={product} />
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <ViewMore
          onClick={() => {
            setVisibleCount((prev) => prev + 3);
          }}
        />
      )}
    </section>
  );
};
