import card1 from "../../assets/images/card1.png";

export const Shop = () => {
  return (
    <section className="min-h-screen pt-28 px-20  flex flex-col gap-10">
      <h2 className="text-8xl font-black font-roboto ">SHOP</h2>
      <section className="w-full h-80  ">
        <div className="border w-1/3 h-full flex justify-center items-center rounded-2xl shadow-lg gap-6 p-6">
          <img src={card1} alt="card1" className="h-100 scale-100 z-90 mb-20" />
        </div>
        <div>
          <h3 className="text-4xl font-bold">Product Name</h3>
          <p className="text-2xl font-semibold">$99.99</p>
        </div>
      </section>
    </section>
  );
};
