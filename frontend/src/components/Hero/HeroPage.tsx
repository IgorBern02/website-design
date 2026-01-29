import { useScroll } from "framer-motion";
import { HeroBackgroundText } from "./HeroBackgroundText";
import { HeroModel } from "./HeroModel";
import { HeroDescription } from "./HeroDescription";
import { HeroCard } from "./HeroCard";

export const HeroPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative w-full ">
      <div className="h-screen">
        <HeroBackgroundText scrollYProgress={scrollYProgress} />
        <HeroModel scrollYProgress={scrollYProgress} />
        <HeroDescription scrollYProgress={scrollYProgress} />
        <HeroCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};
