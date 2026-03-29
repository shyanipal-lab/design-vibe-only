import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Sparkles, ArrowRight, Smartphone } from "lucide-react";
import React from "react";
import { Timeline } from "./ui/timeline";
import { Link } from "react-router-dom";

import HoshakshamApp from "./HoshakshamApp";

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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 uppercase tracking-widest">
            SaaS · Service Management · 0 → 1
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Mobile Mockup */}
            <div className="relative w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-zinc-800 shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-100 relative z-10">
                <HoshakshamApp />
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">Making admin feel <br /><span className="text-brand-primary italic">like money</span></h4>
              <p className="text-zinc-500 mb-8 leading-relaxed text-lg">
                Priya is a yoga teacher. She loves teaching. She hates spreadsheets. She was spending more time chasing payments than leading classes. We built her a way out.
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
  ];

  return (
    <section id="work" className="pt-20 bg-white overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-header text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Design stories that <br />
            <span className="text-brand-primary italic">moved the needle</span>.
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed font-medium">
            Every case study is a business problem first. From messy process to discovery, critical decisions, measurable outcomes or new lessons to learn.
          </p>
        </motion.div>
      </div>

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
            <h2 className="font-header text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              Fyle — <br />
              <span className="text-brand-primary italic">Bulk Mileage</span> <br />
              <span className="text-zinc-300 text-3xl md:text-5xl lg:text-6xl">Expense Report</span>.
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-xl font-medium mb-12">
              FINTECH • EXPENSE MANAGEMENT • CASE STUDY <br />
              500+ users were filing mileage expenses one painful entry at a time. Some were crying. Some had switched to spreadsheets. I fixed it in 6 weeks. Here's how.
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
                  referrerPolicy="no-referrer"
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

      <Timeline data={data.filter(item => item.title !== "2020")} />
    </section>
  );
}


