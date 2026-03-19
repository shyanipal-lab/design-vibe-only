import { motion } from "motion/react";
import { ExternalLink, ArrowRight, MousePointer2 } from "lucide-react";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "MetaMask Redesign",
    category: "Product Design",
    image: "https://picsum.photos/seed/metamask/800/600",
    description: "Reimagining the world's most popular crypto wallet.",
    color: "#037DD6",
    x: 50,
    y: 100,
    rotate: -2,
  },
  {
    id: 2,
    title: "Miro Interactive",
    category: "UX Research",
    image: "https://picsum.photos/seed/miro/800/600",
    description: "Enhancing collaboration tools for remote teams.",
    color: "#FFD02F",
    x: 450,
    y: 50,
    rotate: 3,
  },
  {
    id: 3,
    title: "Fintech App",
    category: "Mobile Design",
    image: "https://picsum.photos/seed/fintech/800/600",
    description: "Seamless banking for digital nomads.",
    color: "#F6851B",
    x: 150,
    y: 450,
    rotate: -4,
  },
  {
    id: 4,
    title: "E-commerce",
    category: "Visual Design",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    description: "Future of online shopping accessibility.",
    color: "#0500FF",
    x: 550,
    y: 400,
    rotate: 2,
  },
];

export default function Work() {
  const constraintsRef = useRef(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 pointer-events-none">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Case <span className="text-brand-primary italic">Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 leading-relaxed"
          >
            Drag the project cards around. Each one is a deep dive into 
            problem-solving and craft.
          </motion.p>
        </div>
      </div>

      {/* Interactive Case Study Canvas */}
      <div 
        ref={constraintsRef}
        className="relative w-full h-[800px] miro-grid border-y border-zinc-200 cursor-crosshair"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            onDragStart={() => setActiveProject(project.id)}
            onDragEnd={() => setActiveProject(null)}
            initial={{ x: project.x, y: project.y, rotate: project.rotate }}
            whileDrag={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute w-[340px] glass rounded-[32px] p-4 shadow-2xl cursor-grab active:cursor-grabbing pointer-events-auto"
            style={{ zIndex: activeProject === project.id ? 50 : 10 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ExternalLink className="w-5 h-5 text-brand-primary" />
                </div>
              </div>
            </div>
            
            <div className="px-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-1 block">
                {project.category}
              </span>
              <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-500 mb-4 leading-snug">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-xs font-bold text-zinc-900 group">
                Read Case Study
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {activeProject === project.id && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -top-10 -left-10 flex items-center gap-2 pointer-events-none"
              >
                <MousePointer2 className="w-6 h-6 text-brand-primary fill-brand-primary" />
                <div className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                  Viewing
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Floating Instructions */}
        <div className="absolute bottom-8 right-8 pointer-events-none">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Interactive Canvas Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

