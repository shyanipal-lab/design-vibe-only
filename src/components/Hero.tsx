import { motion } from "motion/react";
import { MousePointer2, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 miro-grid opacity-[0.1] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 mb-10"
            >
              <Sparkles className="w-3 h-3 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Product Designer @ Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-7xl md:text-8xl lg:text-[110px] font-black uppercase tracking-tighter leading-[0.85] mb-10"
            >
              Design <span className="text-brand-primary italic">vibe</span> <br />
              only <span className="text-zinc-200">coder</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 max-w-md mb-12 leading-relaxed font-medium"
            >
              Crafting digital experiences that bridge the gap between 
              aesthetics and functionality. Built for the web.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-zinc-900 text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xl hover:bg-brand-primary transition-colors flex items-center gap-3"
              >
                Explore Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-primary flex items-center justify-center text-[10px] font-bold text-white">
                  +12
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Clean Minimal Visual */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative aspect-square max-w-lg mx-auto flex items-center justify-center"
            >
              {/* Abstract Floating Elements */}
              <motion.div
                animate={{ 
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                  rotate: [0, 45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="w-[400px] h-[400px] bg-zinc-50 border border-zinc-100"
              />
              
              <motion.div
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [-5, 5, -5]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-80 bg-white border border-zinc-100 rounded-[40px] shadow-2xl p-8 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                    <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                  </div>
                </div>
                
                <div>
                  <div className="h-2 w-24 bg-zinc-100 rounded-full mb-3" />
                  <div className="h-2 w-16 bg-zinc-50 rounded-full" />
                </div>
                
                <div className="pt-6 border-t border-zinc-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <MousePointer2 className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="h-2 w-20 bg-zinc-100 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Tags */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 right-10 glass px-4 py-2 rounded-full shadow-xl"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Interactive</span>
              </motion.div>
              
              <motion.div
                animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 left-10 glass px-4 py-2 rounded-full shadow-xl"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Minimal</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



