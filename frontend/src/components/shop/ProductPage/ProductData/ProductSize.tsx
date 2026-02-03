import { useState } from "react";

type ProductSizeProps = {
  sizes: string[];
};

export const ProductSize = ({ sizes }: ProductSizeProps) => {
  const [selected, setSelected] = useState<string>(sizes[0]);

  if (!sizes || sizes.length === 0) {
    return <p className="text-sm text-red-500">Tamanhos indisponíveis</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="font-comfortaa text-sm">Select Size</span>
      <ul className="flex items-center gap-3">
        {sizes.map((size) => (
          <li key={size}>
            <button
              onClick={() => setSelected(size)}
              className={`
                w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer text-sm font-medium
                ${
                  selected === size
                    ? "bg-gray-100 text-black" // Estilo selecionado (Imagem 1)
                    : "bg-white text-black border-gray-200 hover:border-black" // Estilo padrão
                }
              `}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
