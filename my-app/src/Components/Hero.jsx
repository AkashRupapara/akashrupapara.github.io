import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Mail, Download } from 'lucide-react';

// Inline LinkedIn SVG since lucide-react doesn't include it
const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const roles = [
  'Senior Software Engineer',
  'AI-Powered Cloud Security',
  'Full-Stack & Distributed Systems',
  'GenAI & LLM Applications',
];

export default function Hero({ theme = 'dark' }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollDown = () => {
    const el = document.getElementById('about'); if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme === 'light' ? 'bg-gradient-to-b from-slate-100 via-white to-slate-50' : 'bg-gray-950'}`}>
      {/* Gradient background */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-transparent' : 'bg-gray-950'}`}>
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${theme === 'light' ? 'bg-sky-300/30' : 'bg-indigo-600/20'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${theme === 'light' ? 'bg-rose-300/20' : 'bg-purple-600/15'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${theme === 'light' ? 'bg-slate-200/60' : 'bg-indigo-900/10'}`} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-indigo-400 text-sm mb-6 tracking-widest uppercase">
            Hi, I'm
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-6xl md:text-8xl font-bold tracking-tight mb-6 ${theme === 'light' ? 'text-slate-900' : ''}`}
      >
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme === 'light' ? 'from-slate-900 via-slate-800 to-slate-500' : 'from-white via-white to-gray-400'}`}>
            Akash
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Rupapara
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span className={`font-mono text-xl md:text-2xl ${theme === 'light' ? 'text-slate-700' : 'text-gray-300'}`}>
            {displayed}
            <span className="animate-pulse text-indigo-400">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-gray-400'}`}
        >
          Building AI-powered cloud security infrastructure at{' '}
          <span className={theme === 'light' ? 'text-slate-900 font-medium' : 'text-white font-medium'}>Fortinet</span>. Passionate about
          distributed systems, GenAI, and clean engineering that ships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap"
        >
          <button
            onClick={() => { const el = document.getElementById('projects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
          >
            View My Work
          </button>
          <button
            onClick={() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 border border-white/20 hover:border-indigo-400/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            Get In Touch
          </button>
          <a
            href="/Resume.pdf"
            download="Akash_Rupapara_Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 border border-indigo-500/40 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 font-medium rounded-lg transition-all duration-200 hover:bg-indigo-500/10"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            { icon: Code2, href: 'https://github.com/akashrupapara', label: 'GitHub' },
            { icon: 'linkedin', href: 'https://linkedin.com/in/akashrupapara', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:akash.rupapara@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all duration-200 hover:bg-indigo-400/10"
            >
              {Icon === 'linkedin' ? <LinkedInIcon size={20} /> : <Icon size={20} />}
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={scrollDown}
          className={`${theme === 'light' ? 'text-slate-500 hover:text-indigo-500' : 'text-gray-500 hover:text-indigo-400'} transition-colors flex flex-col items-center gap-2 mx-auto`}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
