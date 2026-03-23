import { motion, AnimatePresence } from "motion/react";
import { Ghost, Sparkles, LayoutGrid, Gamepad2 } from "lucide-react";
import { useState, useEffect } from "react";
import SnakeGame from "./SnakeGame";
import { BlockGame } from "./ui/block-game";

export default function Fun() {
  const [activeGame, setActiveGame] = useState<"snake" | "tetris">("snake");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#fun-snake") {
        setActiveGame("snake");
      } else if (hash === "#fun-tetris") {
        setActiveGame("tetris");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="fun" className="py-40 bg-zinc-950 text-white overflow-hidden relative">
      {/* Invisible anchors for game-specific linking */}
      <div id="fun-snake" className="absolute top-0 left-0" />
      <div id="fun-tetris" className="absolute top-0 left-0" />
      <div id="fun-tictactoe" className="absolute top-0 left-0" />

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
              Take a break and play a quick game. Choose between Snake or the classic Block Game. Built with React for a quick mental reset.
            </motion.p>

            <div className="flex flex-col gap-4 mb-12">
              <button
                onClick={() => {
                  setActiveGame("snake");
                  window.history.pushState(null, "", "#fun-snake");
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeGame === "snake" ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeGame === "snake" ? "bg-emerald-500/20 text-emerald-500" : "bg-zinc-900 text-zinc-500"
                }`}>
                  <Ghost className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Snake Game</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">High Score: 42</p>
                </div>
                {activeGame === "snake" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>

              <button
                onClick={() => {
                  setActiveGame("tetris");
                  window.history.pushState(null, "", "#fun-tetris");
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeGame === "tetris" ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeGame === "tetris" ? "bg-purple-500/20 text-purple-500" : "bg-zinc-900 text-zinc-500"
                }`}>
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Block Game</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Classic Tetris</p>
                </div>
                {activeGame === "tetris" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-brand-primary border border-zinc-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Ready to play?</p>
                <p className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Select a game to start</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {activeGame === "snake" ? (
                <motion.div
                  key="snake"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-800/50 bg-zinc-900/50 relative group"
                >
                  <SnakeGame />
                </motion.div>
              ) : (
                <motion.div
                  key="tetris"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-800/50 bg-zinc-900/50 overflow-hidden relative group"
                >
                  <div className="scale-75 origin-top -mt-10 -mb-20">
                    <BlockGame />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Floating Instructions */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass px-6 py-4 rounded-3xl shadow-2xl border border-zinc-800/50 bg-zinc-900/50 z-20"
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
