import { useRef } from "react";
import { useScroll } from "framer-motion";
import { HeroBackgroundText } from "./HeroBackgroundText";
import { HeroModel } from "./HeroModel";
import { HeroDescription } from "./HeroDescription";
import { HeroCard } from "./HeroCard";

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={ref} className="relative w-full">
      <div className="sticky top-20 h-screen overflow-hidden">
        <HeroBackgroundText scrollYProgress={scrollYProgress} />
        <HeroModel scrollYProgress={scrollYProgress} />
        <HeroDescription scrollYProgress={scrollYProgress} />
        <HeroCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};
