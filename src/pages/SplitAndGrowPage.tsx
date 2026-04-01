import Footer from "../components/Footer";
import DashboardDesktopShowcase from "../components/DashboardDesktopShowcase";
import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function SplitAndGrowPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 min-h-screen"
    >
      {/* Bottom-Left Back Navigation */}
      <div className="fixed bottom-8 left-8 z-[100]">
        <Link 
          to="/" 
          className="flex items-center gap-3 px-6 py-4 bg-zinc-900 text-white rounded-2xl shadow-2xl hover:scale-105 transition-transform active:scale-95 text-[10px] font-bold uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <main className="relative z-10">
        <div className="py-32 px-6">
          <DashboardDesktopShowcase />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
