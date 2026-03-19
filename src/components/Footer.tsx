import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import SnakeGame from "./SnakeGame";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 text-white py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-6xl md:text-8xl font-bold mb-10 leading-tight"
            >
              Let's build <br />
              <span className="text-brand-primary italic">something</span> <br />
              extraordinary.
            </motion.h2>
            
            <div className="flex flex-col gap-6 mb-12">
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:pal.shyani1@gmail.com"
                className="group flex items-center justify-between text-2xl md:text-4xl font-display font-medium border-b border-zinc-800 pb-6 hover:text-brand-primary transition-colors"
              >
                pal.shyani1@gmail.com
                <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
              </motion.a>
              <div className="flex gap-6">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "mailto:pal.shyani1@gmail.com" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, color: "#037DD6" }}
                    href={social.href}
                    className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="glass p-10 rounded-[40px] border border-zinc-800/50 bg-zinc-900/50">
              <h3 className="text-3xl font-display font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-6">
                {["Home", "About", "Fun", "Work", "Contact"].map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-400 hover:text-brand-primary transition-colors font-bold uppercase tracking-widest text-[10px]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="glass p-10 rounded-[40px] border border-zinc-800/50 bg-zinc-900/50">
              <h3 className="text-3xl font-display font-bold mb-6">Location</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">
                Based in Asia, working globally. <br />
                Available for freelance & full-time roles.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <p className="text-zinc-500 font-medium">
              © {currentYear} Shyani. Built with passion & precision.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
