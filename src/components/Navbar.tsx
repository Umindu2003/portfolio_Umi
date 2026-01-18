import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
const navLinks = [{
  name: 'Home',
  href: '#hero'
}, {
  name: 'Perspective',
  href: '#perspective'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const {
    scrollY
  } = useScroll();
  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 50);
  });

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3' : 'bg-transparent py-5'}`} initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }}>
      <div className="w-full px-4 md:px-8 flex items-center justify-between">
        <motion.a 
          href="#hero" 
          onClick={e => scrollToSection(e, '#hero')} 
          className="flex-shrink-0 ml-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img 
            src="/MainLogo.png" 
            alt="Logo" 
            className="h-6 w-auto" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              onClick={e => scrollToSection(e, link.href)} 
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-[#0071E3]'
                  : 'text-[#4A4A4A] hover:text-[#0071E3]'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0071E3] rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button (Simplified for this iteration) */}
        <div className="md:hidden">
          {/* Add mobile menu implementation if needed, keeping it simple for now */}
        </div>
      </div>
    </motion.nav>;
}