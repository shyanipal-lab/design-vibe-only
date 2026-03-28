import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Clock, Tag, ChevronRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import CaseStudyNav from "../components/CaseStudyNav";

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
  heroImage: string;
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
    heroImage: "https://picsum.photos/seed/hoshaksham-story/1920/1080",
    sections: [
      { id: "impact", label: "Impact" },
      { id: "product", label: "The Product" },
      { id: "priya", label: "Meet Priya" },
      { id: "problems", label: "Problems" },
      { id: "research", label: "Research" },
      { id: "solution", label: "Solution" },
      { id: "screens", label: "Screens" },
      { id: "story", label: "Priya's Story" },
      { id: "lessons", label: "Lessons" },
    ],
    content: (
      <div className="space-y-32">
        {/* Intro Summary */}
        <section className="scroll-mt-32">
          <p className="text-2xl md:text-3xl text-zinc-900 font-medium leading-tight max-w-3xl">
            Priya is a yoga teacher. She loves teaching. She hates spreadsheets. 
            She was spending more time chasing payments than leading classes. We built her a way out.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16 pt-16 border-t border-zinc-100">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Type</p>
              <p className="font-bold text-zinc-900">0 → 1 SaaS</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Platform</p>
              <p className="font-bold text-zinc-900">Web App</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">My Role</p>
              <p className="font-bold text-zinc-900">End-to-End Design</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Research</p>
              <p className="font-bold text-zinc-900">1 User, Deep Dive</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Approach</p>
              <p className="font-bold text-zinc-900">UCD + Co-design</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Live Site</p>
              <a href="https://hosaksham.in" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline flex items-center gap-1">
                hosaksham.in <ArrowLeft className="w-3 h-3 rotate-180" />
              </a>
            </div>
          </div>
        </section>

        {/* Dark Mode Note */}
        <section className="py-8 px-10 bg-zinc-900 rounded-[40px] text-white flex items-center gap-6">
          <div className="text-3xl">🌙</div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-1">Dark Mode</h5>
            <p className="text-zinc-400 text-sm">
              The screens shown below are from the dark mode version of the app — currently in design and yet to be launched. The live app currently runs in light mode.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-zinc-100">
          {[
            { val: "1", label: "user interview that built the whole product" },
            { val: "3", label: "core pain points eliminated completely" },
            { val: "0", label: "spreadsheets required. Ever again." },
            { val: "∞", label: "yoga classes Priya can now actually focus on" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-display font-black text-brand-primary mb-2">{stat.val}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight max-w-[120px] mx-auto">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* The Product */}
        <section id="product" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">The Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h4 className="text-3xl font-display font-bold mb-6 text-zinc-900">What is Hoshaksham?</h4>
              <p className="text-lg text-zinc-600 leading-relaxed space-y-4">
                <span>Ho Saksham (Hindi for "become capable") is a SaaS tool for independent service providers — yoga teachers, tutors, trainers, coaches — who need to manage subscribers and collect recurring payments without an accounting degree.</span>
                <br /><br />
                <span>The core idea: make it feel like money is being stored in the app, not like filling out a form. Built around trust, simplicity, and the reality that most small providers run their businesses from WhatsApp.</span>
              </p>
            </div>
            <div className="aspect-square rounded-[40px] bg-zinc-50 border border-zinc-100 flex items-center justify-center p-12">
               <div className="text-center">
                 <div className="text-6xl mb-4">🏦</div>
                 <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Product Overview</p>
               </div>
            </div>
          </div>
        </section>

        {/* Meet Priya */}
        <section id="priya" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Meet Priya</h3>
          <div className="mb-16">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">Our one user. Our whole north star.</h4>
            <p className="text-lg text-zinc-600 max-w-2xl">
              Priya runs her own yoga studio — 15–20 regular students, monthly plans, and a deep aversion to anything that smells like admin. 
              We built an empathy map to understand her world before touching any wireframes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">What Priya Says</h5>
              <ul className="space-y-4 text-zinc-900 font-medium italic">
                <li>"I want to focus on my yoga classes, not paperwork."</li>
                <li>"It's exhausting to track payments manually every month."</li>
                <li>"I can't remember who has paid or who I need to follow up with."</li>
                <li>"Why can't this process be simpler?"</li>
              </ul>
            </div>
            <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">What Priya Does</h5>
              <ul className="space-y-4 text-zinc-600">
                <li>Uses spreadsheets to track subscriptions but struggles to keep them updated.</li>
                <li>Manually follows up with students via WhatsApp to ask for payments.</li>
                <li>Spends hours creating invoices and ensuring they're sent correctly.</li>
                <li>Occasionally forgets reminders, resulting in late payments.</li>
              </ul>
            </div>
            <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">What Priya Thinks</h5>
              <ul className="space-y-4 text-zinc-600">
                <li>"Am I missing any payments this month?"</li>
                <li>"I hope I don't offend my students by constantly asking for money."</li>
                <li>"This admin work is taking time away from what I love — teaching yoga."</li>
                <li>"If I could automate this, life would be so much easier."</li>
              </ul>
            </div>
            <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">What Priya Feels</h5>
              <ul className="space-y-4 text-zinc-600">
                <li><span className="font-bold text-zinc-900">Frustrated:</span> She dreads repetitive subscription management.</li>
                <li><span className="font-bold text-zinc-900">Overwhelmed:</span> Disorganised tracking makes her feel out of control.</li>
                <li><span className="font-bold text-zinc-900">Anxious:</span> Worrying about missing payments creates stress.</li>
                <li><span className="font-bold text-zinc-900">Hopeful:</span> She believes a solution like Hoshaksham could change everything.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Problems */}
        <section id="problems" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">The Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "💸", title: "Asking for money — the awkward bit", desc: "Tracking who paid and when meant manually checking a spreadsheet, then messaging students one by one. Uncomfortable and error-prone." },
              { icon: "📊", title: "Manual tracking in spreadsheets", desc: "Spreadsheets worked until they didn’t — usually around the third time someone updated the wrong row." },
              { icon: "📄", title: "Invoice generation — manual, monthly, miserable", desc: "Manual invoice generation every month. Time-consuming, inconsistent, and beneath someone running an actual business." },
              { icon: "❓", title: "Uncertainty about who has actually paid", desc: "No single source of truth. Payment status lived across WhatsApp, spreadsheets, and memory." },
            ].map((prob) => (
              <div key={prob.title} className="p-12 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <div className="text-4xl mb-6">{prob.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-zinc-900 leading-tight">{prob.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Core Insight */}
        <section id="research" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Research & Core Insight</h3>
          <div className="mb-16">
            <h4 className="text-4xl font-display font-bold mb-6 text-zinc-900">Money should only ever feel like it's coming in</h4>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl">
              Before any wireframes, we spent time understanding how Priya thinks about money — not accounting logic, emotional logic. 
              What we found shaped every design decision that followed.
            </p>
          </div>

          <div className="p-12 bg-zinc-900 rounded-[40px] text-white mb-16">
            <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">The Central Research Finding</h5>
            <p className="text-2xl md:text-3xl font-display font-bold italic leading-tight mb-8">
              "Priya doesn't think of herself as running a business. She thinks of herself as a yoga teacher who occasionally needs to get paid. The moment her tools made her feel like an accountant — she disengaged."
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              This meant the app couldn't look like a finance tool. It had to feel like a credit-only bank — a place where money flows in, never out. 
              No debit language. No loss framing. No red numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "🧠", title: "Mental Model", subtitle: "She thinks in \"collected\" and \"yet to collect\"", desc: "Unpaid invoices weren’t “debt” to Priya — they were money she hadn't received yet. That reframe changed how we labelled every payment state." },
              { icon: "💬", title: "User Interview", subtitle: "\"I just want to know if money came in today\"", desc: "Her most frequent check-in: \"did anyone pay today?\" Not a balance check. The dashboard was built around this single question." },
              { icon: "🏦", title: "Design Direction", subtitle: "A credit-only bank, not an expense manager", desc: "Most fintech tools show money in and out. Ho Saksham shows only inflows. Outflows live elsewhere. The dashboard is permanently green." },
              { icon: "🎨", title: "Visual Language", subtitle: "No red. No minus signs. No debt framing.", desc: "Unpaid = \"pending\", not \"overdue\". Late = \"still expected\", not \"missed\". Every label keeps Priya in a mindset of earning, not chasing." },
            ].map((item) => (
              <div key={item.title} className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h5 className="text-sm font-bold text-zinc-900">{item.title}</h5>
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Design Metaphor */}
        <section className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">The Design Metaphor</h3>
          <div className="p-12 bg-zinc-50 rounded-[40px] border border-zinc-100">
            <h4 className="text-2xl font-display font-bold mb-6 text-zinc-900">A piggy bank that only has a slot for deposits</h4>
            <p className="text-lg text-zinc-600 mb-12">
              What if this app had no concept of money going out? No expenses, no deductions, no cost tracking. 
              Just: money came in, money is coming in, money will come in. That constraint became the product’s personality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h5 className="text-xs font-bold uppercase tracking-widest text-red-500">❌ What we avoided</h5>
                <ul className="space-y-3 font-mono text-sm text-zinc-400">
                  <li>Overdue payment</li>
                  <li>Invoice outstanding</li>
                  <li>Unpaid</li>
                  <li>Follow up</li>
                  <li>Amount due</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-xs font-bold uppercase tracking-widest text-green-500">✅ What we used instead</h5>
                <ul className="space-y-3 font-mono text-sm text-zinc-900 font-bold">
                  <li>Payment expected</li>
                  <li>Awaiting collection</li>
                  <li>Pending</li>
                  <li>Send reminder</li>
                  <li>Coming your way</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Inspiration */}
        <section className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Inspiration & Competitive Research</h3>
          <div className="mb-16">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">We didn't copy. We borrowed the best bits.</h4>
            <p className="text-lg text-zinc-600">We studied how the best products handle money, onboarding, and payments — then took only what Priya needed.</p>
          </div>

          <div className="space-y-8">
            {[
              { name: "Monzo", title: "Dashboard & Money Flow", took: ["Top-of-screen money summary", "Colour-coded flow: green always means money arriving", "Transaction list as a timeline"], left: ["Spending categories", "Card UI"] },
              { name: "Groww", title: "Onboarding Experience", took: ["Single-focus screens", "Encouraging microcopy", "Visual progress indicator"], left: ["Investment jargon", "Heavy KYC flows"] },
              { name: "Google Pay", title: "OTP Login & Bank Linking", took: ["OTP-first login", "Bank account linking via IFSC", "Direct transfer confirmation"], left: ["P2P payment flow", "Split bill"] },
            ].map((item) => (
              <div key={item.name} className="p-12 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                  <h5 className="text-2xl font-display font-bold text-zinc-900">{item.name} <span className="text-zinc-400 font-normal text-lg ml-2">— {item.title}</span></h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-4">What we took</p>
                    <ul className="space-y-2 text-zinc-600">
                      {item.took.map(t => <li key={t} className="flex gap-2"><span>✓</span> {t}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-4">What we left behind</p>
                    <ul className="space-y-2 text-zinc-400">
                      {item.left.map(l => <li key={l} className="flex gap-2"><span>×</span> {l}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Psychology */}
        <section className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">Design Psychology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hick's Law", subtitle: "Reduce cognitive load", desc: "Fewer choices = faster decisions. The dashboard shows only what’s actionable — the interface guides Priya." },
              { title: "Zeigarnik Effect", subtitle: "Make incomplete tasks visible", desc: "Unpaid invoices surface prominently. Seeing an unfinished task motivates action — a gentle, guilt-free nudge." },
              { title: "Existing Habit", subtitle: "Make it feel like money", desc: "Money stored in the app — not forms, not admin. A familiar mental model that made the whole product feel intuitive." },
            ].map((item) => (
              <div key={item.title} className="p-10 rounded-[40px] bg-zinc-900 text-white">
                <h5 className="text-xl font-display font-bold mb-2">{item.title}</h5>
                <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-6">{item.subtitle}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">The Solution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💳", title: "Payment link via WhatsApp", desc: "Send a payment link directly to students through WhatsApp. Payment lands in Priya's bank account." },
              { icon: "🧾", title: "Automated monthly invoices", desc: "Generate and send invoices automatically. Priya sets it up once. The system handles the rest." },
              { icon: "👥", title: "Subscriber & plan management", desc: "Create plans, add subscribers, track who's active and who's lapsed — all in one clean dashboard." },
              { icon: "📊", title: "Payment overview dashboard", desc: "At a glance: total received, pending, upcoming. Priya knows her money status in three seconds." },
              { icon: "🔔", title: "Smart notifications", desc: "Reminders for unpaid invoices surface on the dashboard. Never forget a follow-up again." },
              { icon: "🏦", title: "Direct bank account connection", desc: "Link a bank account once. All payments route directly. No middleman apps, no manual transfers." },
            ].map((item) => (
              <div key={item.title} className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-lg font-bold mb-3 text-zinc-900">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Screens */}
        <section id="screens" className="scroll-mt-32 space-y-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Design Screens</h3>
          
          {/* Sign up flow */}
          <div>
            <div className="mb-12">
              <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">The sign-up flow — no passwords, no friction</h4>
              <p className="text-lg text-zinc-600 max-w-2xl">Inspired by Google Pay's OTP-first approach and Groww's calm, step-by-step onboarding.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-[9/19] rounded-2xl bg-zinc-100 border border-zinc-200 overflow-hidden relative group">
                  <img src={`https://picsum.photos/seed/hoshaksham-signup-${i}/400/850`} alt="Sign up screen" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-zinc-200">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-900">Screen 0{i}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
               <p className="text-sm text-zinc-700 leading-relaxed italic">
                 <span className="font-bold text-brand-primary not-italic mr-2">💡 Why OTP-only?</span>
                 Priya's target users are small service providers — often not tech-savvy. OTP removes the "forgot password" friction entirely. If you have your phone, you're in.
               </p>
            </div>
          </div>

          {/* Dashboard */}
          <div>
            <div className="mb-12">
              <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">The dashboard — money arriving, always</h4>
              <p className="text-lg text-zinc-600 max-w-2xl">The moment Priya opens the app, she sees one number: how much she received this month. The dashboard is permanently optimistic.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video rounded-[40px] bg-zinc-100 border border-zinc-200 overflow-hidden">
                <img src="https://picsum.photos/seed/hoshaksham-dash/1200/800" alt="Ho Saksham dashboard overview — dark mode — ₹73,990 received this month" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 bg-zinc-900 rounded-[40px] text-white flex flex-col justify-center">
                <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">Why "Received" — not "Balance"?</h5>
                <p className="text-xl font-display font-bold italic leading-tight mb-6">
                  "Balance implies money can go down. 'Received' only ever goes up. This keeps Priya in an earning mindset."
                </p>
                <p className="text-zinc-400 text-sm">The hero number is always income — never a balance. Gradient header signals "earning space."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Priya's Story */}
        <section id="story" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">Priya's Story</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="p-12 rounded-[40px] bg-red-50 border border-red-100">
              <h4 className="text-2xl font-display font-bold mb-8 text-red-900 flex items-center gap-3">😰 Before Hoshaksham</h4>
              <ul className="space-y-4 text-red-700 font-medium">
                <li>• Opens spreadsheet every week to check who's paid</li>
                <li>• Messages students individually asking for payment</li>
                <li>• Manually creates invoices — one by one</li>
                <li>• Forgets to follow up; loses money</li>
                <li>• Spends 3–4 hours/month on admin alone</li>
                <li>• Constantly anxious about missing a payment</li>
              </ul>
            </div>
            <div className="p-12 rounded-[40px] bg-green-50 border border-green-100">
              <h4 className="text-2xl font-display font-bold mb-8 text-green-900 flex items-center gap-3">🧘 After Hoshaksham</h4>
              <ul className="space-y-4 text-green-700 font-medium">
                <li>• Opens dashboard — sees everything at a glance</li>
                <li>• Sends payment link via WhatsApp in two taps</li>
                <li>• Invoices generate and send automatically</li>
                <li>• Notifications remind her of anything pending</li>
                <li>• Admin time reduced to minutes per month</li>
                <li>• Focuses on what she actually loves: teaching yoga</li>
              </ul>
            </div>
          </div>

          <div className="space-y-16">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 text-center">Priya's journey — told in 4 frames</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "The chaos before", desc: "Priya manages multiple WhatsApp groups, scrolls through endless lists, and still can't answer one simple question: who has actually paid me?" },
                { title: "What she's really here for", desc: "Priya runs 3 separate group sessions. Teaching is what she loves — but the payment admin after each session was eating into that joy." },
                { title: "Enter Ho Saksham", desc: "She downloads the app and scans in her first student via QR code. Instant payment link. Easy tracking." },
                { title: "Priya, sorted ✦", desc: "All payments done. Business discoverable. Easy tracking. Priya has star eyes — she's finally free from the spreadsheet." },
              ].map((frame, i) => (
                <div key={frame.title} className="group">
                  <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden mb-6">
                    <img src={`https://picsum.photos/seed/story-frame-${i}/800/450`} alt={frame.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2">Frame 0{i+1}</p>
                  <h5 className="text-lg font-bold text-zinc-900 mb-2">{frame.title}</h5>
                  <p className="text-sm text-zinc-500 leading-relaxed">{frame.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section id="lessons" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">Lessons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "One deep interview beats a hundred shallow surveys", desc: "One user, fully understood. Every decision traced back to something Priya actually said or did. Qualitative depth beats breadth at zero stage." },
              { step: "02", title: "Start small, iterate fast", desc: "Designing for a specific person with a specific frustration creates clarity that designing for an abstract “user type” never does." },
              { step: "03", title: "Apply psychology thoughtfully, not literally", desc: "Hick’s Law initially pointed toward maximum simplification. But Priya needed organisation, not just reduction. Knowing when to deviate from the rule is the real skill." },
              { step: "04", title: "Constraints breed creativity", desc: "Figma’s free tier and no design system shortcuts forced manual consistency and reusable components. A constraint that turned out to be great discipline." },
            ].map((lesson) => (
              <div key={lesson.title} className="p-12 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <p className="text-4xl font-display font-black text-zinc-200 mb-6">{lesson.step}</p>
                <h4 className="text-xl font-bold mb-4 text-zinc-900">{lesson.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{lesson.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Quote */}
        <section className="text-center py-20">
           <p className="text-xl text-zinc-400 italic max-w-2xl mx-auto">
             "Sure, the case study structure might not be perfect. But just like Ho Saksham, we made it work with what we had — and here we are, ready to share the story of how thoughtful design can make life easier, one yoga teacher at a time."
           </p>
           <p className="mt-6 text-sm font-bold uppercase tracking-widest text-zinc-900">— Shyani</p>
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
    heroImage: "https://picsum.photos/seed/fyle-hero/1920/1080",
    sections: [
      { id: "impact", label: "Impact" },
      { id: "setup", label: "The Setup" },
      { id: "problem", label: "The Problem" },
      { id: "audience", label: "Our Audience" },
      { id: "research", label: "Research" },
      { id: "transformation", label: "Transformation" },
      { id: "decisions", label: "Design Decisions" },
      { id: "testing", label: "Testing" },
      { id: "competitive", label: "Competitive" },
      { id: "takeaways", label: "Takeaways" },
    ],
    content: (
      <div className="space-y-32">
        {/* Intro Summary */}
        <section className="scroll-mt-32">
          <p className="text-2xl md:text-3xl text-zinc-900 font-medium leading-tight max-w-3xl">
            500+ users were filing mileage expenses one painful entry at a time. 
            Some were crying. Some had switched to spreadsheets. I fixed it in 6 weeks. Here's how.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16 pt-16 border-t border-zinc-100">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Timeline</p>
              <p className="font-bold text-zinc-900">March–April 2020</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Duration</p>
              <p className="font-bold text-zinc-900">1 Month</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">My Role</p>
              <p className="font-bold text-zinc-900">End-to-End Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Platform</p>
              <p className="font-bold text-zinc-900">Web App</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Team</p>
              <p className="font-bold text-zinc-900">1 Designer · 4+ Eng</p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-zinc-100">
          {[
            { val: "500+", label: "complaint tickets resolved in one month" },
            { val: "6 wks", label: "research to shipped feature" },
            { val: "93%", label: "of users travel daily — the insight that changed everything" },
            { val: "32", label: "survey responses that validated the direction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-display font-black text-brand-primary mb-2">{stat.val}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight max-w-[120px] mx-auto">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* The Setup */}
        <section id="setup" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">The Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h4 className="text-3xl font-display font-bold mb-6 text-zinc-900">What even is Fyle?</h4>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Fyle is a B2B expense management app for companies whose employees travel regularly. 
                The mileage feature let users log routes and get reimbursed for distance — but every entry meant filling out the full form: date, vehicle, cost centre, project, route. One trip at a time.
                <br /><br />
                For daily commuters, that's 20+ form submissions a month. No wonder the support inbox was overflowing.
              </p>
            </div>
            <div className="aspect-video rounded-[40px] bg-zinc-50 border border-zinc-100 overflow-hidden">
              <img src="https://picsum.photos/seed/fyle-setup/1200/800" alt="Fyle Product Interface" className="w-full h-full object-cover opacity-50 grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section id="problem" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">The Problem</h3>
          <div className="mb-16">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">The old flow was a patience-testing endurance sport</h4>
            <p className="text-lg text-zinc-600 max-w-2xl">
              Each mileage expense required its own form submission. For daily commuters, that loop repeated every single working day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "😨", title: "One expense at a time", desc: "Every trip meant opening the form, filling all fields, submitting — then starting over. Daily commuters repeated this ~20 times a month." },
              { icon: "🧐", title: "Repetitive data entry", desc: "Date, vehicle type, cost centre, project, route — the same fields, every time. Users were penalised for traveling consistently." },
              { icon: "🥱", title: "No memory of what's been done", desc: "No overview, no count — just a screen of input fields. Users had to mentally track how many entries they'd made and how many remained." },
              { icon: "🫠", title: "No visibility into status", desc: "Checking which expenses were saved vs reported meant navigating back to the reports page. No glanceable summary." },
            ].map((prob) => (
              <div key={prob.title} className="p-12 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <div className="text-4xl mb-6">{prob.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-zinc-900 leading-tight">{prob.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 bg-zinc-900 rounded-[40px] text-white">
            <p className="text-2xl md:text-3xl font-display font-bold italic leading-tight text-center">
              "The user had to add one expense at a time, remember how many they'd added, and had no overview — just a screen of multiple input fields."
            </p>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-brand-primary text-center">— Shyani's problem summary, based on 500+ support tickets</p>
          </div>
        </section>

        {/* Our Audience */}
        <section id="audience" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Our Audience</h3>
          <div className="mb-12">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">The people stuck in this loop</h4>
            <p className="text-lg text-zinc-600 max-w-2xl">
              The primary users are employees who travel regularly for work — daily commuters, client visitors, field teams. They log mileage expenses to get reimbursed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initials: "SW", name: "Shweta Vas, 27", desc: "Commutes daily by car. Files all mileage at month-end in one exhausting session." },
              { initials: "JA", name: "Jasmine Ansary, 28", desc: "Client meetings monthly. Low frequency — but the repetitive form still made her want to give up halfway." },
              { initials: "JS", name: "Jatin Sharma, 26", desc: "Daily commuter. Has genuinely considered not claiming expenses because the form takes longer than the commute itself." },
            ].map((user) => (
              <div key={user.initials} className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-brand-primary">{user.initials}</span>
                </div>
                <h5 className="text-lg font-bold text-zinc-900 mb-3">{user.name}</h5>
                <p className="text-sm text-zinc-500 leading-relaxed">{user.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quantitative Research */}
        <section id="research" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Quantitative Research</h3>
          <div className="mb-16">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">32 survey responses later...</h4>
            <p className="text-lg text-zinc-600 max-w-2xl">
              User surveys. 32 responses. One data point immediately shaped the entire design direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-12 bg-zinc-900 rounded-[40px] text-white text-center flex flex-col justify-center">
              <p className="text-6xl font-display font-black text-brand-primary mb-4">93%</p>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">of users travel every day for work</p>
            </div>
            <div className="p-12 bg-zinc-50 rounded-[40px] border border-zinc-100 text-center flex flex-col justify-center">
              <p className="text-6xl font-display font-black text-zinc-200 mb-4">7%</p>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">travel only 3 days a week or less</p>
            </div>
            <div className="p-12 bg-zinc-50 rounded-[40px] border border-zinc-100 text-center flex flex-col justify-center">
              <p className="text-6xl font-display font-black text-zinc-200 mb-4">32</p>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">total survey responses collected</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📅", title: "Auto-fill the date", desc: "93% travel daily — the date is almost always today. Don't make them type it." },
              { icon: "⚡", title: "Show all entries at once", desc: "Users need the full picture — saved, reported, pending — without bouncing between screens." },
              { icon: "🔁", title: "Reduce repeated fields", desc: "Vehicle, cost centre, and project are usually constant across trips. Treat them as a given, not a question." },
            ].map((insight) => (
              <div key={insight.title} className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <div className="text-4xl mb-6">{insight.icon}</div>
                <h5 className="text-lg font-bold text-zinc-900 mb-3">{insight.title}</h5>
                <p className="text-sm text-zinc-500 leading-relaxed">{insight.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Transformation */}
        <section id="transformation" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">The Transformation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="p-12 rounded-[40px] bg-red-50 border border-red-100">
              <h4 className="text-2xl font-display font-bold mb-8 text-red-900">Before</h4>
              <ul className="space-y-4 text-red-700 font-medium">
                <li>• One mileage expense added per session</li>
                <li>• All fields manually entered every time</li>
                <li>• Date had to be typed in each entry</li>
                <li>• No way to see all expenses at a glance</li>
                <li>• Had to navigate to reports page for status</li>
                <li className="pt-4 border-t border-red-200 italic">500+ support tickets a month. Someone was losing their mind.</li>
              </ul>
            </div>
            <div className="p-12 rounded-[40px] bg-green-50 border border-green-100">
              <h4 className="text-2xl font-display font-bold mb-8 text-green-900">After</h4>
              <ul className="space-y-4 text-green-700 font-medium">
                <li>• Multiple mileage expenses added in one session</li>
                <li>• Constant fields (vehicle, cost centre) set once</li>
                <li>• Date auto-filled — editable if needed</li>
                <li>• Table overview of all expenses and their status</li>
                <li>• Save or report all expenses in a single action</li>
                <li className="pt-4 border-t border-green-200 italic">Complaint tickets dropped dramatically. Peace restored.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 text-center">Before — single mileage entry form</p>
              <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden">
                <img src="https://picsum.photos/seed/fyle-before/1200/800" alt="Before — single mileage entry form" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 text-center">After — bulk mileage entry screen</p>
              <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden">
                <img src="https://picsum.photos/seed/fyle-after/1200/800" alt="After — bulk mileage entry screen" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Design Decisions */}
        <section id="decisions" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">Key Design Decisions</h3>
          <div className="space-y-32">
            {[
              { 
                num: "01", 
                title: "Auto-filled date with amendment option", 
                desc: "Date defaults to today — but the edit option is prominent, not buried, for users who batch-enter expenses later.",
                img: "https://picsum.photos/seed/fyle-decision-1/1200/800",
                imgAlt: "Auto-filled date screen"
              },
              { 
                num: "02", 
                title: "Constant input fields", 
                desc: "Vehicle type, cost centre, and project are set once at the top and applied to all rows — no re-entering the same data 20 times.",
                img: "https://picsum.photos/seed/fyle-decision-2/1200/800",
                imgAlt: "Constant input fields screen"
              },
              { 
                num: "03", 
                title: "Table view over form stacking", 
                desc: "All entries live in a scannable table instead of an infinitely growing form. Users see everything at once: saved, pending, needs attention.",
                img: "https://picsum.photos/seed/fyle-decision-3/1200/800",
                imgAlt: "Table view screen"
              },
              { 
                num: "04", 
                title: "Bulk save or report action", 
                desc: "One action covers all entries. The success state confirms everything clearly — no ambiguity, no second-guessing.",
                img: "https://picsum.photos/seed/fyle-decision-4/1200/800",
                imgAlt: "Bulk save and report action screen"
              },
            ].map((decision) => (
              <div key={decision.num} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <p className="text-4xl font-display font-black text-zinc-100 mb-6">{decision.num}</p>
                  <h4 className="text-2xl font-display font-bold mb-4 text-zinc-900">{decision.title}</h4>
                  <p className="text-lg text-zinc-500 leading-relaxed">{decision.desc}</p>
                </div>
                <div className="lg:col-span-7 aspect-video rounded-[40px] bg-zinc-50 border border-zinc-100 overflow-hidden">
                  <img src={decision.img} alt={decision.imgAlt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usability Testing */}
        <section id="testing" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Usability Testing</h3>
          <div className="mb-16">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">We broke it so users didn't have to</h4>
            <p className="text-lg text-zinc-600 max-w-2xl">
              The prototype was tested via Maze with teammates and peers. Two issues surfaced in the first round:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Issue 1</h5>
              <p className="text-zinc-900 font-bold mb-2">Date field ambiguity</p>
              <p className="text-zinc-500">Users weren't sure if the date field meant when the expense occurred or when it was reported. Fixed with clearer labelling.</p>
            </div>
            <div className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Issue 2</h5>
              <p className="text-zinc-900 font-bold mb-2">Constant logic visibility</p>
              <p className="text-zinc-500">Multiple cost centres and vehicle types caused errors — the "constant" logic wasn't visually distinct enough. Fixed by making the scope more explicit.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden">
              <img src="https://picsum.photos/seed/fyle-maze-1/800/450" alt="Maze testing heatmap 1" className="w-full h-full object-cover opacity-50 grayscale" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden">
              <img src="https://picsum.photos/seed/fyle-maze-2/800/450" alt="Maze testing heatmap 2" className="w-full h-full object-cover opacity-50 grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section id="competitive" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Competitive Analysis</h3>
          <div className="mb-16">
            <h4 className="text-3xl font-display font-bold mb-4 text-zinc-900">How Fyle stacked up</h4>
            <p className="text-lg text-zinc-600 max-w-2xl">
              Compared Fyle against Zoho Expense and Expensify to map what already existed and where there was room to differentiate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Number input field", desc: "Fyle's new feature. Competitors didn't have a dedicated bulk entry mode." },
              { title: "Auto-filled date", desc: "Unique to this design. Neither Zoho nor Expensify defaulted to today's date intelligently." },
              { title: "Auto-check for reimbursement", desc: "Reduced a decision users had to make every time." },
              { title: "Inline expense removal", desc: "Icon-level delete right in the table row, no navigation required." },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100">
                <div className="text-green-500 text-2xl mb-4">✅</div>
                <h5 className="text-sm font-bold text-zinc-900 mb-2">{item.title}</h5>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Takeaways */}
        <section id="takeaways" className="scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-12">Takeaways</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "Listen to the tickets, not just the users", desc: "500 support tickets are 500 user interviews you didn't have to schedule. The solution was in the pattern, not just the complaints." },
              { step: "02", title: "One insight can unlock the whole design", desc: "The 93% daily-travel stat reframed everything. Auto-filling the date wasn't a small UX tweak — it was the insight that made bulk entry feel effortless, not just \"less bad\"." },
              { step: "03", title: "Consider all stakeholders — including support", desc: "The support team had the richest data on user pain. Looping them in earlier would have accelerated the research phase significantly." },
              { step: "04", title: "Confusion in testing is a gift", desc: "The date field confusion caught in Maze testing prevented real errors in live expense reports. Test early, break it yourself first." },
            ].map((lesson) => (
              <div key={lesson.title} className="p-12 rounded-[40px] bg-zinc-50 border border-zinc-100">
                <p className="text-4xl font-display font-black text-zinc-200 mb-6">{lesson.step}</p>
                <h4 className="text-xl font-bold mb-4 text-zinc-900">{lesson.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{lesson.desc}</p>
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
  const study = CASE_STUDIES[id?.toLowerCase() as keyof typeof CASE_STUDIES];

  if (!study) return <Navigate to="/" />;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest">
                {study.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {study.year}
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-zinc-900">
              {study.title}.
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-16">
              {study.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-zinc-100"
            >
              <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Meta Info */}
      <div className="border-y border-zinc-100 bg-zinc-50/50">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Role</p>
              <p className="font-bold text-zinc-900">Lead Product Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Duration</p>
              <p className="font-bold text-zinc-900">{study.duration}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Tools</p>
              <p className="font-bold text-zinc-900">Figma, Protopie, React</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Industry</p>
              <p className="font-bold text-zinc-900">{study.category.split(' / ')[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {study.content}
        </div>
      </main>

      {/* Next Project Footer */}
      <footer className="bg-zinc-900 text-white py-40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8">Next Project</p>
          <Link 
            to={`/case-study/${id === 'fyle' ? 'hoshaksham' : 'fyle'}`}
            className="group inline-block"
          >
            <h2 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 group-hover:text-brand-primary transition-colors">
              {id === 'fyle' ? 'Hoshaksham' : 'Fyle'}
              <ChevronRight className="inline-block w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-4 transition-transform" />
            </h2>
          </Link>
        </div>
      </footer>
    </div>
  );
}
