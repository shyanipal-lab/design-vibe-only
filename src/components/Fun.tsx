import { motion } from "motion/react";
import { Ghost, Sparkles, ArrowRight } from "lucide-react";
import SnakeGame from "./SnakeGame";

export default function Fun() {
  return (
    <section id="fun" className="py-40 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Ghost className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">The Playground</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.8]"
            >
              All work <br />
              no <span className="text-brand-primary italic">play</span> <br />
              is <span className="text-zinc-800">boring</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 leading-relaxed mb-12 font-medium max-w-md"
            >
              Take a break and play a quick game of Snake. It's built with React and Framer Motion, just for fun.
            </motion.p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-brand-primary border border-zinc-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">High Score: 42</p>
                <p className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Can you beat it?</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-800/50 bg-zinc-900/50">
              <SnakeGame />
            </div>
            
            {/* Floating Instructions */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass px-6 py-4 rounded-3xl shadow-2xl border border-zinc-800/50 bg-zinc-900/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 justify-center">
                    <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold">↑</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold">←</div>
                    <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold">↓</div>
                    <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold">→</div>
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Use Arrows</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
