import { motion } from "motion/react";
import { ArrowLeft, Share2, Clock, Tag, ChevronRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

const CASE_STUDIES = {
  hoshaksham: {
    title: "Hoshaksham",
    subtitle: "Empowering individuals with disabilities through accessible digital solutions.",
    category: "UX Research & Product Design",
    duration: "4 Months",
    year: "2024",
    heroImage: "https://picsum.photos/seed/hoshaksham-hero/1920/1080",
    content: (
      <div className="space-y-20">
        <section>
          <h3 className="text-3xl font-display font-bold mb-6">The Challenge</h3>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Individuals with disabilities often face significant barriers when navigating digital healthcare platforms. 
            Hoshaksham was born from the need to create a truly inclusive experience that prioritizes accessibility without compromising on modern aesthetics.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <img src="https://picsum.photos/seed/hosh-1/800/1000" alt="Process" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/hosh-2/800/1000" alt="Process" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
        </div>
        <section>
          <h3 className="text-3xl font-display font-bold mb-6">The Solution</h3>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We implemented a multi-modal interface supporting voice commands, high-contrast modes, and screen-reader optimized navigation. 
            The result was a 40% increase in task completion rates for users with visual impairments.
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
    content: (
      <div className="space-y-20">
        <section>
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
        <section>
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

      {/* Hero Section */}
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
