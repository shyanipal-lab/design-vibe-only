import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, FileText, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-zinc-900 pt-12 pb-6 relative overflow-hidden rounded-t-[40px] md:rounded-t-[80px] border-t border-zinc-100">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto border-t border-zinc-100 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <p className="text-zinc-500 font-medium text-sm">
                  © {currentYear} Shyani. Built with passion & precision.
                </p>
                <p className="text-zinc-400 text-[10px] font-medium italic max-w-md">
                  Built with AI, for a better AI future. Supported by multiple AIs, excessive caffeine, and a highly questionable sleep schedule. ☕️🤖💤
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Privacy Policy</a>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
