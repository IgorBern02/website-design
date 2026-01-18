type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const Card = ({ product }: { product: Product }) => {
  return (
    // Adicionamos a classe 'group' para controlar os filhos no hover
    <section className="group relative w-full h-80">
      {/* Moldura de fundo */}
      <div className="border border-gray-200 w-full h-full flex justify-center items-end rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-gray-400 cursor-pointer ">
        {/* A Imagem com efeito 3D/Scale */}
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="
            h-[120%] mb-0 object-contain z-10 
            transition-transform duration-500 ease-out
            group-hover:scale-110 group-hover:-translate-y-4
            drop-shadow-2xl
          "
        />
      </div>

      {/* Textos e Botão */}
      <div className="w-full flex justify-between items-start mt-4">
        <div className="max-w-[65%]">
          <h3 className="text-2xl font-semibold font-poppins leading-tight uppercase break-words">
            {product?.name}
          </h3>
          <p className="text-xl font-bold text-gray-800">
            ${product?.price.toFixed(2)}
          </p>
        </div>

        <button className="border border-black rounded-xl px-5 py-2 text-black font-semibold transition-colors cursor-pointer hover:bg-gray-100">
          Buy In
        </button>
      </div>
    </section>
  );
};
