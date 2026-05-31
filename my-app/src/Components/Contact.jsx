import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Code2, Send, MapPin } from 'lucide-react';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akash.rupapara@gmail.com',
    href: 'mailto:akash.rupapara@gmail.com',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akashrupapara',
    href: 'https://linkedin.com/in/akashrupapara',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'github.com/akashrupapara',
    href: 'https://github.com/akashrupapara',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('akash.rupapara@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">06. Contact</p>
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-16 leading-relaxed">
            I'm always open to interesting conversations, collaboration, or new opportunities.
            Whether you have a question, a project idea, or just want to say hi -
            my inbox is open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {links.map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl ${bg} border ${border} hover:scale-[1.02] transition-all duration-200 group`}
              >
                <div className={`p-3 rounded-xl ${bg}`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-mono">{label}</p>
                  <p className={`${color} font-medium group-hover:underline`}>{value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="p-3 rounded-xl bg-white/5">
                <MapPin size={22} className="text-gray-400" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider font-mono">Location</p>
                <p className="text-gray-200">Milpitas, CA · Open to remote</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send size={28} className="text-indigo-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Let's Build Something</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              I'm particularly interested in roles and projects involving AI/ML systems,
              cloud security infrastructure, or high-throughput distributed platforms.
            </p>
            <button
              onClick={copyEmail}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              {copied ? 'Copied!' : 'Copy Email Address'}
            </button>
            <a
              href="mailto:akash.rupapara@gmail.com"
              className="mt-3 block w-full py-3 border border-white/20 hover:border-indigo-400/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/5 text-center"
            >
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
