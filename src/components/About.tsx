import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Target, BarChart2 } from 'lucide-react';

const skills = [
  'SEO',
  'Social Media Marketing',
  'Google Ads',
  'Meta Ads',
  'Content Marketing',
  'Email Marketing',
  // 'Social Media Management',
  // 'Influencer Marketing',
  // 'Google Analytics'
];

const process = [
  {
    icon: Search,
    title: 'Research',
    desc: 'Understanding the brand, audience, and competitors'
  },
  {
    icon: Target,
    title: 'Strategy',
    desc: 'Planning marketing goals and digital channels'
  },
  {
    icon: TrendingUp,
    title: 'Execution',
    desc: 'Running campaigns and managing content & ads'
  },
  {
    icon: BarChart2,
    title: 'Optimization',
    desc: 'Analyzing performance and improving results'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-red to-transparent flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass p-8 md:p-10 rounded-3xl"
          >
            <div className="space-y-6 text-slate-300 text-lg mb-10">
              <p>
                I am Gowsalya, a Digital Marketing Specialist based in Coimbatore.
                I specialize in creating effective digital strategies that help
                businesses grow their online presence and reach the right audience.
              </p>
              <p>
                My expertise includes SEO, social media marketing, paid advertising,
                and content strategy. I focus on data-driven decisions and practical
                execution to deliver measurable results for brands.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-neon-red rounded-full"></span>
              Core Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-slate-200 hover:border-neon-red/50 hover:bg-neon-red/10 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Work Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass p-6 rounded-2xl mb-2">
              <h3 className="text-2xl font-bold text-white text-center">
                My Work Process
              </h3>
            </div>

            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-5 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-red/20 to-blue-900/20 flex items-center justify-center text-neon-red border border-white/10 group-hover:scale-110 transition-transform">
                  <step.icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
