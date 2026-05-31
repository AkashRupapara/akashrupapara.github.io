import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Awards from './Components/Awards';
import Contact from './Components/Contact';
import JourneyTimeline from './Components/JourneyTimeline';
import Footer from './Components/Footer';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  });

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme === 'light' ? 'min-h-screen bg-slate-100 text-slate-900' : 'min-h-screen bg-gray-950 text-gray-100'}>
      <Navigation theme={theme} onThemeToggle={() => setTheme(current => (current === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero theme={theme} />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
        <JourneyTimeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
