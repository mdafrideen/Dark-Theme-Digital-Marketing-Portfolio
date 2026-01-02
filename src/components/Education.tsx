import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
const education = [{
  type: 'degree',
  title: 'Bachelor of Business Administration (Marketing)',
  institution: 'State University',
  year: '2020 - 2024',
  desc: 'Focused on consumer behavior, digital strategy, and brand management.'
}, {
  type: 'cert',
  title: 'Google Digital Marketing Certification',
  institution: 'Google',
  year: '2023',
  desc: 'Comprehensive training in SEO, Analytics, and Display Advertising.'
}, {
  type: 'cert',
  title: 'Meta Blueprint Certification',
  institution: 'Meta',
  year: '2023',
  desc: 'Advanced proficiency in Facebook and Instagram advertising ecosystems.'
}];
export function Education() {
  return <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education & Certifications
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-red to-transparent flex-grow max-w-xs"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-red via-white/10 to-transparent" />

          <div className="space-y-12">
            {education.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-6 w-8 h-8 rounded-full bg-navy-900 border-2 border-neon-red flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,0,85,0.5)]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                      {item.type === 'degree' ? <GraduationCap size={24} className="text-neon-red" /> : <Award size={24} className="text-neon-red" />}
                      {item.title}
                    </h3>
                    <span className="flex items-center gap-2 text-sm font-mono text-neon-red bg-neon-red/10 px-4 py-1.5 rounded-full border border-neon-red/20">
                      <Calendar size={14} />
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-lg text-slate-300 font-medium mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}