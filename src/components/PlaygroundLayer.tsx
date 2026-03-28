import { motion } from "motion/react";
import { MousePointer2, Mail, Linkedin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline, IoGameControllerOutline, IoChatbubbleOutline } from 'react-icons/io5';
import GradientMenu from "./ui/gradient-menu";

// Import Lottie JSONs
import emailLottie from "../assets/lottie/email.json";
import linkedinLottie from "../assets/lottie/linkedin.json";
import resumeLottie from "../assets/lottie/resume.json";

const NAV_ITEMS = [
  { label: "Home", href: "/#home", icon: <IoHomeOutline />, id: "home", gradientFrom: '#037DD6', gradientTo: '#02c39a' },
  { label: "About", href: "/about", icon: <IoPersonOutline />, id: "about", gradientFrom: '#037DD6', gradientTo: '#F6851B' },
  { label: "Work", href: "/#work", icon: <IoBriefcaseOutline />, id: "work", gradientFrom: '#F6851B', gradientTo: '#FFD02F' },
  { label: "Games", href: "/fun", icon: <IoGameControllerOutline />, id: "fun", gradientFrom: '#0500FF', gradientTo: '#037DD6' },
  { label: "Chat", href: "/#contact", icon: <IoChatbubbleOutline />, id: "contact", gradientFrom: '#F6851B', gradientTo: '#f434e2' },
];

const SOCIAL_ITEMS = [
  { label: "Email", href: "mailto:pal.shyani1@gmail.com", lottie: emailLottie },
  { label: "LinkedIn", href: "https://linkedin.com/in/shyani-pal", lottie: linkedinLottie },
  { label: "Resume", href: "/resume.pdf", lottie: resumeLottie },
];

export default function PlaygroundLayer() {
  const location = useLocation();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const constraintsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track active section
  useEffect(() => {
    if (location.pathname === '/fun') {
      setActiveSection('fun');
      return;
    }
    if (location.pathname === '/about') {
      setActiveSection('about');
      return;
    }

    // Default to home if on root path and no hash or at top
    if (location.pathname === '/' && (!location.hash || location.hash === '#home' || window.scrollY < 100)) {
      setActiveSection('home');
    }

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'fun', 'changelog', 'work', 'journey', 'contact'];
    
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Add scroll listener for top of page fallback
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none flex items-center gap-2"
        animate={{ 
          x: mousePos.x, 
          y: mousePos.y
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <MousePointer2 className="w-6 h-6 text-brand-primary fill-brand-primary" />
      </motion.div>

      <div className="fixed inset-0 pointer-events-none z-[60]" ref={constraintsRef}>
        {/* Top Navigation Bar */}
        <div className="nav-top-bar absolute top-6 left-1/2 -translate-x-1/2 pointer-events-auto">
          <GradientMenu items={NAV_ITEMS} activeSection={activeSection} />
        </div>

        {/* Social Floating Items (Moved to bottom right for better balance) */}
        <div className="absolute bottom-10 right-10 flex flex-col gap-4 pointer-events-auto">
          {SOCIAL_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.label === "Resume" ? `${import.meta.env.BASE_URL}${item.href.startsWith('/') ? item.href.slice(1) : item.href}` : item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center group relative border border-zinc-100"
            >
              <div className="w-8 h-8">
                <Lottie 
                  animationData={item.lottie} 
                  loop={true} 
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[10px] font-bold px-3 py-2 rounded-xl shadow-2xl whitespace-nowrap pointer-events-none">
                {item.label}
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
}
