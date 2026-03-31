import { motion } from "motion/react";
import { ArrowRight, Sparkles, Smartphone, Globe, Layout, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import HoshakshamApp from "./HoshakshamApp";

const CASE_STUDIES = [
  {
    id: "fyle",
    year: "2020",
    title: "Fyle — Bulk Mileage Expense Report",
    subtitle: "Solving for 500+ users filing mileage expenses one painful entry at a time.",
    category: "Fintech • SaaS • Case Study",
    role: "End-to-End Designer",
    impact: "93% reduction in filing time",
    link: "/case-study/fyle",
    featured: true,
    video: "https://storage.googleapis.com/cortex-artifacts/67e00045-397e-4081-897d-6927d780979a/video.mp4",
    color: "bg-zinc-900"
  },
  {
    id: "hoshaksham",
    year: "2024",
    title: "Hoshaksham — Service Management",
    subtitle: "Making admin feel like money for independent service providers.",
    category: "SaaS • 0 → 1 • Case Study",
    role: "Product Designer",
    impact: "0 spreadsheets required",
    link: "/case-study/hoshaksham",
    featured: false,
    component: <HoshakshamApp />,
    color: "bg-zinc-50"
  },
  {
    id: "mercedes",
    year: "2025",
    title: "Mercedes Benz — Internal Tool",
    subtitle: "Streamlining complex workflows and data visualization for engineering teams.",
    category: "Enterprise • Internal Tool",
    role: "Sr. Product Designer",
    impact: "Coming Soon",
    link: "/case-study/mercedes",
    featured: false,
    placeholder: false,
    color: "bg-zinc-50"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-white scroll-mt-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary">Selected Works</span>
            </div>
            <h2 className="font-header text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
              Design stories that <br />
              <span className="text-brand-primary font-accent lowercase">moved the needle</span>.
            </h2>
            <p className="text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
              Every case study is a business problem first. From messy discovery to critical decisions and measurable outcomes.
            </p>
          </motion.div>
        </div>

        {/* Work Grid */}
        <div className="space-y-32">
          {CASE_STUDIES.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <div className={`lg:col-span-7 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className={`relative rounded-[60px] overflow-hidden ${project.color} border border-zinc-100 shadow-sm group cursor-pointer`}>
                  {project.video ? (
                    <div className="aspect-[16/10] p-4">
                      <div className="w-full h-full rounded-[40px] overflow-hidden bg-zinc-800">
                        <video 
                          src={project.video} 
                          autoPlay loop muted playsInline 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  ) : project.component ? (
                    <div className="aspect-[16/10] flex items-center justify-center p-4 md:p-12 bg-zinc-50">
                      <div className="relative w-[240px] h-[480px] bg-zinc-900 rounded-[3rem] p-2 shadow-2xl border-[6px] border-zinc-800 scale-[0.7] sm:scale-90 md:scale-100">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-800 rounded-b-2xl z-20" />
                        <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-zinc-100 relative z-10">
                          {project.component}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[16/10] flex items-center justify-center bg-zinc-50 border-2 border-dashed border-zinc-200">
                      <div className="text-center">
                        <p className="text-zinc-400 font-display font-bold uppercase tracking-widest text-sm italic">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-500" />
                </div>
              </div>

              {/* Info Side */}
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-brand-primary font-bold text-sm">{project.year}</span>
                    <div className="w-8 h-[1px] bg-zinc-200" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{project.category}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-header font-black uppercase tracking-tighter leading-[0.9]">
                    {project.title.split(' — ')[0]} — <br />
                    <span className="text-brand-primary font-accent lowercase">{project.title.split(' — ')[1]}</span>
                  </h3>

                  <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                    {project.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Role</p>
                      <p className="text-sm font-bold text-zinc-900">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Impact</p>
                      <p className="text-sm font-bold text-brand-primary">{project.impact}</p>
                    </div>
                  </div>

                  {!project.placeholder && (
                    <Link 
                      to={project.link}
                      className="group inline-flex items-center gap-4 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary transition-all shadow-xl"
                    >
                      View Case Study
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


