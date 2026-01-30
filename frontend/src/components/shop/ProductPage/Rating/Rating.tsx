import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Rating = () => {
  const ArrayRating = [5, 4, 3, 2, 1];
  const totalStars = 5;
  return (
    <>
      <div className="w-full h-full rounded-md text-black flex items-center gap-7">
        <div className="flex  gap-2">
          <p className="text-9xl font-comfortaa">4,5</p>
          <p className="text-gray-400 flex items-end text-2xl">/5</p>
        </div>

        <ul>
          {ArrayRating.map((rating) => (
            <li key={rating} className="flex items-center gap-1">
              <FontAwesomeIcon icon={"star"} className="text-yellow-400" />
              <p className="text-[14px] font-medium">{rating}</p>
              <div className="w-75 ml-5 p-1 rounded-2xl bg-slate-200"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex flex-col w-4/5 p-5 gap-6 rounded-md border border-gray-200">
        <p className="text-md font-semibold font-comfortaa">Alex Mathio</p>
        <section className=" flex items-center justify-between">
          <ul className="flex">
            {[...Array(totalStars)].map((_, index) => (
              <li key={index}>
                <FontAwesomeIcon icon="star" className="text-yellow-400" />
              </li>
            ))}
          </ul>
          <span className="text-sm text-gray-600">13 Oct 2025</span>
        </section>

        <p className="text-sm text-gray-600 w-5/6 p-2 rounded-md">
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};
