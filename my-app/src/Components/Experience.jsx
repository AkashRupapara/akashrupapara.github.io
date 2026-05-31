import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Fortinet',
    logo: '/logos/fortinet.svg',
    role: 'Senior Software Engineer',
    period: 'Feb 2026 – Present',
    location: 'Sunnyvale, CA',
    note: 'Promoted in first eligible cycle · Lacework → Fortinet acquisition',
    color: 'from-red-500/20 to-orange-500/10',
    accent: 'bg-red-500',
    highlights: ['40% reduction in analyst investigation effort', '35% improvement in MTTR', '25% query latency improvement for high-cardinality datasets'],
    bullets: [
      'Building AI-powered cloud security infrastructure for enterprise threat detection at scale',
      'Architected agentic AI pipeline for alert triage - multi-step LLM reasoning, tool use, and contextual enrichment; reduced analyst investigation effort by 40%',
      'Distributed CNAPP backend systems for multi-cloud threat detection across 100+ enterprise customers',
      'gRPC microservices for multi-tenant workloads handling 5K+ concurrent requests',
      'Observability infrastructure - metrics, tracing, structured logging across the platform',
      'Established agentic AI-assisted dev workflows and internal engineering best practices',
    ],
    tags: ['Java', 'gRPC', 'Agentic AI', 'LLM', 'CNAPP', 'RAG', 'Observability'],
  },
  {
    company: 'Fortinet (Lacework)',
    logo: '/logos/fortinet.svg',
    role: 'Full Stack Engineer',
    period: 'Sep 2024 – Jan 2026',
    location: 'Sunnyvale, CA',
    note: '6+ major features shipped across product, design, and security research teams',
    color: 'from-orange-500/20 to-yellow-500/10',
    accent: 'bg-orange-500',
    highlights: ['35% improvement in alert dashboard load times', '6+ major features shipped', '10M+ events/day processed'],
    bullets: [
      'Full-stack ownership of customer-facing threat alert systems from ingestion to analyst UX',
      'Alert ingestion, correlation, and prioritization pipeline processing 10M+ events/day',
      'Interactive alert investigation UIs for enterprise security analysts',
      'Low-latency alert processing and alert throttling service to suppress false positive spikes',
      'RESTful APIs for alert management and investigation workflows',
    ],
    tags: ['React', 'TypeScript', 'Java', 'REST APIs', 'Security'],
  },
  {
    company: 'Lacework',
    logo: '/logos/lacework.svg',
    role: 'Senior Software Engineer (IC4)',
    period: 'May 2024 – Aug 2024',
    location: 'Mountain View, CA',
    note: 'On-call ownership across 1,500+ customers (~$100M ARR)',
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: 'bg-blue-500',
    highlights: ['65% MTTI reduction', '3x faster build times', 'On-call across 1,500+ customers'],
    bullets: [
      'Alert details UI and API for contextual security investigation, reducing MTTI by 65%',
      'Alert throttling Python service to suppress false positive spikes',
      'CI/CD migration from Codefresh to GitHub Actions, achieving 3x faster build times',
      'Maintained test coverage via Jest, JUnit, and Cypress',
    ],
    tags: ['React', 'Python', 'GitHub Actions', 'Jest', 'Cypress'],
  },
  {
    company: 'Lacework',
    logo: '/logos/lacework.svg',
    role: 'Software Engineer (IC3)',
    period: 'Jan 2023 – May 2024',
    location: 'Mountain View, CA',
    note: 'Core contributor to CNAPP alerting platform (Sutter Hill & Google Ventures backed)',
    color: 'from-indigo-500/20 to-blue-500/10',
    accent: 'bg-indigo-500',
    highlights: ['90–120 min → under 5 min (P95)', '30% increase in alert UI interaction', 'MITRE ATT&CK integration'],
    bullets: [
      'Cut alert pipeline processing time from 90–120 min to under 5 min (P95)',
      'MITRE ATT&CK framework integration into alert UI, driving 30% increase in user interaction',
      'Low-latency threat intelligence alert pipeline development',
      'Database query optimization and UI performance for high-volume alert views',
      'Delivered across React, TypeScript, Java, and Go in a microservice architecture',
    ],
    tags: ['React', 'TypeScript', 'Java', 'Go', 'MITRE ATT&CK'],
  },
  {
    company: 'Meta',
    logo: '/logos/meta.svg',
    role: 'Software Engineer (Intern)',
    period: 'May 2022 – Aug 2022',
    location: 'Seattle, WA',
    note: '"Exceeding Expectations" - highest intern performance rating',
    color: 'from-sky-500/20 to-blue-500/10',
    accent: 'bg-sky-500',
    highlights: ['80M+ users impacted', '35% increase in UI interaction', '30% app performance improvement'],
    bullets: [
      'View Player Profile feature - new full-stack addition to Fantasy Games on the Facebook App',
      'Pagination and UI redesign for high-data screens, improving performance by 30%',
      'Code refactoring and query optimization (7% improvement) for core app flows',
      '35% increase in UI interaction from game home after player profiles launch',
    ],
    tags: ['React', 'Hack', 'GraphQL', 'Full-Stack'],
  },
  {
    company: 'SS8 Networks',
    logo: '/logos/ss8.png',
    role: 'Software Engineer Intern',
    period: 'Jan 2022 – May 2022',
    location: 'California, USA',
    note: 'Distributed React applications and customer-driven UX',
    color: 'from-purple-500/20 to-pink-500/10',
    accent: 'bg-purple-500',
    highlights: ['75% of user base requested features', 'Cross-functional with UX team'],
    bullets: [
      'Large-scale distributed React app development with microservices architecture',
      'UX redesign of 2 customer-requested features, working directly with customers',
      'Collaborated cross-functionally with a team of 5 including UX designers',
    ],
    tags: ['React', 'Microservices', 'UX'],
  },
  {
    company: 'Shriji Technoaspire',
    logo: '/logos/shriji_banner.png',
    role: 'Software Engineer',
    period: 'May 2019 – Dec 2020',
    location: 'Gandhinagar, India',
    note: 'Early-career production web apps and EdTech platforms',
    color: 'from-green-500/20 to-teal-500/10',
    accent: 'bg-green-500',
    highlights: ['90% rendering improvement', '20% electricity savings', '1,000+ students & teachers'],
    bullets: [
      'Smart electric meter web app for electricity usage analysis and home automation',
      'Regional language block coding platform for 1,000+ high school students and teachers',
      '90% rendering performance improvement via Redux memoized selectors',
    ],
    tags: ['React', 'Redux', 'Python', 'EdTech'],
  },
];

function ExperienceCard({ exp, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative pl-8 border-l border-white/10 last:border-transparent"
    >
      {/* Timeline dot */}
      <div className={`absolute -left-2 top-2 w-4 h-4 rounded-full ${exp.accent} ring-4 ring-gray-950`} />

      <div
        className={`ml-4 mb-8 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br ${exp.color} cursor-pointer hover:border-white/20 transition-all duration-300`}
        onClick={() => setOpen(v => !v)}
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              {exp.logo && (
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                <p className="text-indigo-400 font-medium">{exp.company}</p>
                <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm flex-wrap">
                  <span className="flex items-center gap-1"><Calendar size={13} />{exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={13} />{exp.location}</span>
                </div>
                {exp.note && (
                  <p className="text-gray-500 text-xs mt-2 italic">{exp.note}</p>
                )}
              </div>
            </div>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 mt-1 flex-shrink-0"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>

        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10"
            >
              <div className="p-6 pt-5">
                <ul className="space-y-2">
                  {exp.bullets.map(b => (
                    <li key={b} className="text-gray-400 text-sm flex gap-3">
                      <span className="text-indigo-400 mt-1 flex-shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">02. Experience</p>
          <h2 className="text-4xl font-bold text-white mb-4">Where I've Worked</h2>
          <p className="text-gray-500 mb-10">Engineering is a team sport. These are highlights from the teams I've been part of - click to see what we shipped together.</p>

          {/* Key highlights strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '100+', label: 'Enterprise Customers', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
              { value: '10M+', label: 'Events / Day Processed', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
              { value: '5K+', label: 'Concurrent Requests', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
              { value: '5+ yrs', label: 'Industry Experience', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
            ].map(({ value, label, color, bg }) => (
              <div key={label} className={`${bg} border rounded-xl p-4 text-center`}>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
