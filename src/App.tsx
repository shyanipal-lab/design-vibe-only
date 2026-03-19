/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
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

      <Header />
      
      <main>
        <Hero />
        <Work />
      </main>

      <Footer />
    </div>
  );
}


