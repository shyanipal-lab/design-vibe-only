import { motion } from "motion/react";
import { User, Sparkles, Heart, Coffee, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-40 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-primary/10 rounded-[60px] rotate-6" />
              <div className="absolute inset-0 bg-zinc-900 rounded-[60px] -rotate-3 overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/shyani/800/800" 
                  alt="Shyani" 
                  className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-2xl border border-zinc-100"
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
              I'm a Product Designer with a passion for building digital experiences that are both functional and delightful. My approach combines strategic thinking with a meticulous eye for detail, ensuring every pixel serves a purpose.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Heart, label: "Empathy First", desc: "User-centric approach" },
                { icon: Coffee, label: "Coffee Fueled", desc: "Late night coding" },
                { icon: Code, label: "Clean Code", desc: "Developer friendly" },
                { icon: Sparkles, label: "Visual Craft", desc: "Pixel perfection" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary border border-zinc-100">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{item.label}</p>
                    <p className="text-xs text-zinc-400 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
