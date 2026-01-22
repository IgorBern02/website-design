import { useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";

export const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div className="p-20 text-2xl">Produto não encontrado</div>;
  }

  return (
    <section className="p-20 flex gap-20">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-125 h-125 object-cover"
      />

      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <p className="text-3xl font-semibold">R$ {product.price}</p>
        <button className="bg-black text-white px-10 py-4">
          Comprar agora
        </button>
      </div>
    </section>
  );
};
