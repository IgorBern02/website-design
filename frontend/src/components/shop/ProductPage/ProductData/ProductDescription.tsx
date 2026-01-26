type ProductDescriptionProps = {
  description: string;
};

export const ProductDescription = ({
  description,
}: ProductDescriptionProps) => {
  return (
    <div className="w-full">
      <h2 className="font-poppins text-sm font-semibold mb-4">
        Description & Fit
      </h2>
      <p className="font-poppins text-sm font-light leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
};
