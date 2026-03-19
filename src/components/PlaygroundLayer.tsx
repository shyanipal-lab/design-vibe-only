import { motion, AnimatePresence } from "motion/react";
import { MousePointer2, StickyNote, MessageSquare, Image as ImageIcon, Type, Plus, X, Home, User, Briefcase, Ghost, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Note {
  id: number;
  color: string;
  text: string;
  author: string;
  x: number;
  y: number;
}

const COLORS = ["#FFD02F", "#9747FF", "#00C3FF", "#FF708B", "#34A853"];

const HUMOROUS_LABELS = [
  "Click me maybe?",
  "Type here, genius.",
  "Look, don't touch!",
  "Nice work, right?",
  "Game time?",
  "I'm a cursor!",
  "Wait, what's this?",
  "Ooh, shiny!",
  "Don't be shy.",
  "Is it Friday yet?",
  "Pixel perfect, eh?",
  "Design vibe only.",
  "Coder at heart.",
  "Miro who?",
  "Ben Shih was here.",
  "MetaMask vibes.",
  "Draggable fun!",
  "Sticky situation.",
  "Canvas is life.",
  "Portfolio goals.",
];

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Fun", href: "#fun", icon: Ghost },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function PlaygroundLayer() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, color: "#FFD02F", text: "Drag me anywhere!", author: "Shyani", x: 100, y: 300 },
    { id: 2, color: "#9747FF", text: "This site is a canvas.", author: "Design Vibe", x: 800, y: 500 },
  ]);
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorLabel, setCursorLabel] = useState("Hello!");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setCursorLabel("Click me maybe?");
      } else if (target.tagName === 'IMG') {
        setCursorLabel("Look, don't touch!");
      } else if (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') {
        setCursorLabel("Type here, genius.");
      } else if (target.closest('#work')) {
        setCursorLabel("Nice work, right?");
      } else if (target.closest('#fun')) {
        setCursorLabel("Game time?");
      } else if (target.closest('#contact')) {
        setCursorLabel("Let's talk?");
      } else if (target.closest('.miro-grid')) {
        setCursorLabel("Grid life.");
      } else {
        if (Math.random() < 0.01) {
          setCursorLabel(HUMOROUS_LABELS[Math.floor(Math.random() * HUMOROUS_LABELS.length)]);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      text: "New idea...",
      author: "Guest",
      x: window.innerWidth / 2 - 100,
      y: window.scrollY + 200,
    };
    setNotes([...notes, newNote]);
  };

  const removeNote = (id: number) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center gap-2"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <MousePointer2 className="w-6 h-6 text-brand-primary fill-brand-primary" />
        <motion.div 
          key={cursorLabel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap"
        >
          {cursorLabel}
        </motion.div>
      </motion.div>

      <div className="fixed inset-0 pointer-events-none z-[60]" ref={constraintsRef}>
        {/* Navigation Sidebar */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 glass rounded-2xl p-2 flex flex-col gap-2 shadow-2xl pointer-events-auto">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-xl text-zinc-500 hover:text-brand-primary transition-colors flex items-center justify-center group"
            >
              <item.icon className="w-5 h-5" />
              <AnimatePresence>
                {hoveredNav === item.label && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-14 bg-zinc-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
          
          <div className="w-full h-[1px] bg-zinc-100 my-2" />
          
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.9 }}
            onClick={addNote}
            onMouseEnter={() => setHoveredNav("Add Note")}
            onMouseLeave={() => setHoveredNav(null)}
            className="relative p-3 rounded-xl bg-brand-primary text-white shadow-lg shadow-brand-primary/20 flex items-center justify-center"
          >
            <Plus className="w-5 h-5" />
            <AnimatePresence>
              {hoveredNav === "Add Note" && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-14 bg-brand-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap"
                >
                  Add Sticky
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Global Draggable Notes */}
        <AnimatePresence>
          {notes.map((note) => (
            <motion.div
              key={note.id}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.05}
              onDragStart={() => setActiveNote(note.id)}
              onDragEnd={() => setActiveNote(null)}
              initial={{ x: note.x, y: note.y, opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileDrag={{ scale: 1.1, rotate: 0, zIndex: 100 }}
              className="absolute p-4 w-48 aspect-square shadow-2xl cursor-grab active:cursor-grabbing pointer-events-auto group"
              style={{ backgroundColor: note.color, zIndex: activeNote === note.id ? 100 : 50 }}
            >
              <button 
                onClick={() => removeNote(note.id)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-zinc-500" />
              </button>
              
              <div className="flex flex-col h-full justify-between">
                <textarea
                  defaultValue={note.text}
                  className="bg-transparent border-none focus:ring-0 p-0 font-display font-medium text-sm leading-tight text-zinc-900 resize-none h-full"
                  placeholder="Type something..."
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-900/50">
                    — {note.author}
                  </span>
                  <div className="w-4 h-4 rounded-full border border-zinc-900/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-zinc-900/20 rounded-full" />
                  </div>
                </div>
              </div>

              {activeNote === note.id && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-10 -left-10 flex items-center gap-2 pointer-events-none"
                >
                  <MousePointer2 className="w-6 h-6 text-miro-blue fill-miro-blue" />
                  <div className="bg-miro-blue text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                    Editing
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Floating Decorative Cursors */}
        <motion.div
          animate={{ 
            x: [100, 200, 150, 100],
            y: [200, 250, 300, 200]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 flex items-center gap-2 pointer-events-none opacity-40"
        >
          <MousePointer2 className="w-5 h-5 text-brand-secondary fill-brand-secondary" />
          <div className="bg-brand-secondary text-white text-[8px] font-bold px-2 py-1 rounded-full shadow-lg">
            Ben
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            x: [window.innerWidth - 200, window.innerWidth - 300, window.innerWidth - 250, window.innerWidth - 200],
            y: [400, 350, 450, 400]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 flex items-center gap-2 pointer-events-none opacity-40"
        >
          <MousePointer2 className="w-5 h-5 text-miro-blue fill-miro-blue" />
          <div className="bg-miro-blue text-white text-[8px] font-bold px-2 py-1 rounded-full shadow-lg">
            Guest
          </div>
        </motion.div>
      </div>
    </>
  );
}
