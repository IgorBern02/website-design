import { motion, useTransform } from "framer-motion";

export const HeroDescription = ({ scrollYProgress }: any) => {
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-10 w-72 bg-white/90 p-6 z-20"
    >
      <p className="font-comfortaa text-xl font-bold">
        Clothes without excess. Only style.
      </p>
      <p className="font-comfortaa text-sm mt-2">
        Modern silhouettes, natural fabrics, and honest design. For those who
        choose simplicity and quality.
      </p>
    </motion.div>
  );
};
