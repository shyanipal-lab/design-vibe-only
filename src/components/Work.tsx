import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Sparkles, ArrowRight, Smartphone } from "lucide-react";
import React from "react";
import { Timeline } from "./ui/timeline";
import { Link } from "react-router-dom";

export default function Work() {
  const currentYear = new Date().getFullYear();

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Currently designing an internal tool for <span className="text-brand-primary font-bold">Mercedes Benz</span>. 
            Focusing on streamlining complex workflows and data visualization for engineering teams.
          </p>
          <div className="p-10 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 flex items-center justify-center">
            <p className="text-zinc-400 font-display font-bold uppercase tracking-widest text-sm italic">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Published the <span className="text-brand-primary font-bold">Hoshaksham</span> case study. 
            A comprehensive look at designing for accessibility and empowerment in healthcare.
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Mobile Mockup */}
            <div className="relative w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-zinc-800 shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-100 relative z-10">
                <img 
                  src="https://picsum.photos/seed/hoshaksham-mobile/600/1200" 
                  alt="Hoshaksham Mobile App" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-2xl font-display font-bold mb-4">Accessibility First</h4>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Focused on creating a seamless experience for users with visual and motor impairments. 
                The interface prioritizes high contrast, large touch targets, and voice-guided navigation.
              </p>
              <Link 
                to="/case-study/hoshaksham"
                className="group inline-flex items-center gap-3 bg-zinc-900 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-primary transition-all"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The <span className="text-brand-primary font-bold">Fyle</span> case study. 
            My journey in redesigning the expense management experience for modern enterprises.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Link 
              to="/case-study/fyle"
              className="group relative block rounded-2xl overflow-hidden shadow-xl border border-zinc-100"
            >
              <img
                src="https://picsum.photos/seed/fintech/1200/600"
                alt="Fyle Case Study"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">View Case Study</span>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="work" className="pt-20 bg-white overflow-hidden">
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
              Fyle: <span className="text-brand-primary italic">Expense</span> <br />
              Management <br />
              <span className="text-zinc-200">Redesign</span>.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-medium mb-12">
              Redesigning the expense reporting experience for modern teams. 
              A deep dive into automation, speed, and user delight in fintech.
            </p>
            <Link 
              to="/case-study/fyle"
              className="group inline-flex items-center gap-4 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary transition-all shadow-2xl"
            >
              Read Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
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
                <video 
                  src="https://storage.googleapis.com/cortex-artifacts/67e00045-397e-4081-897d-6927d780979a/video.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
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

      <Timeline data={data} />

      {/* Integrated Footer Content */}
      <div id="contact" className="bg-zinc-950 text-white pt-40 pb-12 relative overflow-hidden rounded-t-[80px]">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="font-display text-6xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
                    Let's talk <br />
                    Building <span className="text-brand-primary italic">something</span> <br />
                    worth getting right?
                  </h2>
                  
                  <p className="text-2xl md:text-3xl text-zinc-400 font-medium max-w-2xl mb-16 leading-relaxed">
                    Looking for <span className="text-white">Senior Product Designer</span> roles, <br />
                    Meaningful problems preferred.
                  </p>

                  <div className="flex flex-wrap gap-6 items-center">
                    <div className="relative group">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:pal.shyani1@gmail.com"
                        className="inline-flex items-center gap-4 bg-white text-black px-10 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                      >
                        Say hello
                        <Mail className="w-5 h-5" />
                      </motion.a>
                      
                      {/* Humorous Floating Text */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="absolute -top-12 left-0 md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-8 whitespace-nowrap"
                      >
                        <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl shadow-2xl">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            Usually replies within 24 hrs. <br />
                            <span className="text-brand-primary">and if it's monday than 30hrs</span>
                          </p>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-zinc-900 border-l border-b border-zinc-800 rotate-45" />
                      </motion.div>
                    </div>

                    <motion.a
                      whileHover={{ x: 10, color: "#037DD6" }}
                      href="#"
                      className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-sm py-4 px-6 group"
                    >
                      View LinkedIn
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-4 lg:pt-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col gap-12"
                >
                  <div className="space-y-6">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {["Home", "About", "Fun", "Work", "Contact"].map((link) => (
                        <a 
                          key={link} 
                          href={`#${link.toLowerCase()}`}
                          className="text-lg font-display font-bold text-zinc-400 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Socials</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: Twitter, href: "#" },
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                          href={social.href}
                          className="w-12 h-12 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all"
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(3,125,214,0.3)]">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <p className="text-zinc-500 font-medium text-sm">
                  © {currentYear} Shyani. Built with passion & precision.
                </p>
              </div>
              
              <div className="flex gap-8">
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


