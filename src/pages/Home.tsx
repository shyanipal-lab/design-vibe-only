import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Fun from "../components/Fun";
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        <Fun />
        <Work />
      </main>
    </div>
  );
}
