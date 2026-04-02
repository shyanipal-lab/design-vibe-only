import { motion, AnimatePresence } from "motion/react";
import { User, Sparkles, Heart, Coffee, Code, CheckCircle2, Car } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LocationMap } from "./ui/expand-map";

const ABOUT_IMAGES = [
  { id: 1, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4&style=circle", alt: "Shyani Pal - Caricature" },
  { id: 2, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design&backgroundColor=c0aede&style=circle", alt: "Design Workshop - Caricature" },
  { id: 3, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Collab&backgroundColor=d1d4f9&style=circle", alt: "Collaboration - Caricature" },
  { id: 4, src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pixel&backgroundColor=ffd5dc&style=circle", alt: "Pixel Perfection - Caricature" },
];

export default function About() {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className={`relative mx-auto transition-all duration-700 ease-in-out cursor-pointer ${isGrid ? 'w-full h-[400px] md:h-[600px]' : 'aspect-square max-w-[280px] sm:max-w-md'}`}
              onClick={() => setIsGrid(!isGrid)}
            >
              <AnimatePresence mode="wait">
                {!isGrid ? (
                  <motion.div 
                    key="stack"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full h-full"
                  >
                    <div className="absolute inset-0 bg-brand-primary/10 rounded-[40px] md:rounded-[60px] rotate-6" />
                    <div className="absolute inset-0 bg-zinc-900 rounded-[40px] md:rounded-[60px] -rotate-3 overflow-hidden shadow-2xl">
                      <img 
                        src={ABOUT_IMAGES[0].src} 
                        alt="Shyani" 
                        className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Floating Location Map - Only in stack view */}
                    <motion.div
                      onClick={(e) => e.stopPropagation()}
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [-3, 3, -3]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-12 -left-4 md:top-8 md:-left-12 z-50 scale-[0.6] sm:scale-[0.75] md:scale-[1] drop-shadow-2xl"
                    >
                      <LocationMap 
                        location="Bengaluru, India" 
                        coordinates="12.9716° N, 77.5946° E" 
                      />
                    </motion.div>
                    
                    {/* Floating Badges */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary rounded-lg md:rounded-xl flex items-center justify-center">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Experience</p>
                          <p className="text-xs md:text-sm font-bold text-zinc-900">5+ Years</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                      className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 glass p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Tickets closed</p>
                          <p className="text-xs md:text-sm font-bold text-zinc-900">500+</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                      className="absolute top-1/2 -right-10 md:-right-20 glass p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-900 rounded-lg md:rounded-xl flex items-center justify-center">
                          <Car className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Cars crashed</p>
                          <p className="text-xs md:text-sm font-bold text-zinc-900">Zero 🏎️</p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Click to expand
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 w-full h-full"
                  >
                    {ABOUT_IMAGES.map((img, i) => (
                      <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl ${i === 0 ? 'row-span-2' : ''}`}
                      >
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4 md:p-6">
                          <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">{img.alt}</p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Location Map as Grid Item */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LocationMap 
                        location="Bengaluru, India" 
                        coordinates="12.9716° N, 77.5946° E" 
                        className="w-full h-full"
                      />
                    </motion.div>

                    <div className="absolute -top-4 -right-4 bg-zinc-900 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Click to stack
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8"
            >
              <User className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">About Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-header text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-10 leading-[0.9]"
            >
              Designing <span className="text-brand-primary font-accent lowercase">human</span> <br />
              centered <span className="text-zinc-200">products</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-10 md:mb-12 font-medium max-w-2xl mx-auto lg:mx-0"
            >
              I help teams make better decisions through design. 
              Product designer with 5+ years of experience across mobility, fintech, and consumer apps. 
              Currently at Mercedes-Benz R&D, Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-4 bg-zinc-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-primary transition-all shadow-xl group"
              >
                Full Story & Journey
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
