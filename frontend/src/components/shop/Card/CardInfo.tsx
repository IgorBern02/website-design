type Props = {
  name: string;
  price: number;
};

export const CardInfo = ({ name, price }: Props) => {
  return (
    <div className="max-w-[65%]">
      <h3 className="text-xl font-semibold font-poppins leading-tight uppercase">
        {name}
      </h3>
      <p className="text-lg font-bold text-gray-800">${price.toFixed(2)}</p>
    </div>
  );
};
