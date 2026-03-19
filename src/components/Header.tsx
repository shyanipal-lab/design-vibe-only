import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
      isScrolled ? "py-4" : "py-8"
    }`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled ? "glass rounded-full shadow-xl border-zinc-100" : "bg-transparent border-transparent"
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-display text-lg">S</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tighter uppercase">Shyani</span>
        </motion.div>

        <div className="flex items-center gap-10">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg"
          >
            Let's Talk
          </motion.button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-6 right-6 glass rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {["Home", "About", "Fun", "Work", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest py-3 border-b border-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
