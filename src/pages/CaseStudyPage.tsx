import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Clock, Tag, ChevronRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import CaseStudyNav from "../components/CaseStudyNav";
import { CinematicHero, CinematicHeroProps } from "../components/ui/cinematic-hero";

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
  showCinematicHero: boolean;
  cinematicProps?: CinematicHeroProps;
  sections: Section[];
  content: React.ReactNode;
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  hoshaksham: {
    title: "Hoshaksham",
    subtitle: "Transforming the 'Awkward' into 'Automated' for Indian Freelancers.",
    category: "Fintech & UX Research",
    duration: "4 Months",
    year: "2024",
    heroImage: "https://picsum.photos/seed/hoshaksham-story/1920/1080",
    showCinematicHero: true,
    cinematicProps: {
      brandName: "Hoshaksham",
      tagline1: "Received amount",
      tagline2: "₹ 73,990",
      cardHeading: "Share payment link via WhatsApp",
      cardDescription: "Create plans and add subscribers seamlessly. Automated invoicing for Indian freelancers.",
      metricValue: 73990,
      metricLabel: "Received this month",
      ctaHeading: "Start your journey.",
      ctaDescription: "Join thousands of freelancers and take control of your payments today."
    },
    sections: [
      { id: "overview", label: "Overview" },
      { id: "research", label: "Research" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "approach", label: "Approach" },
      { id: "impact", label: "Impact" },
    ],
    content: (
      <div className="space-y-32">
        {/* The Hook: Meet Priya */}
        <section id="overview" className="relative scroll-mt-32">
          <div className="absolute -left-12 top-0 w-1 bg-brand-primary h-full opacity-20" />
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">The Story</h3>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
            Meet Priya. <br />
            <span className="text-zinc-400 italic">Talented, but tired.</span>
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl">
            Priya is a brilliant freelance illustrator. But behind her beautiful portfolio was a mess of manual spreadsheets, 
            hand-written invoices, and the constant, gut-wrenching anxiety of asking clients: <span className="text-zinc-900 font-bold">"Is my payment done?"</span>
          </p>
        </section>

        {/* The Empathy Map */}
        <section id="research" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-32">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Connecting Emotionally</h3>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              We created an empathy map to deeply understand Priya’s frustrations. It wasn't just about the money; it was about the 
              <span className="italic"> emotional weight</span> of the business side of art.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Says", text: "I hate asking for money." },
                { label: "Does", text: "Tracks everything in Excel." },
                { label: "Thinks", text: "Will they pay me this time?" },
                { label: "Feels", text: "Stressed and undervalued." },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-zinc-900">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/empathy-map/800/800" 
              alt="Empathy Mapping Process" 
              className="rounded-3xl shadow-2xl" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-xs font-bold leading-tight">"This allowed us to connect emotionally with her challenges."</p>
            </div>
          </div>
        </section>

        {/* The Problem Space */}
        <section id="problem" className="bg-zinc-950 text-white p-12 md:p-20 rounded-[40px] relative overflow-hidden scroll-mt-32">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px]" />
          <div className="max-w-3xl relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">The Friction</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-primary font-bold">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Manual Tracking</h4>
                  <p className="text-zinc-400">Hours spent updating spreadsheets that never seemed to balance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-primary font-bold">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Invoice Generation</h4>
                  <p className="text-zinc-400">Creating PDFs manually for every small milestone was a productivity killer.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-brand-primary font-bold">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Payment Uncertainty</h4>
                  <p className="text-zinc-400">No clear way to know if a client had even opened the invoice link.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution: Bringing it to Life */}
        <section id="solution" className="scroll-mt-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">The Solution</h3>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter uppercase">
              Hoshaksham: <br />
              <span className="text-zinc-400 italic">Making her capable.</span>
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We built a tool that didn't just track money, but managed relationships. 
              Automated, seamless, and undeniably professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "WhatsApp Links", desc: "Send payment links where clients actually talk.", icon: "📱" },
              { title: "Direct Bank Sync", desc: "Receive payments directly into the bank account.", icon: "🏦" },
              { title: "Auto Invoicing", desc: "Generate monthly invoices with a single tap.", icon: "📄" },
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-brand-primary/30 transition-colors group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UX Psychology */}
        <section id="approach" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center scroll-mt-32">
          <div className="order-2 lg:order-1">
            <img 
              src="https://picsum.photos/seed/ux-psych/800/1000" 
              alt="UX Psychology in Action" 
              className="rounded-3xl shadow-2xl" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">UX Psychology</h3>
            <h2 className="text-3xl font-display font-bold mb-8">Designing with Intent</h2>
            <div className="space-y-10">
              <div>
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  Hick’s Law
                </h4>
                <p className="text-zinc-600">
                  We reduced the number of choices on the dashboard. Priya only sees what she needs to act on 
                  <span className="italic"> right now</span>.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  Zeigarnik Effect
                </h4>
                <p className="text-zinc-600">
                  By showing "incomplete" payment bars, we leveraged the psychological urge to finish tasks, 
                  nudging her to send reminders without the guilt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section id="impact" className="text-center py-20 border-y border-zinc-100 scroll-mt-32">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-12">The Impact (So Far)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "65%", label: "Time Saved" },
              { val: "0", label: "Manual Errors" },
              { val: "100%", label: "Payment Clarity" },
              { val: "Low", label: "Stress Levels" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-6xl font-display font-black text-brand-primary mb-2">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons */}
        <section className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-display font-bold mb-8 italic">"Start small, iterate fast."</h3>
          <p className="text-lg text-zinc-500 leading-relaxed">
            This project taught me that the best solutions aren't always the most complex. Sometimes, 
            it's just about making a difficult conversation a little bit easier.
          </p>
        </section>
      </div>
    )
  },
  fyle: {
    title: "Fyle",
    subtitle: "Redesigning the expense reporting experience for modern teams.",
    category: "Fintech / Product Redesign",
    duration: "6 Months",
    year: "2020",
    heroImage: "https://picsum.photos/seed/fyle-hero/1920/1080",
    showCinematicHero: false,
    sections: [
      { id: "overview", label: "Overview" },
      { id: "solution", label: "Results" },
    ],
    content: (
      <div className="space-y-20">
        <section id="overview" className="scroll-mt-32">
          <h3 className="text-3xl font-display font-bold mb-6">The Vision</h3>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Expense management is traditionally a point of friction for employees. 
            Our goal with the Fyle redesign was to make expense reporting as simple as sending a text message.
          </p>
        </section>
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-zinc-100">
           <video 
              src="https://storage.googleapis.com/cortex-artifacts/67e00045-397e-4081-897d-6927d780979a/video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
        </div>
        <section id="solution" className="scroll-mt-32">
          <h3 className="text-3xl font-display font-bold mb-6">Key Results</h3>
          <p className="text-xl text-zinc-600 leading-relaxed">
            By introducing AI-powered receipt scanning and a "one-click" approval workflow, we reduced the average time spent on expense reports by 65%.
          </p>
        </section>
      </div>
    )
  }
};

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = CASE_STUDIES[id as keyof typeof CASE_STUDIES];

  if (!study) return <Navigate to="/" />;

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/" className="group flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <Share2 className="w-4 h-4" />
        </button>
      </nav>

      <CaseStudyNav sections={study.sections} />

      {/* Hero Section */}
      {study.showCinematicHero ? (
        <CinematicHero {...study.cinematicProps} />
      ) : (
        <header className="relative h-[90vh] flex items-end pb-20 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-brand-primary text-[10px] font-bold uppercase tracking-widest">
                  {study.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {study.year}
                </span>
              </div>
              <h1 className="font-display text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
                {study.title}.
              </h1>
              <p className="text-2xl md:text-3xl font-medium opacity-80 leading-relaxed max-w-2xl">
                {study.subtitle}
              </p>
            </motion.div>
          </div>
        </header>
      )}

      {/* Meta Info */}
      <div className="border-b border-zinc-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                <Tag className="w-3 h-3" /> Role
              </p>
              <p className="font-bold text-zinc-900">Lead Product Designer</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                <Clock className="w-3 h-3" /> Duration
              </p>
              <p className="font-bold text-zinc-900">{study.duration}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Tools</p>
              <p className="font-bold text-zinc-900">Figma, Protopie, React</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Industry</p>
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
      <footer className="bg-zinc-950 text-white py-40">
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
