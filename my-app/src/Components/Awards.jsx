import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Zap, Users, BookOpen, Award } from 'lucide-react';

const metrics = [
  { value: '40%', label: 'Reduction in analyst investigation effort', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  { value: '65%', label: 'MTTI reduction with alert details feature', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { value: '3x', label: 'Faster CI/CD build times after GitHub Actions migration', icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { value: '80M+', label: 'Users impacted at Meta Fantasy Games', icon: Users, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  { value: '<5 min', label: 'Alert pipeline P95 latency (down from 90–120 min)', icon: Zap, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { value: '90%', label: 'UI rendering improvement via Redux memoization', icon: TrendingUp, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
];

const awards = [
  {
    icon: BookOpen,
    title: 'Published Research: AASHA System (2020)',
    org: 'IEEE Conference Publication · IEEE Xplore',
    year: '2020',
    description: 'Published "Advanced Assistance Services Using Hybrid Ambulance (AASHA) System" - reduces EMS post-accident response time with ~3 min improvement and 97% survival rate simulation.',
    link: 'https://ieeexplore.ieee.org/document/9004658',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Award,
    title: 'Tuition Fee Waiver',
    org: 'San Jose State University',
    year: '2021',
    description: 'Awarded tuition fee waiver for outstanding academic merit during graduate studies in Computer Software Engineering at SJSU.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: Award,
    title: 'Introduction to Big Data Certification',
    org: 'Coursera',
    year: '2020',
    description: 'Certified in big data fundamentals covering distributed data processing, Hadoop, and large-scale data analysis pipelines.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">04. Impact & Awards</p>
          <h2 className="text-4xl font-bold text-white mb-4">Recognition & Results</h2>
          <p className="text-gray-500 mb-16 max-w-xl">
            Numbers that tell the story - measurable impact across every role.
          </p>
        </motion.div>

        {/* Impact metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`${m.bg} border ${m.border} rounded-2xl p-6 flex items-start gap-4`}
            >
              <div className={`p-2 rounded-lg ${m.bg} flex-shrink-0`}>
                <m.icon size={20} className={m.color} />
              </div>
              <div>
                <p className={`text-3xl font-bold ${m.color} mb-1`}>{m.value}</p>
                <p className="text-gray-400 text-sm leading-snug">{m.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <h3 className="text-white font-semibold text-2xl mb-8">Awards & Recognition</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${award.bg} border ${award.border} rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-xl ${award.bg} flex-shrink-0`}>
                  <award.icon size={22} className={award.color} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-white font-semibold text-sm leading-snug">{award.title}</h4>
                    <span className={`text-xs font-mono ${award.color} flex-shrink-0`}>{award.year}</span>
                  </div>
                  <p className={`text-xs ${award.color} mb-3 font-medium`}>{award.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 mt-3 text-xs font-medium ${award.color} hover:underline`}
                    >
                      <span>View on IEEE Xplore</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
