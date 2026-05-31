import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Fortinet',
    logo: '/logos/fortinet.svg',
    totalPeriod: 'Sep 2024 – Present · 1 yr 9 mos',
    location: 'Sunnyvale, CA',
    roles: [
      {
        role: 'Senior Software Engineer',
        period: 'Feb 2026 – Present',
        duration: '4 mos',
        type: 'Full-time',
        note: 'Promoted in first eligible cycle · Lacework → Fortinet acquisition',
        bullets: [
          'Building AI-powered cloud security infrastructure for enterprise threat detection at scale',
          'Architected agentic AI pipeline for alert triage - multi-step LLM reasoning, tool use, and contextual enrichment; reduced analyst investigation effort by 40%',
          'Distributed CNAPP backend systems for multi-cloud threat detection across 100+ enterprise customers',
          'gRPC microservices for multi-tenant workloads handling 5K+ concurrent requests',
          'Observability infrastructure - metrics, tracing, structured logging across the platform',
        ],
        tags: ['Java', 'gRPC', 'Agentic AI', 'LLM', 'CNAPP', 'RAG'],
      },
      {
        role: 'Full Stack Engineer',
        period: 'Sep 2024 – Jan 2026',
        duration: '1 yr 5 mos',
        type: 'Full-time',
        note: '6+ major features shipped across product, design, and security research',
        bullets: [
          'Full-stack ownership of customer-facing threat alert systems from ingestion to analyst UX',
          'Alert ingestion, correlation, and prioritization pipeline processing 10M+ events/day',
          'Interactive alert investigation UIs for enterprise security analysts',
          'Low-latency alert processing and throttling service to suppress false positive spikes',
          'RESTful APIs for alert management and investigation workflows',
        ],
        tags: ['React', 'TypeScript', 'Java', 'REST APIs', 'Security'],
      },
    ],
  },
  {
    company: 'Lacework',
    logo: '/logos/lacework.svg',
    totalPeriod: 'Jan 2023 – Aug 2024 · 1 yr 8 mos',
    location: 'Mountain View, CA',
    roles: [
      {
        role: 'Senior Software Engineer (IC4)',
        period: 'May 2024 – Aug 2024',
        duration: '4 mos',
        type: 'Full-time',
        note: 'On-call ownership across 1,500+ customers (~$100M ARR)',
        bullets: [
          'Alert details UI and API for contextual security investigation, reducing MTTI by 65%',
          'Alert throttling Python service to suppress false positive spikes',
          'CI/CD migration from Codefresh to GitHub Actions, achieving 3x faster build times',
          'Maintained test coverage via Jest, JUnit, and Cypress',
        ],
        tags: ['React', 'Python', 'GitHub Actions', 'Jest', 'Cypress'],
      },
      {
        role: 'Software Engineer (IC3)',
        period: 'Jan 2023 – May 2024',
        duration: '1 yr 5 mos',
        type: 'Full-time',
        note: 'Core contributor to CNAPP alerting platform (Sutter Hill & Google Ventures backed)',
        bullets: [
          'Cut alert pipeline processing time from 90-120 min to under 5 min (P95)',
          'MITRE ATT&CK framework integration into alert UI, driving 30% increase in user interaction',
          'Low-latency threat intelligence alert pipeline development',
          'Database query optimization and UI performance for high-volume alert views',
          'Delivered across React, TypeScript, Java, and Go in a microservice architecture',
        ],
        tags: ['React', 'TypeScript', 'Java', 'Go', 'MITRE ATT&CK'],
      },
    ],
  },
  {
    company: 'Meta',
    logo: '/logos/meta.svg',
    totalPeriod: 'May 2022 – Aug 2022 · 4 mos',
    location: 'Seattle, WA',
    roles: [
      {
        role: 'Software Engineer Intern',
        period: 'May 2022 – Aug 2022',
        duration: '4 mos',
        type: 'Internship',
        note: '"Exceeding Expectations" - highest intern performance rating · Fantasy Games team',
        bullets: [
          'View Player Profile feature - new full-stack addition to Fantasy Games (80M+ users)',
          'Pagination and UI redesign for high-data screens, improving performance by 30%',
          'Code refactoring and query optimization (7% improvement) for core app flows',
          '35% increase in UI interaction from game home after player profiles launch',
        ],
        tags: ['React', 'Hack', 'GraphQL', 'Full-Stack'],
      },
    ],
  },
  {
    company: 'SS8 Networks',
    logo: '/logos/ss8.png',
    totalPeriod: 'Jan 2022 – May 2022 · 5 mos',
    location: 'California, USA',
    roles: [
      {
        role: 'Software Engineer Intern',
        period: 'Jan 2022 – May 2022',
        duration: '5 mos',
        type: 'Internship',
        note: 'Distributed React applications and customer-driven UX improvements',
        bullets: [
          'Large-scale distributed React app development with microservices architecture',
          'UX redesign of 2 customer-requested features, working directly with customers',
          'Collaborated cross-functionally with a team of 5 including UX designers',
        ],
        tags: ['React', 'Microservices', 'UX'],
      },
    ],
  },
  {
    company: 'Shriji Technoaspire',
    logo: '/logos/shriji_banner.png',
    totalPeriod: 'May 2019 – Dec 2020 · 1 yr 8 mos',
    location: 'Gandhinagar, India',
    roles: [
      {
        role: 'Software Engineer',
        period: 'May 2019 – Dec 2020',
        duration: '1 yr 8 mos',
        type: 'Full-time',
        note: 'Early-career production web apps and EdTech platforms',
        bullets: [
          'Smart electric meter web app for electricity usage analysis and home automation',
          'Regional language block coding platform for 1,000+ high school students and teachers',
          '90% rendering performance improvement via Redux memoized selectors',
        ],
        tags: ['React', 'Redux', 'Python', 'EdTech'],
      },
    ],
  },
];

function RoleRow({ role, isFirst, isLast }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`relative ${!isLast ? 'pb-6' : ''}`}>
      {/* Vertical line connecting roles */}
      {!isLast && (
        <div className="absolute left-[7px] top-5 bottom-0 w-px bg-white/10" />
      )}

      <div className="flex gap-4">
        {/* Small dot */}
        <div className="flex-shrink-0 mt-1.5">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-indigo-500/60 bg-gray-950" />
        </div>

        <div className="flex-1 min-w-0">
          <button
            onClick={() => setOpen(v => !v)}
            className="w-full text-left group"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-indigo-400 transition-colors">
                  {role.role}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {role.type} · {role.period} · {role.duration}
                </p>
                {role.note && (
                  <p className="text-gray-600 text-xs mt-1 italic">{role.note}</p>
                )}
              </div>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 group-hover:text-gray-400 flex-shrink-0 mt-0.5 transition-colors"
              >
                <ChevronDown size={15} />
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <ul className="mt-3 space-y-1.5">
                  {role.bullets.map(b => (
                    <li key={b} className="text-gray-400 text-sm flex gap-2.5">
                      <span className="text-indigo-500 mt-1 flex-shrink-0 text-xs">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {role.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
    >
      {/* Company header */}
      <div className="flex gap-4 items-start p-6 border-b border-white/10">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-10 h-10 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-base">{exp.company}</h3>
          <div className="flex items-center gap-3 mt-0.5 text-gray-500 text-xs flex-wrap">
            <span>{exp.totalPeriod}</span>
            <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="p-6 pt-5">
        {exp.roles.map((role, i) => (
            <RoleRow
              key={role.role}
              role={role}
              isFirst={i === 0}
              isLast={i === exp.roles.length - 1}
            />
          ))}
        </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black/20">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">02. Experience</p>
          <h2 className="text-4xl font-bold text-white mb-4">Where I've Worked</h2>
          <p className="text-gray-500 mb-10">Engineering is a team sport. Click any role to see what we built together.</p>

          {/* Key highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {[
              { value: '100+', label: 'Enterprise Customers', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
              { value: '10M+', label: 'Events / Day', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
              { value: '5K+', label: 'Concurrent Requests', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
              { value: '5+ yrs', label: 'Experience', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
            ].map(({ value, label, color, bg }) => (
              <div key={label} className={`${bg} border rounded-xl p-4 text-center`}>
                <p className={`text-xl font-bold ${color}`}>{value}</p>
                <p className="text-gray-500 text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
