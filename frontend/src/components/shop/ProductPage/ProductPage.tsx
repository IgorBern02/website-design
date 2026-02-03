import { useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import { ProductImage } from "./ProductImage";
import { ProductData } from "./ProductData/ProductData";
import { Rating } from "./Rating/Rating";

import { Breadcrumb } from "../../ui/Breadcrumb";

export const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div className="p-20 text-2xl">Produto não encontrado</div>;
  }

  return (
    <>
      <section className="flex items-center gap-4 px-10 py-6 bg-gray-50">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Product Details" }]}
        />
      </section>
      <section className="p-10 flex gap-20 w-full h-min-screen ">
        <ProductImage imageUrl={product.imageUrl} name={product.name} />
        <ProductData product={product} />
      </section>
      <section className="w-full p-20 ">
        <p className="font-bold font-comfortaa text-xl">Rating & Reviews</p>
        <div className="flex items-center justify-center p-5">
          <Rating />
        </div>
      </section>
    </>
  );
};
