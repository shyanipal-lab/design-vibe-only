import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Clock, Tag, ChevronRight, Sparkles, ArrowUpRight, Layout, Zap, CheckCircle2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import CaseStudyNav from "../components/CaseStudyNav";
import Footer from "../components/Footer";
import HoshakshamApp from "../components/HoshakshamApp";
import FyleWebApp from "../components/FyleWebApp";
import FyleReimbursementApp from "../components/FyleReimbursementApp";
import MercedesApp from "../components/MercedesApp";

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
      <div className="w-full h-full bg-zinc-50 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-4xl aspect-video bg-white rounded-[48px] shadow-2xl border border-zinc-100 overflow-hidden relative">
          <HoshakshamApp />
        </div>
      </div>
    ),
    keyInsight: "Priya doesn't think of herself as running a business. She's a yoga teacher.",
    sections: [
      { id: "context", label: "Context" },
      { id: "brief", label: "The Brief" },
      { id: "research", label: "Research" },
      { id: "strategy", label: "Strategy" },
      { id: "direction", label: "Direction" },
      { id: "handoff", label: "Handoff" },
      { id: "decisions", label: "Decisions" },
      { id: "impact", label: "Impact" },
      { id: "reflections", label: "Reflections" },
    ],
    content: (
      <div className="space-y-40 font-sans pb-40">
        {/* Context & Metadata */}
        <section id="context" className="scroll-mt-32">
          <div className="max-w-4xl">
            <p className="text-lg font-medium text-zinc-600 leading-relaxed mb-12">
              Priya is a yoga teacher. She loves teaching. She hates spreadsheets. We built her a way out — 
              and in doing so, defined what it means to design with both craft and strategic clarity.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {[
                { label: "Type", val: "0 → 1 SaaS" },
                { label: "Platform", val: "Web App" },
                { label: "My Role", val: "End-to-end design lead" },
                { label: "Approach", val: "UCD + Co-design" },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">{item.label}</p>
                  <p className="text-sm font-bold text-zinc-900">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-zinc-900 rounded-[40px] text-zinc-100 relative overflow-hidden mb-12">
              <div className="relative z-10">
                <p className="text-sm font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  A note on framing:
                </p>
                <p className="text-lg leading-relaxed text-zinc-400">
                  This was a 0→1 project where I owned the full design process — from research synthesis and product strategy 
                  through to developer collaboration and shipped quality. The decisions I make here reflect the same 
                  instincts I bring to leading teams: setting standards, aligning cross-functional partners, and 
                  ensuring design intent survives into production.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { val: "1", label: "user interview that built the entire product" },
                { val: "3", label: "core pain points eliminated completely" },
                { val: "0", label: "spreadsheets required, ever again" },
                { val: "∞", label: "yoga classes Priya can now focus on" },
              ].map(item => (
                <div key={item.label} className="bg-zinc-900/5 p-8 rounded-[32px] text-center">
                  <p className="text-4xl font-black text-zinc-900 mb-2">{item.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Brief */}
        <section id="brief" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">The Brief</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Strategic Framing</p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-6 text-xl text-zinc-600 leading-relaxed">
              <p>
                Ho Saksham (Hindi for "become capable") is a SaaS tool for independent service providers — yoga teachers, 
                tutors, trainers, coaches — who need to manage subscribers and collect recurring payments without 
                an accounting degree.
              </p>
              <p>
                No product in the market was solving Priya's exact problem. The closest competitor, Zoho Billing, 
                is built for businesses 10x her scale. When the competition is a sledgehammer, you build a scalpel. 
                That constraint defined our entire product strategy: radical simplicity, emotional alignment, zero admin overhead.
              </p>
            </div>
          </div>

          <div className="mt-12 p-12 bg-zinc-900 rounded-[48px] text-white italic relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-700">
               <Sparkles className="w-32 h-32" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6">Strategic Insight</p>
            <p className="text-3xl md:text-4xl font-display font-bold leading-tight">
              "Priya doesn't think of herself as running a business. She thinks of herself as a yoga teacher 
              who occasionally needs to get paid. The moment her tools made her feel like an accountant — she disengaged."
            </p>
          </div>
        </section>

        {/* Research & Synthesis */}
        <section id="research" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Research & Synthesis</h2>
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">UX Quality Standards</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">How I define the problem before touching a wireframe</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-zinc-900 text-white p-10 rounded-[40px]">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-8 underline decoration-2 underline-offset-8">What Priya Said</p>
              <ul className="space-y-6">
                {["I want to focus on yoga, not paperwork", "I can't remember who has paid", "Why can't this be simpler?", "I hope I don't offend my students asking for money"].map(text => (
                  <li key={text} className="flex gap-4 items-start">
                    <span className="text-brand-primary font-black">→</span>
                    <p className="font-bold text-lg leading-tight">"{text}"</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800 text-white p-10 rounded-[40px]">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-8 underline decoration-2 underline-offset-8">What the Research Revealed</p>
              <ul className="space-y-6">
                {["Mental model: \"collected\" vs \"yet to collect\"", "Her daily check: \"did anyone pay today?\"", "Spreadsheets failed at scale and trust", "WhatsApp was her primary business channel"].map(text => (
                  <li key={text} className="flex gap-4 items-start">
                    <span className="text-brand-primary font-black">→</span>
                    <p className="font-bold text-lg leading-tight">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-10 border-[6px] border-zinc-900 rounded-[40px] flex gap-8 items-center">
             <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Process Principle I apply when leading teams</p>
                <p className="text-2xl font-black leading-tight mb-4">One deep interview beats a hundred shallow surveys at zero stage.</p>
                <p className="text-zinc-500 font-medium">I coach designers to resist the pressure to scale research before the core insight is locked. Depth first, breadth later.</p>
             </div>
          </div>
        </section>

        {/* Design Strategy */}
        <section id="strategy" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Design Strategy</h2>
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">UX Standards & Consistency</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Translating research into product principles</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            The central design constraint I defined: this app would function as a credit-only bank. No expense tracking, 
            no debit language, no red numbers. Money flows in — never out. That single constraint became the 
            product's personality and unified every decision that followed.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {[
              "No \"overdue\" — say \"expected\"",
              "No \"balance\" — say \"received this month\"",
              "No red — permanently green dashboard",
              "No password — OTP only",
              "No email — WhatsApp delivery",
            ].map(tag => (
              <div key={tag} className="px-6 py-3 border-2 border-zinc-200 rounded-full text-zinc-600 font-bold text-sm">
                {tag}
              </div>
            ))}
          </div>

          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest italic">
            These weren't style choices. They were strategic decisions grounded in research, documented as 
            product principles, and applied consistently across every screen.
          </p>
        </section>

        {/* Influencing Product Direction */}
        <section id="direction" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Influencing product direction</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">Strategic Mindset</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">New</span>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Presenting to the CEO & CTO — Filling a strategic vacuum with research</p>

          <div className="text-xl text-zinc-600 leading-relaxed space-y-6 mb-12 max-w-4xl">
            <p>
              When I joined this project, the leadership team — CEO and CTO — had no clear view of what the 
              dashboard should communicate. There was no brief, no metric defined, no North Star for what users 
              should see the moment they opened the app. That ambiguity was the opportunity.
            </p>
            <p>
              Rather than waiting for direction, I brought the research to them. I synthesised Priya's interview data, 
              the competitive gap analysis, and a simple revenue framing into a clear recommendation: the 
              dashboard's hero metric should be total lifetime earnings — not monthly balance, not pending 
              invoices, not a transaction list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div className="p-10 bg-zinc-900 text-white rounded-t-[48px] md:rounded-tr-none md:rounded-l-[48px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6">The Gap I Identified</p>
                <p className="text-lg font-bold leading-tight">
                  The CEO and CTO had no defined dashboard metric. Without a North Star, every screen decision 
                  would have been arbitrary — and the product would have defaulted to a generic finance-tool 
                  layout that conflicted directly with Priya's mental model.
                </p>
             </div>
             <div className="p-10 bg-zinc-50 border border-zinc-100 rounded-b-[48px] md:rounded-bl-none md:rounded-r-[48px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">What I Presented</p>
                <p className="text-sm font-medium text-zinc-600 leading-relaxed mb-4">
                  Three inputs: Priya's exact words from the interview ("I just want to know if money came in today"), 
                  the competitive gap showing no tool was built around inflow-only framing, and a retention argument — 
                  users disengage when a tool makes them feel like they're losing money.
                </p>
             </div>
          </div>

          <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[32px] mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-2">Outcome</span>
            <p className="text-lg font-bold text-zinc-900">
               Leadership aligned on total lifetime earnings as the hero metric and trusted me to own the full 
               dashboard direction from that point forward. The "credit-only bank" principle became the product's 
               defining constraint — not a design preference, but a business decision backed by user data.
            </p>
          </div>

          <div className="p-10 bg-zinc-900 text-white rounded-[40px]">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6">Why this mattered beyond this project</p>
            <p className="text-xl font-bold leading-tight italic">
              "Filling a strategic vacuum is a leadership act. When there's no brief, the designer who brings 
              structured evidence to the table — not opinions, but research synthesis tied to a business outcome 
              — earns the trust to own the direction. That's the dynamic I'd replicate on any team I lead."
            </p>
          </div>
        </section>

        {/* Design System -> Handoff */}
        <section id="handoff" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Design system → FlutterFlow handoff</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">Cross-functional Collaboration</span>
              <span className="px-3 py-1 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">New</span>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Building the bridge between design intent and production code</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            The developer was willing to work from a design system but had no prior experience receiving one or 
            using design tokens in a structured way. Rather than simplifying the handoff to match their current 
            knowledge, I chose to upskill them — building a system they could use independently, not one that 
            required me in the loop for every decision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 items-center">
            {[
              { icon: Sparkles, label: "Figma", desc: "Colour, type & spacing as local styles + variables" },
              { icon: Layout, label: "Design tokens", desc: "Named variables structured for export" },
              { icon: Zap, label: "Copied to FlutterFlow", desc: "Tokens mapped manually into FF theme settings" },
              { icon: CheckCircle2, label: "Production build", desc: "Single source of truth — no guessed hex codes" },
            ].map((step, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-[32px] text-zinc-100 flex flex-col items-center text-center relative group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-sm font-black mb-2">{step.label}</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-tight">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-zinc-300">→</div>}
              </div>
            ))}
          </div>

          <div className="space-y-12 mb-20">
            {[
              { step: "Step 1", title: "Built the system first", desc: "I completed the Figma design system before handing anything over: colour tokens, type scales, spacing values, and component states all defined and named consistently. The developer received a finished system, not a work-in-progress." },
              { step: "Step 2", title: "Walked them through it live", desc: "In a working session, I walked the developer through the token structure — explaining the naming logic, how components mapped to tokens, and which values controlled which visual properties in FlutterFlow. The goal was comprehension, not just compliance." },
              { step: "Step 3", title: "Transferred tokens into FlutterFlow together", desc: "We copied the token values into FlutterFlow's theme settings together — colour by colour, style by style. Working side-by-side meant the developer understood why each value existed, not just where to paste it." },
              { step: "Step 4", title: "Reviewed builds and closed the loop", desc: "As screens were built in FlutterFlow, I reviewed them against Figma — flagging visual drift early before it compounded. Spacing, colour, and component states were corrected in the first round of review, not discovered at launch." },
            ].map(item => (
              <div key={item.step} className="flex gap-8">
                 <div className="shrink-0 w-12 h-12 rounded-full border-2 border-zinc-900 flex items-center justify-center font-black text-[10px] uppercase">
                    {item.step.split(' ')[1]}
                 </div>
                 <div>
                    <h4 className="text-lg font-black uppercase tracking-tighter mb-2">{item.step} — {item.title}</h4>
                    <p className="text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div className="p-10 bg-zinc-50 border border-zinc-100 rounded-t-[48px] md:rounded-tr-none md:rounded-l-[48px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 underline decoration-2 underline-offset-8">Before the system</p>
                <p className="text-sm font-medium text-zinc-600 leading-relaxed italic">
                  Developer would have guessed hex values, used inconsistent spacing, and built components in isolation 
                  — resulting in visual drift that would need expensive rework after launch.
                </p>
             </div>
             <div className="p-10 bg-zinc-900 text-white rounded-b-[48px] md:rounded-bl-none md:rounded-r-[48px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6 underline decoration-2 underline-offset-8">After the system</p>
                <p className="text-sm font-medium text-zinc-400 leading-relaxed italic">
                   Every colour, type size, and spacing value traceable back to a named token. Developer could 
                   make implementation decisions independently without introducing inconsistency.
                </p>
             </div>
          </div>

          <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[32px] mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-2 font-black">Outcome</span>
            <p className="text-lg font-bold text-zinc-900 leading-tight">
               The shipped product matched the Figma designs closely — not because I supervised every screen, 
               but because the developer had been given the right system and the context to use it correctly.
            </p>
          </div>

          <div className="p-10 bg-zinc-900 text-white rounded-[40px]">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6">How I'd scale this on a team of 12</p>
            <p className="text-xl font-bold leading-tight">
               "A well-documented design system removes the need for constant designer oversight. When tokens, 
               components, and principles are shared infrastructure, junior designers and developers make better 
               decisions independently — freeing senior designers to work at a higher level."
            </p>
          </div>
        </section>

        {/* Key Design Decisions */}
        <section id="decisions" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Key design decisions</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">UCD</span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-full">Process</span>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Where psychology met product judgment</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl italic">
            "I applied UX principles as lenses, not rules — and the most important skill was knowing when to 
            deviate. Hick's Law initially pointed toward maximum simplification. But Priya needed organisation, 
            not just reduction. Knowing when to deviate from a principle is the real craft."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-10 bg-zinc-900 text-white rounded-[40px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6">Hick's Law in Action</p>
                <p className="text-lg font-bold leading-tight">
                   Dashboard shows only what's actionable. No mode-switching, no tabs to discover. The Interface 
                   guides Priya — she doesn't have to figure it out.
                </p>
             </div>
             <div className="p-10 bg-zinc-900 text-white rounded-[40px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-6">Zeigarnik Effect in Action</p>
                <p className="text-lg font-bold leading-tight">
                   Unpaid invoices surface prominently. Seeing an incomplete task motivates action — a gentle, 
                   guilt-free nudge to follow up, not a red alert.
                </p>
             </div>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Impact</h2>
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">Continuous Improvement</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">What changed for Priya — and what it signals</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
             <div className="p-10 bg-zinc-900 text-white rounded-t-[48px] md:rounded-tr-none md:rounded-tl-[48px]">
                <p className="text-5xl font-black text-brand-primary mb-2">3–4hrs</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">monthly admin reduced to minutes</p>
             </div>
             <div className="p-10 bg-zinc-900 text-white">
                <p className="text-5xl font-black text-brand-primary mb-2">0</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">missed payment reminders post-launch</p>
             </div>
             <div className="p-10 bg-zinc-900 text-white rounded-b-[48px] md:rounded-bl-none md:rounded-tr-[48px]">
                <div className="text-5xl font-black text-brand-primary mb-2">↓</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">manual errors eliminated via automated tracking</p>
             </div>
          </div>
          <div className="p-10 bg-zinc-900 text-white rounded-[40px] md:max-w-xs">
             <p className="text-5xl font-black text-brand-primary mb-2">1-tap</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">WhatsApp invoice delivery — where students already are</p>
          </div>
        </section>

        {/* Reflections */}
        <section id="reflections" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Reflections</h2>
            <span className="px-3 py-1 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Leadership Mindset</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">What this built-from-scratch actually taught me about leading design</p>

          <div className="space-y-8 mb-20 max-w-4xl">
             {[
               { title: "Fill vacuums with evidence, not opinions", desc: "When leadership has no direction, the designer who arrives with structured research earns the trust to own it. Data from one user interview was enough to define the product's north star — because it was the right data, clearly synthesised." },
               { title: "Standards travel through systems, not supervision", desc: "The token pipeline and walkthrough sessions meant the developer maintained quality independently. On a team of 12, this scales: shared systems enforce standards better than individual review ever could." },
               { title: "Upskill collaborators, don't work around them", desc: "The developer didn't know how to use a design system — so I taught them rather than simplifying the handoff. That investment paid off across the full build cycle, not just one screen." },
               { title: "Depth over breadth in research", desc: "One user, fully understood, beats a hundred survey responses. This principle shapes how I guide junior designers: resist scaling research before the core insight is locked." },
             ].map(item => (
               <div key={item.title} className="flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0 mt-3" />
                  <div>
                     <h4 className="text-xl font-black uppercase tracking-tighter mb-2 leading-none">{item.title}</h4>
                     <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <div className="p-12 bg-zinc-900 rounded-[48px] text-white italic relative overflow-hidden group">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-10">On this project and what comes next</p>
            <p className="text-3xl md:text-4xl font-display font-bold leading-tight mb-10">
              "Sure, the structure might not be perfect. But just like Ho Saksham, we made it work 
              with what we had — and here we are, ready to share the story of how thoughtful 
              design can make life easier, one yoga teacher at a time."
            </p>
            <p className="text-lg text-zinc-400 mb-8 max-w-3xl">
               The same instinct — ship thoughtfully, iterate honestly, document clearly — is what I'd bring to 
               building and leading a UX team.
            </p>
          </div>
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
      <div className="w-full h-full bg-white flex flex-col">
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
  },
  mercedes: {
    title: "Mercedes Benz",
    subtitle: "Internal Tooling & OS",
    category: "Enterprise · Internal Tool · Design System",
    duration: "6 Months",
    year: "2025",
    heroComponent: (
      <div className="w-full h-full bg-zinc-50 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-5xl aspect-video bg-white rounded-[48px] shadow-2xl border border-zinc-100 overflow-hidden relative">
          <MercedesApp />
        </div>
      </div>
    ),
    keyInsight: "Complex data systems need emotional clarity to reduce cognitive load.",
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
                <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Data Overload!</h4>
                <p className="text-lg font-bold text-zinc-600 leading-tight mb-6">
                  Engineers were navigating 150+ languages and thousands of unique IDs across multiple legacy systems. Handover was a nightmare.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">🤯</div>
                  <div className="bg-zinc-100 p-4 rounded-2xl rounded-tl-none border-2 border-zinc-900 relative">
                    <p className="text-sm font-bold italic">"I spend more time finding IDs than writing code!"</p>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-zinc-100 border-l-2 border-t-2 border-zinc-900 transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: The Insight */}
            <div className="lg:col-span-5 border-[6px] border-zinc-900 bg-brand-primary p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Insight</div>
              <div className="flex flex-col h-full justify-center text-white">
                <div className="text-6xl font-black mb-2 leading-none">SYSTEMIC CLARITY</div>
                <p className="text-xl font-bold leading-none uppercase tracking-tighter mt-2">
                  Design for the Handover.
                </p>
                <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <p className="text-sm font-medium">A spec isn't a picture, it's a <span className="underline decoration-4">CONVERSATION</span>.</p>
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
                    SPEC-MAPPING!
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">Bridging the Gap.</h4>
                  <p className="text-zinc-600 font-bold leading-relaxed">
                    We built a unified canvas that maps unique IDs directly to design specs, automates 150 language transitions, and tracks bugs in real-time.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 animate-bounce">
                    <span className="font-black text-2xl uppercase tracking-tighter -rotate-12 text-zinc-900 text-center">EASY HANDOVER!</span>
                  </div>
                  <div className="relative w-full aspect-video bg-white rounded-[40px] shadow-2xl border border-zinc-100 overflow-hidden">
                    <MercedesApp />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white p-4 font-black text-xl uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                    OS READY!
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: The Result */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-white p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-8">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Result</div>
              <div className="flex items-center gap-8">
                <div className="text-6xl">🚀</div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Efficiency Boost</h4>
                  <p className="text-zinc-500 font-bold">Handover time reduced by 40%. Bug tracking became transparent.</p>
                </div>
              </div>
            </div>

            {/* Panel 5: The Takeaway */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-zinc-900 p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mt-8 text-white">
              <div className="absolute top-0 left-0 bg-brand-primary text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Lesson</div>
              <p className="text-xl font-bold italic leading-tight mt-4">
                "Technical complexity is a design challenge. The goal isn't to hide it, but to make it navigable."
              </p>
            </div>

          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="scroll-mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y-4 border-zinc-900">
            {[
              { val: "150", label: "languages" },
              { val: "40%", label: "faster handover" },
              { val: "10k+", label: "unique IDs" },
              { val: "0", label: "lost tickets" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-black text-brand-primary uppercase tracking-tighter mb-2">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight max-w-[120px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
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
