import React from 'react';
import { Code2, Globe, Mail } from 'lucide-react';

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
            { icon: Globe, href: 'https://linkedin.com/in/akashrupapara', label: 'LinkedIn' },
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
        </div>
      </div>
    </footer>
  );
}
