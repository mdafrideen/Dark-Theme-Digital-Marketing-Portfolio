import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, Megaphone, PenTool, Users, PieChart } from 'lucide-react';
const services = [{
  icon: Search,
  title: 'SEO Optimization',
  desc: "Boost your website's visibility and organic traffic with proven on-page and off-page SEO strategies."
}, {
  icon: Share2,
  title: 'Social Media Management',
  desc: 'Build and engage your audience across all major social platforms with consistent, high-quality content.'
}, {
  icon: Megaphone,
  title: 'Paid Advertising',
  desc: 'Drive targeted traffic and instant conversions with optimized ad campaigns designed for ROI.'
}, {
  icon: PenTool,
  title: 'Content Creation',
  desc: 'Create compelling content that resonates with your audience, tells your story, and drives action.'
}, {
  icon: Users,
  title: 'Lead Generation',
  desc: 'Generate high-quality leads through strategic funnels, landing pages, and email automation.'
}, {
  icon: PieChart,
  title: 'Marketing Analytics',
  desc: 'Track performance and optimize campaigns with data-driven insights and comprehensive reporting.'
}];
export function Services() {
  return <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business
            needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -10,
          scale: 1.02
        }} className="glass p-8 rounded-2xl hover:border-neon-red/30 hover:shadow-[0_0_30px_rgba(255,0,85,0.15)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-red mb-6 group-hover:bg-neon-red group-hover:text-white transition-all duration-300 shadow-lg">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-red transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}