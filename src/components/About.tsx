import { motion, AnimatePresence } from "motion/react";
import { User, Sparkles, Heart, Coffee, Code, CheckCircle2, Car } from "lucide-react";
import { useState } from "react";
import AboutStories from "./AboutStories";
import { LocationMap } from "./ui/expand-map";

const ABOUT_IMAGES = [
  { id: 1, src: "https://storage.googleapis.com/cortex-artifacts/shyani.jpg", alt: "Shyani Pal" },
  { id: 2, src: "https://picsum.photos/seed/shyani2/600/600", alt: "Design Workshop" },
  { id: 3, src: "https://picsum.photos/seed/shyani3/600/600", alt: "Collaboration" },
  { id: 4, src: "https://picsum.photos/seed/shyani4/600/600", alt: "Pixel Perfection" },
];

export default function About() {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <section id="about" className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className={`relative mx-auto transition-all duration-700 ease-in-out cursor-pointer ${isGrid ? 'w-full h-[600px]' : 'aspect-square max-w-md'}`}
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
                    <div className="absolute inset-0 bg-brand-primary/10 rounded-[60px] rotate-6" />
                    <div className="absolute inset-0 bg-zinc-900 rounded-[60px] -rotate-3 overflow-hidden shadow-2xl">
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
                      className="absolute top-4 -left-4 md:top-8 md:-left-12 z-50 scale-[0.75] md:scale-[1] drop-shadow-2xl"
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
                      className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Experience</p>
                          <p className="text-sm font-bold text-zinc-900">5+ Years</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                      className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Tickets closed</p>
                          <p className="text-sm font-bold text-zinc-900">500+</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                      className="absolute top-1/2 -right-20 glass p-6 rounded-3xl shadow-2xl border border-zinc-100 z-20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
                          <Car className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Cars crashed</p>
                          <p className="text-sm font-bold text-zinc-900">Zero 🏎️</p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Click to expand
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 grid-rows-3 gap-4 w-full h-full"
                  >
                    {ABOUT_IMAGES.map((img, i) => (
                      <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative rounded-3xl overflow-hidden shadow-xl ${i === 0 ? 'row-span-2' : ''}`}
                      >
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">{img.alt}</p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Location Map as Grid Item */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="relative rounded-3xl overflow-hidden shadow-xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LocationMap 
                        location="Bengaluru, India" 
                        coordinates="12.9716° N, 77.5946° E" 
                        className="w-full h-full"
                      />
                    </motion.div>

                    <div className="absolute -top-4 -right-4 bg-zinc-900 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Click to stack
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <User className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">About Me</span>
            </motion.div>

            <AboutStories />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]"
            >
              Designing <span className="text-brand-primary italic">human</span> <br />
              centered <span className="text-zinc-200">products</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-500 leading-relaxed mb-12 font-medium"
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
              <a 
                href="/about"
                className="inline-flex items-center gap-4 bg-zinc-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-primary transition-all shadow-xl group"
              >
                Full Story & Journey
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
