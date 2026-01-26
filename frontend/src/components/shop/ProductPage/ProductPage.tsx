import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import { ProductImage } from "./ProductImage";
import { ProductData } from "./ProductData/ProductData";

export const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div className="p-20 text-2xl">Produto não encontrado</div>;
  }

  return (
    <>
      <section className="p-20 flex gap-20 w-full h-min-screen">
        <ProductImage imageUrl={product.imageUrl} name={product.name} />

        <ProductData product={product} />
      </section>
      <section className="w-full p-20 ">
        <p className="font-bold font-comfortaa text-xl">Rating & Reviews</p>
        <div className="flex items-center justify-center p-5">
          <div className="w-full h-full rounded-md text-white flex items-center gap-7">
            <div className="flex  gap-2">
              <p className="text-9xl font-comfortaa">4,5</p>
              <p className="text-gray-400 flex items-end text-2xl">/5</p>
            </div>

            <ul>
              <li className="flex items-center gap-1">
                <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                <p className="text-[14px] font-medium">5</p>
              </li>
              <li className="flex items-center gap-1">
                <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                <p className="text-[14px] font-medium">4</p>
              </li>
              <li className="flex items-center gap-1">
                <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                <p className="text-[14px] font-medium">3</p>
              </li>
              <li className="flex items-center gap-1">
                <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                <p className="text-[14px] font-medium">2</p>
              </li>
              <li className="flex items-center gap-1">
                <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                <p className="text-[14px] font-medium">1</p>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col w-4/5 p-5 gap-6 rounded-md border border-gray-200">
            <p className="text-md font-semibold font-comfortaa">Alex Mthio</p>
            <section className=" flex items-center justify-between">
              <ul className="flex">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
                </li>
              </ul>
              <span className="text-sm text-gray-600">13 Oct 2025</span>
            </section>

            <p className="text-sm text-gray-600 w-5/6 p-2 rounded-md">
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
