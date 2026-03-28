import { motion } from "motion/react";
import Footer from "../components/Footer";
import { ArrowLeft, Sparkles, User, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">About the Designer</span>
              </div>
              <h1 className="font-display text-7xl md:text-9xl font-black uppercase tracking-tighter mb-10 leading-[0.8]">
                Shyani <br />
                <span className="text-brand-primary italic">Pal</span>.
              </h1>
              <p className="text-2xl text-zinc-500 leading-relaxed font-medium mb-12">
                A Product Designer who builds for <span className="text-zinc-900">impact</span>, 
                obsesses over <span className="text-zinc-900">craft</span>, and believes 
                that the best interfaces are the ones that feel <span className="text-zinc-900">invisible</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-[70%] mx-auto lg:ml-auto lg:mr-0"
            >
              <div className="aspect-square rounded-[60px] overflow-hidden bg-zinc-100 border-8 border-white shadow-2xl rotate-3">
                <img 
                  src="https://picsum.photos/seed/shyani/800/800" 
                  alt="Shyani Pal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Floating Cards */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100 max-w-[180px] -rotate-6"
              >
                <User className="w-6 h-6 text-brand-primary mb-3" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Role</p>
                <p className="text-sm font-bold text-zinc-900">Sr. Product Designer</p>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-zinc-900 p-6 rounded-3xl shadow-2xl max-w-[180px] rotate-6"
              >
                <Target className="w-6 h-6 text-brand-primary mb-3" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Focus</p>
                <p className="text-sm font-bold text-white">UX Strategy & High-Fidelity Craft</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "User-First",
                desc: "Every pixel must serve a purpose. If it doesn't help the user, it doesn't belong.",
                icon: Heart
              },
              {
                title: "Business-Driven",
                desc: "Design is a tool for business growth. I bridge the gap between user needs and business goals.",
                icon: Target
              },
              {
                title: "Craft-Obsessed",
                desc: "The details aren't just details; they make the product. I sweat the small stuff.",
                icon: Sparkles
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-zinc-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                  <item.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase mb-4">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
