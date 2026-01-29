import { motion, useTransform } from "framer-motion";
import bg from "../../assets/images/bg.png";

export const HeroModel = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 0.35], [1.15, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.35], ["0%", "60%"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [0, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <motion.div
      style={{ scale, y, rotateX, opacity }}
      className="absolute inset-0 flex justify-center items-end z-10"
    >
      <img
        src={bg}
        alt="model"
        className="h-[120%] object-contain translate-y-[10%]"
      />
    </motion.div>
  );
};
