import { motion } from "motion/react";
import { ExternalLink, ArrowRight, MousePointer2, Sparkles, Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
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
    y: 150,
    rotate: -2,
    mockup: "mobile"
  },
  {
    id: 2,
    title: "Miro Interactive",
    category: "UX Research",
    image: "https://picsum.photos/seed/miro/800/600",
    description: "Enhancing collaboration tools for remote teams.",
    color: "#FFD02F",
    x: 500,
    y: 50,
    rotate: 3,
    mockup: "desktop"
  },
  {
    id: 3,
    title: "Fintech App",
    category: "Mobile Design",
    image: "https://picsum.photos/seed/fintech/800/600",
    description: "Seamless banking for digital nomads.",
    color: "#F6851B",
    x: 150,
    y: 500,
    rotate: -4,
    mockup: "mobile"
  },
  {
    id: 4,
    title: "E-commerce",
    category: "Visual Design",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    description: "Future of online shopping accessibility.",
    color: "#0500FF",
    x: 600,
    y: 450,
    rotate: 2,
    mockup: "desktop"
  },
];

export default function Work() {
  const constraintsRef = useRef(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <section id="work" className="pt-40 bg-white overflow-hidden">
      {/* Featured Viewpoint Case Study */}
      <div className="container mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Featured Case Study</span>
            </div>
            <h2 className="font-display text-7xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.8]">
              The <span className="text-brand-primary italic">Future</span> <br />
              of Web3 <br />
              <span className="text-zinc-200">Identity</span>.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-medium mb-12">
              A deep dive into how we redesigned MetaMask to be more accessible, 
              secure, and visually stunning for the next billion users.
            </p>
            <button className="group flex items-center gap-4 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary transition-all shadow-2xl">
              Read Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Interactive Mockup Frame */}
            <div className="relative z-10 bg-zinc-900 rounded-[48px] p-4 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.3)] border-[8px] border-zinc-800">
              <div className="aspect-[16/10] rounded-[32px] overflow-hidden bg-zinc-800">
                <img 
                  src="https://picsum.photos/seed/featured/1200/800" 
                  alt="Featured Project" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Mockup Details */}
              <div className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl shadow-2xl border border-zinc-100 max-w-[200px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Platform</p>
                <p className="text-sm font-bold text-zinc-900">Desktop & Mobile Web Application</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 mb-24 pointer-events-none">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Interactive Archive</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-7xl md:text-9xl font-black uppercase tracking-tighter mb-10"
          >
            More <span className="text-brand-primary italic">Work</span>
          </motion.h2>
        </div>
      </div>

      {/* Interactive Case Study Canvas */}
      <div 
        ref={constraintsRef}
        className="relative w-full h-[1000px] border-y border-zinc-50 bg-zinc-50/20 cursor-crosshair mb-40"
      >
        {/* Subtle Grid for Canvas */}
        <div className="absolute inset-0 miro-grid opacity-[0.05] pointer-events-none" />

        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            onDragStart={() => setActiveProject(project.id)}
            onDragEnd={() => setActiveProject(null)}
            initial={{ x: project.x, y: project.y, rotate: project.rotate }}
            whileDrag={{ scale: 1.02, rotate: 0, zIndex: 50 }}
            className={`absolute ${project.mockup === 'mobile' ? 'w-[300px]' : 'w-[450px]'} bg-white rounded-[40px] p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] cursor-grab active:cursor-grabbing pointer-events-auto border border-zinc-100 group`}
            style={{ zIndex: activeProject === project.id ? 50 : 10 }}
          >
            <div className={`relative ${project.mockup === 'mobile' ? 'aspect-[9/16]' : 'aspect-[16/10]'} rounded-[32px] overflow-hidden mb-6 bg-zinc-100`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ExternalLink className="w-6 h-6 text-brand-primary" />
                </div>
              </div>
            </div>
            
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-primary">
                  {project.category}
                </span>
                <div className="w-1 h-1 bg-zinc-200 rounded-full" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                  2024
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <button className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-zinc-900 group/btn">
                View Project
                <div className="w-6 h-6 rounded-full border border-zinc-100 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:border-brand-primary group-hover/btn:text-white transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            </div>

            {activeProject === project.id && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -top-12 -left-4 flex items-center gap-2 pointer-events-none"
              >
                <MousePointer2 className="w-6 h-6 text-brand-primary fill-brand-primary" />
                <div className="bg-brand-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl">
                  Moving {project.title}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Integrated Footer Content */}
      <div id="contact" className="bg-zinc-950 text-white pt-32 pb-12 relative overflow-hidden rounded-t-[80px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-6xl md:text-8xl font-bold mb-10 leading-tight"
              >
                Let's build <br />
                <span className="text-brand-primary italic">something</span> <br />
                extraordinary.
              </motion.h2>
              
              <div className="flex flex-col gap-6 mb-12">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:pal.shyani1@gmail.com"
                  className="group flex items-center justify-between text-2xl md:text-4xl font-display font-medium border-b border-zinc-800 pb-6 hover:text-brand-primary transition-colors"
                >
                  pal.shyani1@gmail.com
                  <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
                </motion.a>
                <div className="flex gap-6">
                  {[
                    { icon: Twitter, href: "#" },
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Mail, href: "mailto:pal.shyani1@gmail.com" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, color: "#037DD6" }}
                      href={social.href}
                      className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="glass p-10 rounded-[40px] border border-zinc-800/50 bg-zinc-900/50">
                <h3 className="text-3xl font-display font-bold mb-6">Quick Links</h3>
                <div className="grid grid-cols-2 gap-6">
                  {["Home", "About", "Fun", "Work", "Contact"].map((link) => (
                    <a 
                      key={link} 
                      href={`#${link.toLowerCase()}`}
                      className="text-zinc-400 hover:text-brand-primary transition-colors font-bold uppercase tracking-widest text-[10px]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className="glass p-10 rounded-[40px] border border-zinc-800/50 bg-zinc-900/50">
                <h3 className="text-3xl font-display font-bold mb-6">Location</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Based in Asia, working globally. <br />
                  Available for freelance & full-time roles.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <p className="text-zinc-500 font-medium">
                © {currentYear} Shyani. Built with passion & precision.
              </p>
            </div>
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


