import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Education } from '../components/Education';
// import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
export function Portfolio() {
  return <div className="bg-gradient-animate min-h-screen text-slate-light selection:bg-neon-red selection:text-white relative">
      {/* Global decorative orbs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-neon-red/5 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Education />
        {/* <Projects /> */}
        <Contact />
      </main>

      <footer className="glass border-t border-white/5 py-8 text-center text-slate-dim text-sm mt-12">
        <p>Designed & Built by Gowsalya</p>
        <p className="mt-2 text-xs opacity-60">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>;
}