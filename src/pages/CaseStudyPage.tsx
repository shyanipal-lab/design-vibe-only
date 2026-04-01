import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Clock, Tag, ChevronRight, Sparkles, ArrowUpRight, Layout, Zap } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import CaseStudyNav from "../components/CaseStudyNav";
import Footer from "../components/Footer";
import HoshakshamApp from "../components/HoshakshamApp";
import FyleWebApp from "../components/FyleWebApp";
import FyleReimbursementApp from "../components/FyleReimbursementApp";

interface Section {
  id: string;
  label: string;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  year: string;
  heroImage?: string;
  heroComponent?: React.ReactNode;
  keyInsight: string;
  sections: Section[];
  content: React.ReactNode;
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  hoshaksham: {
    title: "Hoshaksham",
    subtitle: "Making admin feel like money",
    category: "SaaS · Service Management · 0 → 1",
    duration: "3 Months",
    year: "2024",
    heroComponent: (
      <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-12 overflow-hidden">
        <div className="relative w-[280px] h-[560px] bg-zinc-900 rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-zinc-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-800 rounded-b-2xl z-20" />
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-100 relative z-10">
            <HoshakshamApp />
          </div>
        </div>
      </div>
    ),
    keyInsight: "Money should only ever feel like it's coming in.",
    sections: [
      { id: "story", label: "The Story" },
      { id: "impact", label: "Impact" },
    ],
    content: (
      <div className="space-y-24 font-sans">
        {/* Comic Book Intro */}
        <section id="story" className="scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min">
            
            {/* Panel 1: The Crisis */}
            <div className="lg:col-span-7 border-[6px] border-zinc-900 bg-white p-8 relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '6px 6px' }}></div>
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px] z-10">The Crisis</div>
              <div className="mt-4">
                <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Spreadsheet Hell!</h4>
                <p className="text-lg font-bold text-zinc-600 leading-tight mb-6">
                  Priya is a yoga teacher. She loves teaching, but she was spending 4 hours a month chasing payments on WhatsApp.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">😰</div>
                  <div className="bg-zinc-100 p-4 rounded-2xl rounded-tl-none border-2 border-zinc-900 relative">
                    <p className="text-sm font-bold italic">"I'm a teacher, not an accountant!"</p>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-zinc-100 border-l-2 border-t-2 border-zinc-900 transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: The Insight */}
            <div className="lg:col-span-5 border-[6px] border-zinc-900 bg-brand-primary p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Insight</div>
              <div className="flex flex-col h-full justify-center text-white">
                <div className="text-5xl font-black mb-2 leading-none">EMOTIONAL LOGIC</div>
                <p className="text-xl font-bold leading-none uppercase tracking-tighter mt-2">
                  Over Accounting Logic.
                </p>
                <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <p className="text-sm font-medium">Money should only ever feel like it's <span className="underline decoration-4">COMING IN</span>.</p>
                </div>
              </div>
            </div>

            {/* Panel 3: The Hero Moment */}
            <div className="lg:col-span-12 border-[6px] border-zinc-900 bg-zinc-50 p-12 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-8 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px] z-10">The Solution</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-block bg-yellow-400 text-zinc-900 px-6 py-2 font-black text-3xl uppercase tracking-tighter mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                    CREDIT-ONLY!
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">A bank with no exit.</h4>
                  <p className="text-zinc-600 font-bold leading-relaxed">
                    We built a dashboard that only shows inflows. No red numbers. No "debt" language. Just "Received" and "Expected".
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 animate-bounce">
                    <span className="font-black text-2xl uppercase tracking-tighter -rotate-12 text-zinc-900 text-center">NO SPREAD-SHEETS!</span>
                  </div>
                  <div className="relative w-full max-w-[280px] mx-auto aspect-[9/18] bg-zinc-900 rounded-[3.5rem] p-3 shadow-2xl border-[8px] border-zinc-800 scale-90 md:scale-100">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-800 rounded-b-2xl z-20" />
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-100 relative z-10">
                      <HoshakshamApp />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white p-4 font-black text-xl uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                    ZEN MODE!
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: The Result */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-white p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-8">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Result</div>
              <div className="flex items-center gap-8">
                <div className="text-6xl">🧘</div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Focus Restored</h4>
                  <p className="text-zinc-500 font-bold">Priya spends 0 hours on admin. 100% on yoga.</p>
                </div>
              </div>
            </div>

            {/* Panel 5: The Takeaway */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-zinc-900 p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mt-8 text-white">
              <div className="absolute top-0 left-0 bg-brand-primary text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Lesson</div>
              <p className="text-xl font-bold italic leading-tight mt-4">
                "One deep interview beats a hundred shallow surveys. Emotional logic is the real roadmap."
              </p>
            </div>

          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="scroll-mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y-4 border-zinc-900">
            {[
              { val: "1", label: "deep interview" },
              { val: "0", label: "spreadsheets" },
              { val: "100%", label: "zen restored" },
              { val: "3 mo", label: "to ship" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-black text-brand-primary uppercase tracking-tighter mb-2">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight max-w-[120px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20">
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Want the boring version?</h4>
          <a 
            href="https://heyshyani.design/hoshaksham-case-study.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-none font-black uppercase tracking-widest hover:bg-brand-primary transition-all shadow-[8px_8px_0px_0px_rgba(242,125,38,1)] active:translate-x-1 active:translate-y-1 active:shadow-none group"
          >
            Read Full Case Study
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </section>
      </div>
    )
  },
  fyle: {
    title: "Fyle — Bulk Mileage",
    subtitle: "Expense Report",
    category: "Fintech · Expense Management · Case Study",
    duration: "1 Month",
    year: "2020",
    heroComponent: (
      <div className="w-full h-full bg-white flex flex-col relative">
        <div className="absolute top-12 left-12 z-20 bg-brand-primary text-white p-6 font-black text-4xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] -rotate-3">
          Easy Reimbursement Claim
        </div>
        <div className="h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex-1 overflow-hidden">
          <FyleReimbursementApp />
        </div>
      </div>
    ),
    keyInsight: "Users were filing mileage expenses one painful entry at a time.",
    sections: [
      { id: "story", label: "The Story" },
      { id: "impact", label: "Impact" },
    ],
    content: (
      <div className="space-y-24 font-sans">
        {/* Comic Book Intro */}
        <section id="story" className="scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min">
            
            {/* Panel 1: The Crisis */}
            <div className="lg:col-span-7 border-[6px] border-zinc-900 bg-white p-8 relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '6px 6px' }}></div>
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px] z-10">The Crisis</div>
              <div className="mt-4">
                <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">500+ Support Tickets!</h4>
                <p className="text-lg font-bold text-zinc-600 leading-tight mb-6">
                  The inbox was a battlefield. Users were drowning in forms. Some were literally crying over mileage logs.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">😭</div>
                  <div className="bg-zinc-100 p-4 rounded-2xl rounded-tl-none border-2 border-zinc-900 relative">
                    <p className="text-sm font-bold italic">"I'd rather walk than file another expense!"</p>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-zinc-100 border-l-2 border-t-2 border-zinc-900 transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: The Insight */}
            <div className="lg:col-span-5 border-[6px] border-zinc-900 bg-brand-primary p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Insight</div>
              <div className="flex flex-col h-full justify-center text-white">
                <div className="text-7xl font-black mb-2">93%</div>
                <p className="text-xl font-bold leading-none uppercase tracking-tighter">
                  Travel every single day.
                </p>
                <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <p className="text-sm font-medium">If they travel daily, the date is almost always <span className="underline decoration-4">TODAY</span>.</p>
                </div>
              </div>
            </div>

            {/* Panel 3: The Hero Moment */}
            <div className="lg:col-span-12 border-[6px] border-zinc-900 bg-zinc-50 p-12 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-8 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px] z-10">The Solution</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-block bg-yellow-400 text-zinc-900 px-6 py-2 font-black text-3xl uppercase tracking-tighter mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                    BULK ENTRY!
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">No more one-by-one pain.</h4>
                  <p className="text-zinc-600 font-bold leading-relaxed">
                    We ditched the repetitive forms for a high-speed table. Set your vehicle once. Set your project once. Then just fly through the rows.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 animate-bounce">
                    <span className="font-black text-3xl uppercase tracking-tighter -rotate-12 text-zinc-900">BAM!</span>
                  </div>
                  <div className="relative w-full aspect-video bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
                    <div className="absolute top-4 right-4 z-20 bg-zinc-900 text-white px-3 py-1 font-black uppercase tracking-widest text-[8px] shadow-[2px_2px_0px_0px_rgba(242,125,38,1)]">
                      Easy Reimbursement Claim
                    </div>
                    <div className="h-6 bg-zinc-100 border-b border-zinc-200 flex items-center px-3 gap-1 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-zinc-300" />
                      <div className="w-2 h-2 rounded-full bg-zinc-300" />
                      <div className="w-2 h-2 rounded-full bg-zinc-300" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <FyleReimbursementApp />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white p-4 font-black text-xl uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                    FIXED!
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: The Result */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-white p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-8">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Result</div>
              <div className="flex items-center gap-8">
                <div className="text-6xl">📉</div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Tickets Plummeted</h4>
                  <p className="text-zinc-500 font-bold">The support team finally got their lunch breaks back.</p>
                </div>
              </div>
            </div>

            {/* Panel 5: The Takeaway */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-zinc-900 p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mt-8 text-white">
              <div className="absolute top-0 left-0 bg-brand-primary text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Lesson</div>
              <p className="text-xl font-bold italic leading-tight mt-4">
                "Listen to the patterns in the pain. 500 tickets aren't just complaints — they're a roadmap."
              </p>
            </div>

          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="scroll-mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y-4 border-zinc-900">
            {[
              { val: "500+", label: "tickets resolved" },
              { val: "6 wks", label: "to ship" },
              { val: "93%", label: "daily travelers" },
              { val: "100%", label: "peace restored" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-black text-brand-primary uppercase tracking-tighter mb-2">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight max-w-[120px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20">
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Want the boring version?</h4>
          <a 
            href="https://heyshyani.design/fyle-case-study.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-none font-black uppercase tracking-widest hover:bg-brand-primary transition-all shadow-[8px_8px_0px_0px_rgba(242,125,38,1)] active:translate-x-1 active:translate-y-1 active:shadow-none group"
          >
            Read Full Case Study
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </section>
      </div>
    )
  }
};

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = id ? CASE_STUDIES[id.toLowerCase() as keyof typeof CASE_STUDIES] : null;

  if (!study) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <CaseStudyNav sections={study.sections} />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-6 mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-primary font-bold uppercase tracking-widest text-[10px] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>
            <div className="w-1 h-1 rounded-full bg-zinc-200" />
            <Link 
              to="/" 
              className="text-zinc-400 hover:text-brand-primary font-bold uppercase tracking-widest text-[10px] transition-colors"
            >
              Home
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-brand-primary font-bold text-sm">{study.year}</span>
              <div className="w-12 h-[1px] bg-zinc-200" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{study.category}</span>
            </div>
            
            <h1 className="font-header text-6xl md:text-9xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
              {study.title.split(' — ')[0]} — <br />
              <span className="text-brand-primary font-accent lowercase">{study.title.split(' — ')[1] || study.subtitle}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 mb-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[21/9] rounded-[60px] overflow-hidden bg-zinc-100 shadow-2xl relative"
          >
            {study.heroComponent ? (
              <div className="w-full h-full">
                {study.heroComponent}
              </div>
            ) : (
              <img 
                src={study.heroImage} 
                alt={study.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="pb-40 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {study.content}
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-40 space-y-12">
                <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">Project Details</h4>
                  <div className="space-y-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Duration</p>
                      <p className="font-bold text-zinc-900">{study.duration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Year</p>
                      <p className="font-bold text-zinc-900">{study.year}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Role</p>
                      <p className="font-bold text-zinc-900">Lead Product Designer</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Tools</p>
                      <p className="font-bold text-zinc-900">Figma, Maze, React</p>
                    </div>
                  </div>
                </div>

                <div className="p-10 rounded-[40px] bg-zinc-900 text-white">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-primary font-accent lowercase mb-6">Key Insight</h4>
                  <p className="text-lg font-display font-bold italic leading-tight">
                    {study.keyInsight}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <footer className="bg-zinc-900 text-white py-40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8">Next Project</p>
          {(() => {
            const keys = Object.keys(CASE_STUDIES);
            const currentIndex = keys.indexOf(id?.toLowerCase() || "");
            const nextIndex = (currentIndex + 1) % keys.length;
            const nextKey = keys[nextIndex];
            const nextProject = CASE_STUDIES[nextKey as keyof typeof CASE_STUDIES];
            
            return (
              <Link 
                to={`/case-study/${nextKey}`}
                className="group inline-block"
              >
                <h2 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 group-hover:text-brand-primary transition-colors">
                  {nextProject.title.split(' — ')[0]}
                  <ChevronRight className="inline-block w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-4 transition-transform" />
                </h2>
              </Link>
            );
          })()}
        </div>
      </footer>

      <Footer />
    </div>
  );
}
