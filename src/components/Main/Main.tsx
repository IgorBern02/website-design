import bg from "../../assets/images/bg.png";

export const Main = () => {
  return (
    <main className="relative flex-1 w-full overflow-hidden ">
      {/* Texto gigante no fundo */}
      <div className="absolute inset-0 flex justify-center mt-20 pointer-events-none">
        <div className="flex gap-50 text-black opacity-90">
          <span className="text-[9rem] font-bold tracking-tight font-poppins">
            Aura
          </span>
          <span className="text-[9rem] font-bold tracking-tight font-poppins -ml-5">
            store
          </span>
        </div>
      </div>

      {/* Pessoa (imagem) */}
      <div className="absolute inset-0 flex justify-center items-end z-10">
        <img
          src={bg}
          alt="model"
          className="
    h-[120%]
    object-contain
    translate-y-[10%]
    scale-[1.15]
    select-none
    pointer-events-none
  "
        />
      </div>

      <div className="absolute bottom-0 w-60 flex flex-col gap-4 p-6 bg-white bg-opacity-90 z-20">
        <p className="font-comfortaa text-xl font-bold">
          Clothes without excess. Only style.
        </p>
        <p className="font-comfortaa text-sm">
          Modern silhouettes, natural fabrics, and honest design. For those who
          choose simplicity and quality.
        </p>
      </div>
    </main>
  );
};
