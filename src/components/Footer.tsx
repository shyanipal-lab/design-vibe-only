import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-zinc-900 pt-40 pb-12 relative overflow-hidden rounded-t-[80px] border-t border-zinc-100">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="font-display text-6xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
                    Let's talk <br />
                    Building <span className="text-brand-primary italic">something</span> <br />
                    worth getting right?
                  </h2>
                  
                  <p className="text-2xl md:text-3xl text-zinc-500 font-medium max-w-2xl mb-16 leading-relaxed">
                    Looking for <span className="text-zinc-900">Senior Product Designer</span> roles, <br />
                    Meaningful problems preferred.
                  </p>

                  <div className="flex flex-wrap gap-6 items-center">
                    <div className="relative group">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:pal.shyani1@gmail.com"
                        className="inline-flex items-center gap-4 bg-zinc-900 text-white px-10 py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-primary transition-all shadow-xl"
                      >
                        Say hello
                        <Mail className="w-5 h-5" />
                      </motion.a>
                      
                      {/* Humorous Floating Text */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="absolute -top-12 left-0 md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-8 whitespace-nowrap"
                      >
                        <div className="bg-white border border-zinc-100 px-4 py-2 rounded-xl shadow-2xl">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            Usually replies within 24 hrs. <br />
                            <span className="text-brand-primary">and if it's monday than 30hrs</span>
                          </p>
                        </div>
                        <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white border-l border-b border-zinc-100 rotate-45" />
                      </motion.div>
                    </div>

                    <motion.a
                      whileHover={{ x: 10, color: "#F6851B" }}
                      href="https://linkedin.com/in/shyani-pal"
                      target="_blank"
                      className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-sm py-4 px-6 group"
                    >
                      View LinkedIn
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-4 lg:pt-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col gap-12"
                >

                  <div className="space-y-6">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Socials</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: Twitter, href: "#" },
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "https://linkedin.com/in/shyani-pal" },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.05)" }}
                          href={social.href}
                          className="w-12 h-12 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-400 transition-all"
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-100 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <p className="text-zinc-500 font-medium text-sm">
                  © {currentYear} Shyani. Built with passion & precision.
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
