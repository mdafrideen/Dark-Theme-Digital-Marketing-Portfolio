import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, BarChart } from 'lucide-react';
const projects = [{
  title: 'Instagram Growth Campaign',
  platform: 'Instagram',
  tools: ['Meta Ads', 'Canva', 'Buffer'],
  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  stats: '250% Follower Growth'
}, {
  title: 'SEO Website Optimization',
  platform: 'Google Search',
  tools: ['SEMrush', 'Google Analytics', 'Ahrefs'],
  image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  stats: '1st Page Ranking'
}, {
  title: 'Lead Gen Campaign',
  platform: 'Google Ads',
  tools: ['Google Ads', 'Unbounce', 'Zapier'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  stats: '45% Conversion Rate'
}, {
  title: 'E-commerce Sales Boost',
  platform: 'Facebook Ads',
  tools: ['Meta Business Suite', 'Shopify'],
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  stats: '3.5x ROAS'
}, {
  title: 'Content Marketing Strategy',
  platform: 'LinkedIn',
  tools: ['LinkedIn Sales Nav', 'Copy.ai'],
  image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  stats: '10k+ Impressions'
}, {
  title: 'Email Automation Flow',
  platform: 'Email',
  tools: ['Mailchimp', 'Figma'],
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  stats: '28% Open Rate'
}];
export function Projects() {
  return <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
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
            Featured Campaigns
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-red to-transparent flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group glass rounded-2xl overflow-hidden hover:border-neon-red/50 transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20" />

                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute top-4 right-4 z-30 glass px-3 py-1 rounded-full text-xs font-bold text-white border-white/20 backdrop-blur-md">
                  {project.platform}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-red transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                  <Layers size={16} />
                  <span>{project.tools.join(', ')}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-neon-red font-semibold text-sm">
                    <BarChart size={16} />
                    {project.stats}
                  </div>

                  <button className="text-white hover:text-neon-red transition-colors flex items-center gap-1 text-sm font-medium group/btn">
                    View Case Study{' '}
                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}