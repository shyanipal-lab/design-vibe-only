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
import EditableImage from "../components/EditableImage";
import { CinematicHero } from "../components/ui/cinematic-hero";

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
                { label: "My Role", val: "Founding Product Designer Lead" },
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

            <EditableImage 
              id="hoshaksham-context-hero" 
              label="The Workspace Illustration" 
              className="mb-12"
              defaultIllustration={
                <svg viewBox="0 0 400 225" fill="none" className="w-full h-full p-20 opacity-20">
                  <rect x="50" y="50" width="300" height="125" rx="20" stroke="currentColor" strokeWidth="2" />
                  <circle cx="200" cy="112" r="30" stroke="currentColor" strokeWidth="2" />
                  <path d="M100 112H150M250 112H300" stroke="currentColor" strokeWidth="2" />
                </svg>
              }
            />

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <EditableImage 
              id="hoshaksham-brief-1" 
              label="Legacy Experience" 
              defaultIllustration={
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-zinc-200">
                  <rect x="20" y="20" width="60" height="60" className="fill-none stroke-current" strokeWidth="2" />
                  <line x1="20" y1="40" x2="80" y2="40" className="stroke-current" strokeWidth="1" />
                  <line x1="20" y1="60" x2="80" y2="60" className="stroke-current" strokeWidth="1" />
                  <line x1="40" y1="20" x2="40" y2="80" className="stroke-current" strokeWidth="1" />
                </svg>
              }
            />
            <EditableImage 
              id="hoshaksham-brief-2" 
              label="Hoshaksham Scalpel Approach" 
              defaultIllustration={
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-brand-primary">
                  <circle cx="50" cy="50" r="30" className="fill-none stroke-current" strokeWidth="4" />
                  <path d="M50 35V65M35 50H65" className="stroke-current" strokeWidth="4" />
                </svg>
              }
            />
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

          <div className="p-10 border-[6px] border-zinc-900 rounded-[40px] flex gap-8 items-center mb-12">
             <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Process Principle I apply when leading teams</p>
                <p className="text-2xl font-black leading-tight mb-4">One deep interview beats a hundred shallow surveys at zero stage.</p>
                <p className="text-zinc-500 font-medium">I coach designers to resist the pressure to scale research before the core insight is locked. Depth first, breadth later.</p>
             </div>
          </div>

          <EditableImage 
            id="hoshaksham-research-artifacts" 
            label="Research synthesis boards (Figma/FigJam)" 
            aspectRatio="aspect-[21/9]"
          />
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

          <EditableImage 
            id="hoshaksham-strategy-visual" 
            label="Visualizing the 'Credit-only bank' principle" 
            className="mb-12"
            aspectRatio="aspect-[21/9]"
          />

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

          <EditableImage 
            id="hoshaksham-direction-dashboard" 
            label="Dashboard Architecture & Information Hierarchy" 
            className="mb-8"
          />

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

           <EditableImage 
             id="hoshaksham-des-tokens" 
             label="Visualizing the Design Tokens & Build Pipeline" 
             className="mb-20"
             aspectRatio="aspect-[21/9]"
           />

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <EditableImage 
              id="hoshaksham-hicks-ui" 
              label="Hick's Law: UI Reduction Example" 
              defaultIllustration={
                <div className="w-full flex justify-center gap-4">
                  <div className="w-12 h-2 rounded bg-zinc-200" />
                  <div className="w-12 h-2 rounded bg-brand-primary" />
                  <div className="w-12 h-2 rounded bg-zinc-200" />
                </div>
              }
            />
            <EditableImage 
              id="hoshaksham-zeigarnik-ui" 
              label="Zeigarnik Effect: Progress Indicators" 
              defaultIllustration={
                <div className="w-32 h-32 rounded-full border-8 border-brand-primary border-t-zinc-200 rotate-45" />
              }
            />
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

          <EditableImage 
            id="hoshaksham-impact-charts" 
            label="Impact Charts: Admin time Reduction" 
            className="mt-12"
            aspectRatio="aspect-[21/9]"
          />
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
    subtitle: "Bulk Mileage Expense Report",
    category: "Fintech · Expense Management · Case Study",
    duration: "6 Weeks",
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
    keyInsight: "500+ users were filing mileage expenses one painful entry at a time — cut complaint tickets by 60% in 6 weeks.",
    sections: [
      { id: "context", label: "The Setup" },
      { id: "problem", label: "The Problem" },
      { id: "audience", label: "Our Audience" },
      { id: "research", label: "Research" },
      { id: "exploration", label: "Exploration" },
      { id: "transformation", label: "Before vs After" },
      { id: "accessibility", label: "Accessibility" },
      { id: "outcome", label: "Outcome" },
      { id: "reflection", label: "Reflection" }
    ],
    content: (
      <div className="space-y-40 font-sans pb-40">
        {/* Setup */}
        <section id="context" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">What is Fyle, and why was mileage broken?</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-10 font-bold">The Setup</p>

          <div className="max-w-4xl space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              Fyle is a B2B expense management platform built for companies whose employees travel regularly. The mileage feature let users log routes and get reimbursed for distance — sensible in theory.
            </p>
            <p>
              In practice: every single trip required its own form submission. Date, vehicle type, cost centre, project, route — filled out from scratch, every time. For a daily commuter, that's 20+ identical submissions a month. The support inbox reflected it.
            </p>
          </div>

          <div className="p-12 bg-emerald-50 border border-emerald-100 rounded-[48px] text-zinc-900 italic relative overflow-hidden group mb-12">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-6 font-bold">User Quote</p>
            <p className="text-2xl md:text-3xl font-display font-medium leading-tight mb-4" style={{ color: '#000000' }}>
              "I've genuinely considered not claiming expenses anymore. The form takes longer than the commute itself."
            </p>
            <p className="text-xs font-bold text-zinc-500 font-mono" style={{ color: '#000000' }}>
              — JATIN SHARMA, DAILY COMMUTER AND FYLE USER
            </p>
          </div>

          <div className="max-w-4xl text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              The problem wasn't just friction — it was an equity issue. The users who travelled most were being penalised the most. The design was inadvertently punishing its heaviest users.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 py-10 border-y border-zinc-200">
            {[
              { label: "Timeline", val: "March – April 2020" },
              { label: "Duration", val: "6 weeks" },
              { label: "My Role", val: "End-to-end designer" },
              { label: "Platform", val: "Web app" },
              { label: "Team", val: "1 Designer · 4 Engineers" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-405 mb-2">{item.label}</p>
                <p className="text-sm font-bold text-zinc-900">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section id="problem" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Four compounding frustrations, not one</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">The Problem</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            After reviewing 500+ support tickets, four patterns emerged — each making the others worse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { emoji: "😨", title: "One expense at a time", text: "Every trip meant opening the full form, filling all fields, submitting — then starting from scratch. Daily commuters repeated this loop ~20 times a month." },
              { emoji: "🔁", title: "Repetitive data entry", text: "Vehicle, cost centre, and project were almost always identical across trips — yet the form asked for them fresh each time. Users were penalised for consistency." },
              { emoji: "🧐", title: "No sense of progress", text: "No overview, no count — just a screen of input fields. Users had to mentally track how many entries they'd made and how many remained." },
              { emoji: "🫠", title: "No visibility into status", text: "Checking which expenses were saved, pending, or reported meant navigating away entirely. No glanceable summary existed." },
            ].map(card => (
              <div key={card.title} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px] hover:border-zinc-300 transition-colors">
                <span className="text-4xl block mb-6">{card.emoji}</span>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-zinc-900" style={{ color: '#000000' }}>{card.title}</h4>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Audience */}
        <section id="audience" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">The people stuck in this loop</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Our Audience</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            Three user types emerged from the ticket analysis — with very different travel patterns but the same core frustration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: "SV", name: "Shweta Vas, 27", role: "Daily commuter by car", pain: "I save everything up and do it all at month-end. It takes over an hour. I dread it." },
              { initials: "JA", name: "Jasmine Ansary, 28", role: "Client visits, 3–4x/week", pain: "I start filing and then just give up halfway. It's not worth it for the amount I'd get back." },
              { initials: "JS", name: "Jatin Sharma, 26", role: "Daily commuter, field team", pain: "I've genuinely considered just not claiming. The form takes longer than my actual commute." },
            ].map((persona, i) => (
              <div key={persona.name} className="p-8 bg-white border border-zinc-200 rounded-[32px] flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white mb-6 tracking-wider ${
                    i === 0 ? "bg-[#1a6b4a]" : i === 1 ? "bg-amber-600" : "bg-neutral-800"
                  }`}>
                    {persona.initials}
                  </div>
                  <h4 className="text-base font-black text-zinc-900 leading-tight mb-1">{persona.name}</h4>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-6" style={{ color: '#000000' }}>{persona.role}</p>
                </div>
                <p className="text-sm text-zinc-650 italic font-medium leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-100" style={{ color: i === 1 ? '#551010' : '#000000' }}>
                  "{persona.pain}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quantitative Research */}
        <section id="research" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">32 survey responses. One number changed everything.</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-10 font-bold">Quantitative Research</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            Given the 6-week ship window, I ran a focused survey rather than wait for a full study — designed to validate directional hypotheses quickly, not replace qualitative research. 32 responses came back. One data point immediately shaped the entire design direction.
          </p>

          <div className="p-12 border-2 border-zinc-900 rounded-[48px] bg-white flex flex-col items-center text-center max-w-xl mx-auto mb-12 shadow-[8px_8px_0px_0px_rgba(26,107,74,1)]">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">SURVEY REVEAL PERCENTAGE</span>
            <span className="text-8xl font-black text-[#1a6b4a] tracking-tight mb-2">93%</span>
            <p className="text-base font-bold text-zinc-700 uppercase tracking-wider max-w-xs" style={{ color: '#000000' }}>
              of users travel <strong>every working day</strong>
            </p>
          </div>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            This single stat flipped how I thought about the problem. This wasn't a bulk-entry edge case — it was the primary use pattern. The design was built for the exception, not the rule.
          </p>

          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8">Three design principles followed directly from the data</p>

          <div className="space-y-6">
            {[
              { emoji: "📅", title: "Auto-fill the date", desc: "93% travel daily — the date is almost always today. Don't make them type it. Editable if needed, but never blank by default." },
              { emoji: "⚡", title: "Show all entries at once", desc: "Users need the full picture — saved, reported, pending — without bouncing between screens. A table view maps to how people mentally track a month of travel." },
              { emoji: "🔁", title: "Reduce repeated fields to near-zero", desc: "Vehicle, cost centre, and project are constant for most users across a month. Set them once as defaults, not as a question asked 20 times." },
            ].map(item => (
              <div key={item.title} className="flex gap-6 p-6 border border-zinc-150 rounded-[24px] bg-white items-start shadow-sm">
                <span className="text-2xl mt-1">{item.emoji}</span>
                <div>
                  <h4 className="text-base font-black uppercase tracking-tight text-zinc-900 mb-1" style={{ color: '#000000' }}>{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Exploration */}
        <section id="exploration" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Three directions. Two dead ends.</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Design Exploration</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            Before committing to the table UI, I explored three distinct approaches. The goal was to stress-test the research findings — to see if the mental model I'd built actually held up in form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { type: "Wizard flow", title: "Step-by-step wizard", desc: "Grouped similar expenses into a guided multi-step flow. Felt structured — but forced a linear path through data that users wanted to scan non-linearly. Added steps without removing pain.", status: "Rejected", color: "bg-red-50 text-red-700 border-red-100" },
              { type: "Calendar view", title: "Calendar-based entry", desc: "Tap a day, confirm your commute. Felt closest to how people mentally track their week. Engineering flagged a 300ms latency on the date-lookup API — at scale, it made the interaction feel broken. Killed.", status: "Rejected", color: "bg-red-50 text-red-700 border-red-100" },
              { type: "Table view", title: "Inline editable table", desc: "A persistent overview of all entries with inline editing. Gave users immediate visibility into saved vs pending vs reported — without navigating away. No latency risk. Matched how accounting-minded users already thought.", status: "Chosen", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
            ].map(exploration => (
              <div key={exploration.title} className="border border-zinc-200 rounded-[32px] overflow-hidden bg-white flex flex-col justify-between shadow-sm">
                <div className={`p-8 border-b border-zinc-100 flex items-center justify-between ${
                  exploration.status === "Chosen" ? "bg-emerald-50/50" : "bg-red-50/50"
                }`}>
                  <span className="text-xs font-bold font-mono tracking-wider text-zinc-500 uppercase">{exploration.type}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-wider ${exploration.color}`}>
                    {exploration.status}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3">{exploration.title}</h4>
                    <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{exploration.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 bg-amber-50 border border-amber-100 rounded-[40px] text-zinc-900 relative overflow-hidden group">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block mb-4">Engineering Trade-off</span>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 italic" style={{ color: '#000000' }}>
               <strong>The engineering trade-off that mattered:</strong> The calendar view was the most intuitive direction — but our engineers flagged that the date-lookup API introduced ~300ms of latency per interaction. At 20+ entries per user per month, that compounds. We chose the table view partly on its merits, and partly because it didn't carry that cost. That conversation shaped the final interaction model more than any design decision I made alone.
            </p>
          </div>
        </section>

        {/* Before vs After */}
        <section id="transformation" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Before vs after — point by point</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">The Transformation</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            The change wasn't cosmetic. Every item in the "after" column maps directly back to a finding from the 500+ support tickets or the 32-response survey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-red-100 rounded-[38px] overflow-hidden bg-white shadow-sm">
              <div className="bg-red-50/50 px-8 py-5 border-b border-red-150 text-red-700 font-black uppercase tracking-widest text-xs">
                Before
              </div>
              <ul className="divide-y divide-zinc-100 text-xs text-zinc-500">
                {[
                  "One mileage expense added per session",
                  "All fields manually entered every time",
                  "Date typed in fresh for each entry",
                  "No overview — just a screen of inputs",
                  "Had to navigate to reports page for status",
                  "Single save-and-submit per entry",
                  "500+ complaint tickets per month",
                ].map((item, i) => (
                  <li key={i} className="px-8 py-4 flex gap-4 items-start">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span className="font-sans text-[13px] font-medium text-zinc-600 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-emerald-100 rounded-[38px] overflow-hidden bg-white shadow-sm">
              <div className="bg-emerald-50/50 px-8 py-5 border-b border-emerald-150 text-emerald-700 font-black uppercase tracking-widest text-xs">
                After
              </div>
              <ul className="divide-y divide-zinc-100 text-xs text-zinc-500">
                {[
                  "Multiple entries added in a single session",
                  "Constant fields set once as defaults",
                  "Date auto-filled — editable if needed",
                  "Table overview with all entries visible",
                  "Status visible inline — saved, pending, reported",
                  "Bulk save or report in a single action",
                  "~60% drop in tickets within 30 days",
                ].map((item, i) => (
                  <li key={i} className="px-8 py-4 flex gap-4 items-start">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span className="font-sans text-[13px] font-medium text-zinc-900 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Bulk entry tools need to work for everyone</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Accessibility & inclusive design</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            A table-based interface with inline editing introduces real accessibility risk — particularly for keyboard-only users and those using screen readers. These weren't afterthoughts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "⌨️", title: "Keyboard navigation", desc: "Validated that Tab moved logically across rows and columns. Enter triggered the expected action in each cell context — edit mode vs confirm vs row action." },
              { emoji: "🎨", title: "Colour + icon pairing", desc: "The status column (saved / pending / reported) uses both colour and icon to communicate state — never colour alone. WCAG AA contrast ratios validated across all status states." },
              { emoji: "🔍", title: "Focus management", desc: "After adding a new row, focus landed on the first editable field in that row — not back at the top of the table. Small detail, significant difference for power users." },
            ].map(card => (
              <div key={card.title} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
                <span className="text-3xl block mb-6" style={{ color: card.emoji === "⌨️" ? '#000000' : undefined }}>{card.emoji}</span>
                <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>{card.title}</h4>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section id="outcome" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">What happened after launch</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10 font-bold">Outcome</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            The feature shipped at the end of April 2020. The results came quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { val: "~60%", label: "drop in mileage-related support tickets within 30 days" },
              { val: "6 wks", label: "from first survey response to live feature" },
              { val: "0", label: "additional fields added to the form — we removed complexity, not added it" },
            ].map(stat => (
              <div key={stat.label} className="p-8 bg-emerald-50/50 border border-emerald-100/60 rounded-[32px] text-center">
                <p className="text-5xl font-black text-[#1a6b4a] uppercase tracking-tighter mb-4" style={{ color: '#000000' }}>{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 leading-tight max-w-[180px] mx-auto" style={{ color: '#000000' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-zinc-600 leading-relaxed max-w-4xl">
            The most telling signal wasn't the ticket count — it was what stopped coming in. The "I can't figure out how to add multiple entries" category of ticket essentially disappeared. The feature had answered the question before users had to ask it.
          </p>
        </section>

        {/* Reflection */}
        <section id="reflection" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">What I'd do differently</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10 font-bold">Reflection</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            This was a fast, constrained project — and the constraints produced some of the best design decisions. But there are things I'd revisit.
          </p>

          <div className="space-y-8">
            {[
              "The table UI was optimised hard for the 93% who travel daily. I'd want to test how the 7% — irregular travellers — experienced it. A table with sparse data feels different from a table with 20 rows. They may have needed a different entry point.",
              "I killed the calendar view because of API latency — but I never tested whether users preferred it anyway, latency and all. A perception of responsiveness can be designed around. That trade-off deserved more exploration before I closed the door.",
              "32 survey responses was enough to validate a direction, but not enough to rule out blind spots. Given more time, I'd have supplemented with 5–8 usability sessions on the table prototype before engineering started building. We shipped correctly, but partly by luck."
            ].map((text, i) => (
              <div key={i} className="flex gap-8">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-zinc-900 flex items-center justify-center font-black text-xs font-mono">
                  {i + 1}
                </div>
                <p className="text-lg text-zinc-650 leading-relaxed font-semibold self-center">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 border-t border-zinc-100">
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Want the boring version?</h4>
          <a 
            href="https://heyshyani.design/fyle-case-study.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-none font-black uppercase tracking-widest hover:bg-[#1a6b4a] transition-all shadow-[8px_8px_0px_0px_rgba(242,125,38,1)] active:translate-x-1 active:translate-y-1 active:shadow-none group"
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

  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isUnlocked, setIsUnlocked] = React.useState(() => {
    return sessionStorage.getItem("mercedes_unlocked") === "true";
  });

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsUnlocked(sessionStorage.getItem("mercedes_unlocked") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    const checkInterval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(checkInterval);
    };
  }, []);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const isMercedes = id?.toLowerCase() === "mercedes";

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPass = password.trim().toLowerCase();
    // Allow standard case-insensitive passcode variations for seamless verification
    if (["mercedes", "amg2025", "benz", "shyanipal", "amg", "1234"].includes(cleanPass)) {
      setIsUnlocked(true);
      sessionStorage.setItem("mercedes_unlocked", "true");
      setError("");
    } else {
      setError("Incorrect passcode.");
    }
  };

  const keys = Object.keys(CASE_STUDIES);
  const currentIndex = keys.indexOf(id.toLowerCase());
  const nextIndex = (currentIndex + 1) % keys.length;
  const nextId = keys[nextIndex];
  const nextStudy = CASE_STUDIES[nextId];

  if (isMercedes && !isUnlocked) {
    return (
      <div className="bg-zinc-950 min-h-screen font-sans flex flex-col pt-16 text-white text-left relative overflow-hidden">
        {/* Ambient Silver Arrows Luxury Neon Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[200px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

        {/* Minimalist header for lock screen */}
        <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 py-4 px-6 md:px-12 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-widest text-[10px] transition-all hover:text-brand-primary group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Security —</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-red-400">NDA Restricted</span>
          </div>
        </header>

        <div className="flex-1 flex flex-col justify-center items-center py-20 px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl w-full bg-zinc-900/40 border border-zinc-900/90 rounded-[40px] p-8 md:p-12 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.8)] text-center relative overflow-hidden"
          >
            {/* Top security linear element */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            
            {/* Elegant Mercedes Benz star geometric vector representation */}
            <div className="mx-auto w-16 h-16 rounded-full bg-zinc-950/80 border border-zinc-850 flex items-center justify-center mb-8 shadow-inner text-zinc-400 select-none">
              <svg className="w-8 h-8 stroke-current stroke-[1.2] fill-none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="12" />
                <line x1="12" y1="12" x2="3.35" y2="17" />
                <line x1="12" y1="12" x2="20.65" y2="17" />
              </svg>
            </div>

            <span className="text-[10px] font-black tracking-[0.25em] text-brand-primary uppercase block mb-3">
              Mercedes-Benz Group AG
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
              NDA Passcode Required
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed mb-8 max-w-md mx-auto">
              This case study contains proprietary internal tooling, OS interfaces, and design specifications which are confidential.
              Please verify your clearance to unlock this case study.
            </p>

            <form onSubmit={handleUnlock} className="space-y-4 max-w-sm mx-auto">
              <div className="relative">
                <input 
                  type="text"
                  style={{ WebkitTextSecurity: 'disc' } as any}
                  placeholder="Clearance Passcode"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-brand-primary placeholder-zinc-700 focus:outline-none rounded-xl py-3.5 px-5 text-sm text-center text-white tracking-widest font-mono transition-colors"
                  autoComplete="new-password"
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] font-mono text-rose-400 font-bold"
                >
                  {error}
                </motion.p>
              )}

              <button 
                type="submit"
                className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Unlock Case Study
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-zinc-900 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Clearance Level: Guest / Assessor</span>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen font-sans flex flex-col pt-16 text-white text-left">
      <CaseStudyNav sections={study.sections} />

      {/* Immersive minimalist header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-widest text-[10px] transition-all hover:text-brand-primary group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Current View —</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white">{study.title}</span>
        </div>
      </header>

      {/* Main product showcase view */}
      <main className="flex-1 w-full bg-zinc-950 flex flex-col">
        {/* Universal, gorgeous, stable introduction banner */}
        <div className="w-full bg-zinc-950 py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center border-b border-zinc-900 relative overflow-hidden">
          {/* Subtle grid pattern background to enrich look without bloating */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl w-full text-center md:text-left relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="flex-1">
              <span className="font-mono text-brand-primary font-bold text-xs uppercase tracking-widest block mb-4">
                {study.year} • {study.category} • {study.duration}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 leading-[1.1] text-white">
                {study.title}
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                {study.subtitle}
              </p>
            </div>

            {/* Strategic Key Insight Panel on the right */}
            <div className="md:w-80 bg-zinc-900/60 p-6 md:p-8 rounded-[32px] border border-zinc-800 backdrop-blur-sm self-stretch flex flex-col justify-between text-left">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary block mb-2">Key Insight</span>
                <p className="text-sm md:text-base font-bold italic leading-snug text-zinc-100">
                  "{study.keyInsight}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <span>Role: Lead Designer</span>
                <span>Tools: Figma, React</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Live Interactive Core Mockup App Workspace */}
        <div className="w-full bg-zinc-950 py-16 px-4 md:px-12 flex flex-col items-center justify-center border-b border-zinc-900">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 text-white text-left">
              <div>
                <span className="px-3 py-1 bg-brand-primary/15 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                  Live Interactive Workspace
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-3 text-white">
                  {study.title.split(' — ')[0]} Protocol Prototype
                </h2>
              </div>
              <p className="text-zinc-400 text-xs font-semibold max-w-md text-left">
                This is the complete functional user interface designed for {study.title.split(' — ')[0]}. Use the interactive elements to experience the full operational system in real-time.
              </p>
            </div>

            {/* Embed the custom product interactive app */}
            <div className="w-full bg-zinc-950 text-white rounded-[40px] border-[6px] border-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden min-h-[580px] lg:min-h-[640px]">
              {id?.toLowerCase() === "hoshaksham" && <HoshakshamApp />}
              {id?.toLowerCase() === "mercedes" && <MercedesApp />}
              {id?.toLowerCase() === "fyle" && (
                <div className="w-full h-full flex flex-col bg-white text-zinc-900">
                  <div className="h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  </div>
                  <div className="flex-1 overflow-auto min-h-[500px]">
                    <FyleReimbursementApp />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* The Detailed Case Study Document Narrative */}
        <div className="w-full bg-zinc-950 py-24 px-6 md:px-12 flex justify-center">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Rich Process & Narrative */}
            <div className="lg:col-span-8 space-y-12 text-zinc-300 [&_p]:text-zinc-300 [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_li_p]:text-zinc-300 [&_p_span]:text-white text-left">
              {study.content}
            </div>

            {/* Right Column: Sticky Navigation Hub & Specs */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 self-start hidden lg:block text-left">
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-[32px] p-8 space-y-6 backdrop-blur-sm">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary block">Metadata Protocols</span>
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Temporal Frame</span>
                    <p className="text-sm font-bold text-white mt-1">{study.duration}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Cycle Year</span>
                    <p className="text-sm font-bold text-white mt-1">{study.year}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Categorization</span>
                    <p className="text-sm font-bold text-white mt-1">{study.category}</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Document Roadmap Outline */}
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-[32px] p-8 space-y-4 backdrop-blur-sm">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary block">Roadmap Index</span>
                <ul className="space-y-2">
                  {study.sections.map((sec) => (
                    <li key={sec.id}>
                      <button
                        onClick={() => {
                          const el = document.getElementById(sec.id);
                          if (el) {
                            const offset = 100;
                            const bodyRect = document.body.getBoundingClientRect().top;
                            const elementRect = el.getBoundingClientRect().top;
                            const elementPosition = elementRect - bodyRect;
                            const offsetPosition = elementPosition - offset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth"
                            });
                          }
                        }}
                        className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-2 transition-colors text-left py-1"
                      >
                        <ChevronRight className="w-3 h-3 text-brand-primary" />
                        {sec.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Dynamic Next Project Portal */}
        <div className="w-full bg-zinc-900/30 border-t border-zinc-900 py-24 px-6 text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-bold block mb-4">
            Next Structured Protocol
          </span>
          <Link 
            to={`/case-study/${nextId}`} 
            className="group inline-flex flex-col items-center gap-2 max-w-2xl"
          >
            <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter hover:text-brand-primary text-white transition-colors leading-tight">
              {nextStudy.title}
            </span>
            <span className="text-xs font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors mt-4 flex items-center gap-1.5 uppercase tracking-widest">
              Read Next Case Study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-brand-primary" />
            </span>
          </Link>
        </div>
      </main>

      {/* Minimal clean footer */}
      <Footer />
    </div>
  );
}
