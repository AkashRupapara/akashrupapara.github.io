import React from 'react';
import { Code2, Mail } from 'lucide-react';

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-gray-500 text-sm">
          <span className="text-indigo-400">Akash Rupapara</span> · Built with React & Tailwind
        </div>

        <div className="flex items-center gap-5">
          {[
            { icon: Code2, href: 'https://github.com/akashrupapara', label: 'GitHub' },
            { icon: Mail, href: 'mailto:akash.rupapara@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-indigo-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="https://linkedin.com/in/akashrupapara"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-indigo-400 transition-colors"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
