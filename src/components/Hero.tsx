import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
export function Hero() {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="order-2 lg:order-1">
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-red/10 rounded-full blur-2xl -z-10 group-hover:bg-neon-red/20 transition-all duration-500" />

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/20 text-neon-red text-sm font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Alex Morgan
              </span>
            </motion.h1>

            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-2xl md:text-3xl font-medium text-neon-red mb-6 flex items-center gap-3">
              Digital Marketing Specialist <Sparkles size={20} />
            </motion.h2>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
              I help brands grow online using SEO, social media, paid ads, and
              data-driven marketing strategies. Let's turn your audience into
              loyal customers.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-wrap gap-4">
              <a href="#contact" className="glass-button px-8 py-4 rounded-xl flex items-center gap-2 group">
                Hire Me{' '}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-semibold hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center gap-2">
                Download CV <Download size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }} className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Glass Frame */}
            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm z-0 scale-110" />

            {/* Spinning Rings */}
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }} className="absolute inset-0 border border-dashed border-white/20 rounded-full z-0" />
            <motion.div animate={{
            rotate: -360
          }} transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }} className="absolute inset-4 border border-dotted border-neon-red/30 rounded-full z-0" />

            {/* Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(255,0,85,0.2)] z-10 group">
              <div className="absolute inset-0 bg-neon-red/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Alex Morgan" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Floating Glass Elements */}
            <motion.div animate={{
            y: [0, -20, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="absolute top-0 right-10 glass px-4 py-2 rounded-lg text-xs font-mono text-neon-red border-neon-red/20 z-20">
              SEO Expert
            </motion.div>
            <motion.div animate={{
            y: [0, 20, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }} className="absolute bottom-10 left-0 glass px-4 py-2 rounded-lg text-xs font-mono text-blue-400 border-blue-400/20 z-20">
              Growth Hacker
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}