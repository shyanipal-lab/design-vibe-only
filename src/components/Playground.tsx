import { motion, useMotionValue, useTransform } from "motion/react";
import { MousePointer2, StickyNote, MessageSquare, Image as ImageIcon, Type } from "lucide-react";
import { useRef, useState } from "react";

const STICKY_NOTES = [
  { id: 1, color: "#FFD02F", text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", x: 100, y: 100 },
  { id: 2, color: "#9747FF", text: "Good design is as little design as possible.", author: "Dieter Rams", x: 400, y: 200 },
  { id: 3, color: "#00C3FF", text: "The details are not the details. They make the design.", author: "Charles Eames", x: 200, y: 400 },
];

export default function Playground() {
  const constraintsRef = useRef(null);
  const [activeNote, setActiveNote] = useState<number | null>(null);

  return (
    <section id="playground" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Design <span className="text-miro-blue italic">Playground</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 leading-relaxed"
          >
            A space to explore, experiment, and play. Drag the sticky notes 
            around to see my design philosophy in action.
          </motion.p>
        </div>
      </div>

      {/* Miro-style Canvas */}
      <div 
        ref={constraintsRef}
        className="relative w-full h-[600px] miro-grid border-y border-zinc-100 cursor-crosshair overflow-hidden"
      >
        {/* Toolbar */}
        <div className="absolute top-6 left-6 glass rounded-2xl p-2 flex flex-col gap-2 shadow-2xl z-20 pointer-events-auto">
          {[MousePointer2, StickyNote, MessageSquare, ImageIcon, Type].map((Icon, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-colors ${i === 1 ? "bg-miro-blue text-white shadow-lg shadow-miro-blue/20" : "text-zinc-500"}`}
            >
              <Icon className="w-5 h-5" />
            </motion.button>
          ))}
        </div>

        {/* Draggable Sticky Notes */}
        {STICKY_NOTES.map((note) => (
          <motion.div
            key={note.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDragStart={() => setActiveNote(note.id)}
            onDragEnd={() => setActiveNote(null)}
            initial={{ x: note.x, y: note.y, rotate: Math.random() * 10 - 5 }}
            whileDrag={{ scale: 1.1, rotate: 0, zIndex: 50 }}
            className="absolute p-6 w-64 aspect-square shadow-2xl cursor-grab active:cursor-grabbing pointer-events-auto"
            style={{ backgroundColor: note.color, zIndex: activeNote === note.id ? 50 : 10 }}
          >
            <div className="flex flex-col h-full justify-between">
              <p className="font-display font-medium text-lg leading-tight text-zinc-900">
                "{note.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-900/50">
                  — {note.author}
                </span>
                <div className="w-6 h-6 rounded-full border-2 border-zinc-900/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-zinc-900/20 rounded-full" />
                </div>
              </div>
            </div>
            {/* Miro Cursor Mockup */}
            {activeNote === note.id && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -top-10 -left-10 flex items-center gap-2 pointer-events-none"
              >
                <MousePointer2 className="w-6 h-6 text-miro-blue fill-miro-blue" />
                <div className="bg-miro-blue text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                  Shyani
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
          <h1 className="font-display text-[300px] font-bold tracking-tighter leading-none select-none">
            PLAY
          </h1>
        </div>
      </div>
    </section>
  );
}
