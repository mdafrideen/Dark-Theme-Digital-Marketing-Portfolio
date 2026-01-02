import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';

export function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully ✅');
        form.reset();
      } else {
        setResult('Message failed ❌');
      }
    } catch (error) {
      setResult('Network error ❌');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-red font-mono mb-2">Let’s Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project or need digital marketing support?
            Send a message and I’ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-6">
              <Mail className="text-neon-red" />
              <span className="text-slate-400">gowsi813@gmail.com</span>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-6">
              <Phone className="text-neon-red" />
              <span className="text-slate-400">+91 96295 54536</span>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-6">
              <MapPin className="text-neon-red" />
              <span className="text-slate-400">Coimbatore, Tamil Nadu</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/s-gowsalya-42bb102a4"
                target="_blank"
                className="w-12 h-12 glass rounded-full flex items-center justify-center"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/sg_gowsi_"
                target="_blank"
                className="w-12 h-12 glass rounded-full flex items-center justify-center"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form onSubmit={onSubmit} className="space-y-6">

              {/* REQUIRED: hidden access_key */}
              <input
                type="hidden"
                name="access_key"
                value="1dfe5aab-468a-464d-970d-cbc822ce452f"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full glass-input px-4 py-3 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full glass-input px-4 py-3 rounded-xl"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full glass-input px-4 py-3 rounded-xl"
              />

              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required
                className="w-full glass-input px-4 py-3 rounded-xl resize-none"
              />

              <button
                type="submit"
                className="w-full glass-button py-4 rounded-xl flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>

              {result && (
                <p className="text-center text-sm text-slate-300 mt-3">
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
