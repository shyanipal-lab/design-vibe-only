import { motion, AnimatePresence } from "motion/react";
import { Ghost, Sparkles, LayoutGrid, Gamepad2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SnakeGame from "./SnakeGame";
import { BlockGame } from "./ui/block-game";
import TicTacToe from "./TicTacToe";

export default function Fun() {
  const [activeGame, setActiveGame] = useState<"snake" | "tetris" | "tictactoe">("snake");
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#fun-snake") {
      setActiveGame("snake");
    } else if (hash === "#fun-tetris") {
      setActiveGame("tetris");
    } else if (hash === "#fun-tictactoe") {
      setActiveGame("tictactoe");
    }
  }, [hash]);

  return (
    <section id="fun" className="py-40 bg-white text-zinc-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

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
              className="font-header text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.8]"
            >
              All work <br />
              no <span className="text-brand-primary italic">play</span> <br />
              is <span className="text-zinc-300">boring</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-500 leading-relaxed mb-12 font-medium max-w-md"
            >
              Take a break and play a quick game. Choose between Snake or the classic Block Game. Built with React for a quick mental reset.
            </motion.p>

            <div className="flex flex-col gap-4 mb-12">
              <button
                onClick={() => {
                  setActiveGame("snake");
                  navigate("#fun-snake");
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeGame === "snake" ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" : "border-zinc-100 hover:border-zinc-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeGame === "snake" ? "bg-emerald-500/20 text-emerald-500" : "bg-zinc-50 text-zinc-400"
                }`}>
                  <Ghost className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-zinc-900">Snake Game</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">High Score: 42</p>
                </div>
                {activeGame === "snake" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>

              <button
                onClick={() => {
                  setActiveGame("tetris");
                  navigate("#fun-tetris");
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeGame === "tetris" ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" : "border-zinc-100 hover:border-zinc-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeGame === "tetris" ? "bg-purple-500/20 text-purple-500" : "bg-zinc-50 text-zinc-400"
                }`}>
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-zinc-900">Block Game</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Classic Tetris</p>
                </div>
                {activeGame === "tetris" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>

              <button
                onClick={() => {
                  setActiveGame("tictactoe");
                  navigate("#fun-tictactoe");
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeGame === "tictactoe" ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" : "border-zinc-100 hover:border-zinc-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeGame === "tictactoe" ? "bg-blue-500/20 text-blue-500" : "bg-zinc-50 text-zinc-400"
                }`}>
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-zinc-900">Tic Tac Toe</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Impossible AI</p>
                </div>
                {activeGame === "tictactoe" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-primary border border-zinc-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Ready to play?</p>
                <p className="text-xs text-zinc-400 font-medium tracking-widest uppercase">Select a game to start</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Invisible anchors for game-specific linking - moved here to lead to canvas */}
            <div id="fun-snake" className="absolute -top-20 left-0" />
            <div id="fun-tetris" className="absolute -top-20 left-0" />
            <div id="fun-tictactoe" className="absolute -top-20 left-0" />

            <AnimatePresence mode="wait">
              {activeGame === "snake" ? (
                <motion.div
                  key="snake"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 relative group"
                >
                  <SnakeGame />
                </motion.div>
              ) : activeGame === "tetris" ? (
                <motion.div
                  key="tetris"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 overflow-hidden relative group"
                >
                  <div className="scale-75 origin-top -mt-10 -mb-20">
                    <BlockGame />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="tictactoe"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 relative group"
                >
                  <TicTacToe />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Floating Instructions */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 glass px-6 py-4 rounded-3xl shadow-2xl border border-zinc-100 bg-white/50 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 justify-center">
                    <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">↑</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">←</div>
                    <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">↓</div>
                    <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">→</div>
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
