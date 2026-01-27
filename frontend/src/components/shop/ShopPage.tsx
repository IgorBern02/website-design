import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Card } from "./Card/Card";
import { ViewMore } from "./ViewMore/ViewMore";

export const ShopPage = () => {
  const { products } = useProducts();
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isExpanded = visibleCount > INITIAL_COUNT;

  const handleToggleViewMore = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <section className="pt-20 px-20 flex flex-col gap-20" id="shop">
      <h2 className="text-[6rem] font-black leading-none uppercase">shop</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-end">
        {products.slice(0, visibleCount).map((product, index) => (
          <div key={product.id} style={{ transitionDelay: `${index * 120}ms` }}>
            <Card product={product} />
          </div>
        ))}
      </div>

      {products.length > INITIAL_COUNT && (
        <ViewMore isExpanded={isExpanded} onClick={handleToggleViewMore} />
      )}
    </section>
  );
};
