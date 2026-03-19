import { motion } from "motion/react";
import { MousePointer2, StickyNote, MessageSquare, Image as ImageIcon, Type, Sparkles, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const constraintsRef = useRef(null);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Miro-style Canvas Background - Simplified */}
      <div 
        ref={constraintsRef}
        className="absolute inset-0 miro-grid pointer-events-none opacity-40"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/80 backdrop-blur-sm border border-zinc-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-brand-secondary" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Product Designer @ Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-druk text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
            >
              Design <span className="text-brand-primary">vibe</span> <br />
              only <span className="text-brand-secondary">coder</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-500 max-w-lg mb-10 leading-relaxed font-medium"
            >
              Transforming complex problems into playful, high-impact digital 
              products. Inspired by MetaMask, built like Miro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-brand-primary/20 flex items-center gap-2"
              >
                Explore Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Clean Minimal Visual (Miro Toolbar & Interactive Element) */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Floating Toolbar */}
              <div className="absolute top-0 left-0 glass rounded-2xl p-3 flex flex-col gap-3 shadow-2xl z-20">
                {[MousePointer2, StickyNote, MessageSquare, ImageIcon, Type].map((Icon, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl ${i === 0 ? "bg-miro-blue text-white shadow-lg shadow-miro-blue/20" : "text-zinc-400"}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>

              {/* Minimal Abstract Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 50% 60% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="w-64 h-64 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 blur-2xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 border-2 border-brand-primary rounded-[32px] flex items-center justify-center relative bg-white shadow-2xl"
                >
                  <div className="w-12 h-12 bg-brand-secondary rounded-xl" />
                  {/* Cursor Mockup */}
                  <div className="absolute -bottom-4 -right-4 flex items-center gap-2">
                    <MousePointer2 className="w-6 h-6 text-miro-blue fill-miro-blue" />
                    <div className="bg-miro-blue text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                      Shyani
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


