import { useProducts } from "../../hooks/useProducts";
import { Card } from "./Card";

export const Shop = () => {
  const { products } = useProducts();

  return (
    <section className="min-h-screen pt-28 px-20  flex flex-col gap-10">
      <h2 className="text-8xl font-black font-roboto ">SHOP</h2>

      <Card product={products[0]} />

      {/* <div className="flex">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};
