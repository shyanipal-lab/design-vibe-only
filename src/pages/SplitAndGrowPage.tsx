import SplitAndGrow from "../components/SplitAndGrow";
import Footer from "../components/Footer";
import ExpenseTrackerShowcase from "../components/ExpenseTrackerShowcase";
import DashboardDesktopShowcase from "../components/DashboardDesktopShowcase";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Monitor, Smartphone, Layout, ChevronLeft, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function SplitAndGrowPage() {
  const [viewMode, setViewMode] = useState<"mobile-mock" | "desktop-mock">("mobile-mock");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 min-h-screen"
    >
      {/* Bottom-Left Collapsible Navigation */}
      <div className="fixed bottom-8 left-8 z-[100] flex flex-col-reverse items-start gap-4">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-zinc-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95 group relative"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Tooltip */}
          {!isExpanded && (
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              View Options
            </div>
          )}
        </button>

        {/* Expanded Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="flex flex-col gap-2 bg-white/80 backdrop-blur-md p-2 rounded-[24px] border border-zinc-200 shadow-2xl min-w-[200px]"
            >
              <Link 
                to="/" 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              
              <div className="h-px bg-zinc-100 mx-2" />

              <button
                onClick={() => {
                  setViewMode("mobile-mock");
                  setIsExpanded(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  viewMode === "mobile-mock" ? "bg-zinc-900 text-white shadow-lg" : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4" />
                  Mobile Mock
                </div>
                {viewMode === "mobile-mock" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>

              <button
                onClick={() => {
                  setViewMode("desktop-mock");
                  setIsExpanded(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  viewMode === "desktop-mock" ? "bg-zinc-900 text-white shadow-lg" : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4" />
                  Desktop Mock
                </div>
                {viewMode === "desktop-mock" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {viewMode === "mobile-mock" ? (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="py-32"
            >
              <ExpenseTrackerShowcase />
            </motion.div>
          ) : (
            <motion.div
              key="desktop"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="py-32 px-6"
            >
              <DashboardDesktopShowcase />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </motion.div>
  );
}
