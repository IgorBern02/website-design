export const ProductImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className=" rounded-2xl w-2/4 flex items-center justify-center shadow-lg shadow-gray-500 ">
      <img src={imageUrl} alt={name} className="h-full object-cover" />
    </div>
  );
};
