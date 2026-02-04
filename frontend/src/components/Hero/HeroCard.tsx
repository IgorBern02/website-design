import { motion, useTransform } from "framer-motion";
import { Link } from "react-router";

export const HeroCard = ({ scrollYProgress }: any) => {
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-20 right-10 w-72 bg-gray-50 p-6 z-20 flex flex-col gap-4"
    >
      <div className="border rounded-2xl p-2 h-auto">
        <h3 className="text-2xl font-bold mb-2">Exclusive Offer</h3>
        <p className="text-sm">
          Get 20% off on your first purchase! Use code: WELCOME20 at checkout.
        </p>
      </div>
      <div className="border rounded-2xl hover:bg-gray-100 duration-300 h-auto flex justify-center items-center">
        <Link
          className="w-full flex items-center justify-center p-1 font-comfortaa font-bold cursor-pointer"
          to="/collection"
        >
          new collection
        </Link>
      </div>
    </motion.div>
  );
};
