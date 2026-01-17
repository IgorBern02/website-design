import { useRef } from "react";
import { useScroll } from "framer-motion";
import { HeroBackgroundText } from "../components/Hero/HeroBackgroundText";
import { HeroModel } from "../components/Hero/HeroModel";
import { HeroDescription } from "../components/Hero/HeroDescription";
import { HeroCard } from "../components/Hero/HeroCard";

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={ref} className="relative h-[200vh] w-full ">
      <div className="sticky top-20 h-screen overflow-hidden">
        <HeroBackgroundText scrollYProgress={scrollYProgress} />
        <HeroModel scrollYProgress={scrollYProgress} />
        <HeroDescription scrollYProgress={scrollYProgress} />
        <HeroCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};
