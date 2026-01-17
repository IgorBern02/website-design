import card1 from "../../assets/images/card1.png";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const Card = ({ product }: { product: Product }) => {
  return (
    <section className="w-full h-80  ">
      <div className="border w-100 h-full flex justify-center items-center rounded-2xl shadow-lg ">
        <img
          src={card1}
          alt="card1"
          className="w-full h-100 scale-105 z-90 mb-25 object-contain"
        />
        {/* <img src={products[0]?.imageUrl} alt={products[0]?.name} /> */}
      </div>
      <div className=" w-100 flex justify-between items-start mt-2">
        <div>
          <h3 className="text-3xl font-bold w-full">{product?.name}</h3>

          <p className="text-xl font-semibold">${product?.price.toFixed(2)}</p>
        </div>
        <button className="w-1/3 flex justify-center items-center border rounded-2xl text-white px-6 py-3 cursor-pointer hover:bg-gray-100 transition font-comfortaa text-base">
          Buy In
        </button>
      </div>
    </section>
  );
};
