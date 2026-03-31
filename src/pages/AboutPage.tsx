import { motion } from "motion/react";
import Footer from "../components/Footer";
import { ArrowLeft, Sparkles, User, Target, Heart, GraduationCap, Briefcase, BookOpen, Rocket } from "lucide-react";
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
                <span className="text-brand-primary font-accent lowercase">Pal</span>.
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

      {/* Timeline Section */}
      <section className="py-40 bg-zinc-50 rounded-[80px] relative overflow-hidden">
        {/* Playful Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-secondary/5 rounded-full blur-3xl" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-0 opacity-[0.03] pointer-events-none"
        >
          <Sparkles className="w-96 h-96" />
        </motion.div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary">The Journey</span>
              </div>
              <h2 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                Evolution <br />
                <span className="text-zinc-300">2015 — 2026</span>
              </h2>
            </div>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-4">
              Scroll to explore history
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-32 relative">
              {[
                {
                  year: "2015 — 2019",
                  title: "The Foundation",
                  subtitle: "Bachelor of Design",
                  description: "Started the journey with a deep dive into visual communication, user psychology, and the fundamentals of design systems. This is where the obsession with 'invisible' interfaces began.",
                  tags: ["Academic", "Visual Design", "Psychology"],
                  icon: GraduationCap,
                  color: "bg-emerald-500"
                },
                {
                  year: "2019 — 2022",
                  title: "The Real World",
                  subtitle: "Product Designer @ Fintech Startup",
                  description: "Transitioned into the industry, building complex financial tools for thousands of users. Learned the art of balancing business constraints with high-fidelity craft.",
                  tags: ["Professional", "Fintech", "Product Strategy"],
                  icon: Briefcase,
                  color: "bg-blue-500"
                },
                {
                  year: "2022 — 2024",
                  title: "Deep Dive",
                  subtitle: "Master's in HCI",
                  description: "Returned to academia to specialize in Human-Computer Interaction. Focused on AI-driven accessibility and advanced prototyping techniques for emerging technologies.",
                  tags: ["Academic", "HCI", "Research"],
                  icon: BookOpen,
                  color: "bg-purple-500"
                },
                {
                  year: "2024 — 2026",
                  title: "The Present",
                  subtitle: "Senior Product Designer",
                  description: "Leading design initiatives for enterprise-scale SaaS products. Mentoring junior designers and shaping the future of product experiences through strategic design leadership.",
                  tags: ["Leadership", "SaaS", "Design Systems"],
                  icon: Rocket,
                  color: "bg-brand-primary",
                  isCurrent: true
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 lg:pr-20 text-left md:text-right">
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
                      className={`relative p-8 md:p-10 rounded-[40px] bg-white shadow-sm border border-zinc-100 hover:shadow-2xl transition-all group ${
                        i % 2 === 0 ? "" : "md:text-left"
                      }`}
                    >
                      {item.isCurrent && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 bg-brand-primary text-white px-4 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest shadow-lg animate-bounce">
                          Current Status
                        </div>
                      )}

                      <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-mono text-brand-primary text-sm font-bold">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-brand-secondary font-accent text-xl mb-6 lowercase">
                        {item.subtitle}
                      </p>
                      <p className="text-zinc-500 leading-relaxed font-medium mb-8 max-w-md mx-auto md:mx-0">
                        {item.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 hidden md:block">
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className="w-6 h-6 bg-zinc-900 rounded-full border-4 border-white shadow-xl flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </motion.div>
                    {item.isCurrent && (
                      <div className="absolute inset-0 bg-brand-primary/20 rounded-full animate-ping -z-10" />
                    )}
                  </div>

                  {/* Empty Side for Spacing */}
                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
