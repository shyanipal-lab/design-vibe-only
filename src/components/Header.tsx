import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3 shadow-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Shyani.</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "Playground", "About", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-600 hover:text-brand-primary transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-primary/20"
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
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {["Work", "Playground", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium py-2 border-b border-zinc-100"
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
