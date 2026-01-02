import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-24 px-6 relative">
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
          <p className="text-neon-red font-mono mb-2 tracking-wide">
            What's Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Whether you have a project in mind or just want to say hi, my inbox
            is always open. I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-red group-hover:scale-110 transition-transform shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a href="mailto:hello@alexmorgan.com" className="text-slate-400 hover:text-neon-red transition-colors">
                  hello@alexmorgan.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-red group-hover:scale-110 transition-transform shadow-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-slate-400 hover:text-neon-red transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-red group-hover:scale-110 transition-transform shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Location
                </h3>
                <p className="text-slate-400">
                  New York, NY (Available Remote)
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-neon-red hover:border-neon-red transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-neon-red hover:border-neon-red transition-all duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="glass p-8 rounded-3xl border-t border-white/20 shadow-2xl">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full glass-input rounded-xl px-4 py-3 placeholder-slate-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full glass-input rounded-xl px-4 py-3 placeholder-slate-500" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full glass-input rounded-xl px-4 py-3 placeholder-slate-500" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full glass-input rounded-xl px-4 py-3 placeholder-slate-500 resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full glass-button py-4 rounded-xl flex items-center justify-center gap-2 group">
                Send Message{' '}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}