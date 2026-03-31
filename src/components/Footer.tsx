import { motion } from "motion/react";
import { Linkedin, Mail, FileText, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-zinc-900 pt-12 pb-6 relative overflow-hidden rounded-t-[80px] border-t border-zinc-100">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="font-header text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                  Let's talk <br />
                  Building <span className="text-brand-primary font-accent lowercase">something</span> <br />
                  worth getting right?
                </h2>
                
                <p className="text-2xl md:text-3xl text-zinc-500 font-medium max-w-2xl mb-10 leading-relaxed">
                  Looking for <span className="text-zinc-900">Senior Product Designer</span> roles, <br />
                  Meaningful problems preferred.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="relative group">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:pal.shyani1@gmail.com"
                      className="inline-flex items-center gap-4 bg-zinc-900 text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary transition-all shadow-xl"
                    >
                      Say hello
                      <Mail className="w-4 h-4" />
                    </motion.a>
                    
                    {/* Humorous Floating Text - Tooltip on Hover */}
                    <div 
                      className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -top-16 left-0 md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-6 whitespace-nowrap z-50"
                    >
                      <div className="bg-white border border-zinc-100 px-4 py-2 rounded-xl shadow-2xl">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                          Usually replies within 24 hrs. <br />
                          <span className="text-brand-primary">and if it's monday than 30hrs</span>
                        </p>
                      </div>
                      <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white border-l border-b border-zinc-100 rotate-45" />
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#f4f4f5" }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-3 border border-zinc-200 text-zinc-900 px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    Resume
                    <FileText className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#f4f4f5" }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/shyani-pal"
                    target="_blank"
                    className="inline-flex items-center gap-3 border border-zinc-200 text-zinc-900 px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    Linkedin
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-zinc-100 gap-8">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <p className="text-zinc-500 font-medium text-sm">
                  © {currentYear} Shyani. Built with passion & precision.
                </p>
                <p className="text-zinc-400 text-[10px] font-medium italic max-w-md">
                  Built with AI, for a better AI future. Supported by multiple AIs, excessive caffeine, and a highly questionable sleep schedule. ☕️🤖💤
                </p>
              </div>
              
              <div className="flex gap-8">
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Privacy Policy</a>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
