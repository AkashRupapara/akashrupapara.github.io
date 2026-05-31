import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, MoonStar, SunMedium, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'light'
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'bg-gray-950/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-indigo-400 font-semibold text-lg tracking-tight hover:text-indigo-300 transition-colors"
        >
          AR<span className="text-white">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-indigo-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            href="/Resume.pdf"
            download="Akash_Rupapara_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            onClick={onThemeToggle}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunMedium size={14} className="text-yellow-300" /> : <MoonStar size={14} className="text-indigo-400" />}
            {theme === 'dark' ? 'Day' : 'Night'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onThemeToggle}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-gray-300 hover:text-white"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunMedium size={18} className="text-yellow-300" /> : <MoonStar size={18} className="text-indigo-400" />}
          </button>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="text-gray-400 hover:text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${theme === 'light' ? 'bg-white/95 border-b border-slate-200' : 'bg-gray-950/95 border-b border-white/10'} px-6 pb-4`}
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`block w-full text-left py-3 transition-colors border-b last:border-0 ${
                  theme === 'light'
                    ? 'text-slate-700 hover:text-indigo-600 border-slate-200'
                    : 'text-gray-300 hover:text-indigo-400 border-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
