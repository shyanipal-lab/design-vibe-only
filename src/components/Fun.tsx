import { motion, AnimatePresence } from "motion/react";
import { Ghost, Sparkles, LayoutGrid, Gamepad2, Wallet } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SnakeGame from "./SnakeGame";
import { BlockGame } from "./ui/block-game";
import TicTacToe from "./TicTacToe";
import DashboardDesktopShowcase from "./DashboardDesktopShowcase";

export default function Fun() {
  const [activeGame, setActiveGame] = useState<"snake" | "tetris" | "tictactoe" | "expense-tracker">("snake");
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#fun-snake") {
      setActiveGame("snake");
    } else if (hash === "#fun-tetris") {
      setActiveGame("tetris");
    } else if (hash === "#fun-tictactoe") {
      setActiveGame("tictactoe");
    } else if (hash === "#fun-expense") {
      setActiveGame("expense-tracker");
    }
  }, [hash]);

  return (
    <section id="fun" className="py-24 md:py-40 bg-white text-zinc-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8"
            >
              <Ghost className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Playground</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-header text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-10 leading-[0.8]"
            >
              All work <br />
              no <span className="text-brand-primary font-accent lowercase">play</span> <br />
              is <span className="text-zinc-300">boring</span>.
            </motion.h2>

            <motion.div
              key={`desc-${activeGame}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 md:mb-12"
            >
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                Take a break and play a quick game. Built with React for a quick mental reset.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 mb-10 md:mb-12">
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

              <button
                onClick={() => {
                  setActiveGame("expense-tracker");
                  navigate("#fun-expense");
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  activeGame === "expense-tracker" ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" : "border-zinc-100 hover:border-zinc-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeGame === "expense-tracker" ? "bg-orange-500/20 text-orange-500" : "bg-zinc-50 text-zinc-400"
                }`}>
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-zinc-900">Split & Grow</p>
                    <span className="text-[8px] font-black bg-brand-primary/10 text-brand-primary px-1.5 py-0.5 rounded-full uppercase tracking-tighter font-accent lowercase">Featured</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Gamified Expense Tracker</p>
                </div>
                {activeGame === "expense-tracker" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-primary border border-zinc-100">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-zinc-900">Ready to play?</p>
                <p className="text-[10px] md:text-xs text-zinc-400 font-medium tracking-widest uppercase">Select a game to start</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-xl mx-auto"
          >
            {/* Invisible anchors for game-specific linking - moved here to lead to canvas */}
            <div id="fun-snake" className="absolute -top-20 left-0" />
            <div id="fun-tetris" className="absolute -top-20 left-0" />
            <div id="fun-tictactoe" className="absolute -top-20 left-0" />
            <div id="fun-expense" className="absolute -top-20 left-0" />

            <AnimatePresence mode="wait">
              {activeGame === "snake" ? (
                <motion.div
                  key="snake"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-4 md:p-8 rounded-[32px] md:rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 relative group"
                >
                  <div className="scale-[0.8] sm:scale-100 origin-center">
                    <SnakeGame />
                  </div>
                </motion.div>
              ) : activeGame === "tetris" ? (
                <motion.div
                  key="tetris"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-4 md:p-8 rounded-[32px] md:rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 overflow-hidden relative group"
                >
                  <div className="scale-[0.6] sm:scale-75 origin-top -mt-10 -mb-20">
                    <BlockGame />
                  </div>
                </motion.div>
              ) : activeGame === "tictactoe" ? (
                <motion.div
                  key="tictactoe"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-4 md:p-8 rounded-[32px] md:rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 relative group"
                >
                  <div className="scale-[0.8] sm:scale-100 origin-center">
                    <TicTacToe />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="expense"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <motion.div
                    key="desktop-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="scale-[0.7] sm:scale-90 md:scale-100 origin-center">
                      <DashboardDesktopShowcase />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Floating Instructions */}
            {activeGame !== "expense-tracker" && (
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass px-4 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 bg-white/50 z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 justify-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">↑</div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">←</div>
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">↓</div>
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">→</div>
                    </div>
                  </div>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Use Arrows</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
