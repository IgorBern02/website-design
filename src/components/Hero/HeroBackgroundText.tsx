import { motion, useTransform } from "framer-motion";

export const HeroBackgroundText = ({ scrollYProgress }: any) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute inset-0 flex justify-center mt-18 pointer-events-none"
    >
      <div className="flex gap-60 text-black">
        <span className="text-[9rem] font-bold font-poppins">Aura</span>
        <span className="text-[9rem] font-bold font-poppins">store</span>
      </div>
    </motion.div>
  );
};
