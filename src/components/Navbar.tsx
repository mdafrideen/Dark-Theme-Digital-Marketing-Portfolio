import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navItems = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Services',
  href: '#services'
}, {
  name: 'Education',
  href: '#education'
},  {
  name: 'Contact',
  href: '#contact'
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      {/* Floating Desktop Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav initial={{
        y: -100,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20
      }} className="hidden md:flex items-center gap-1 px-2 py-2 glass rounded-full pointer-events-auto bg-black/20 backdrop-blur-xl border border-white/10">
          {navItems.map(item => <a key={item.name} href={item.href} className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1) ? 'text-white' : 'text-slate-dim hover:text-white'}`}>
              {activeSection === item.href.substring(1) && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_10px_rgba(255,0,85,0.2)]" transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />}
              <span className="relative z-10 flex items-center gap-2">
                {item.name}
                {activeSection === item.href.substring(1) && <span className="w-1.5 h-1.5 rounded-full bg-neon-red shadow-[0_0_8px_#ff0055]" />}
              </span>
            </a>)}
        </motion.nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4">
        <div className="flex justify-between items-center glass rounded-full px-6 py-3 bg-black/40 backdrop-blur-xl">
          <span className="text-xl font-bold text-white tracking-wider">
            PORT<span className="text-neon-red">FOLIO</span>
          </span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1 rounded-full hover:bg-white/10 transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.95
      }} className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-xl flex items-center justify-center">
            <div className="flex flex-col items-center space-y-6 p-8">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`text-2xl font-medium ${activeSection === item.href.substring(1) ? 'text-neon-red' : 'text-slate-light'}`}>
                  {item.name}
                </a>)}
              <button onClick={() => setIsOpen(false)} className="mt-8 p-3 rounded-full bg-white/10 text-white">
                <X size={32} />
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}