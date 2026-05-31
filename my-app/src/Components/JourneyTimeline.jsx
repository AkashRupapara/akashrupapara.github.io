import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Code2, GraduationCap, GitBranch, MapPin, Calendar } from 'lucide-react';

const timelineEntries = [
  {
    id: 'edu-undergrad',
    branch: 'Education',
    icon: GraduationCap,
    accent: 'text-sky-300',
    badge: 'bg-sky-500/10 border-sky-500/20',
    period: '2016 - 2020',
    title: 'BTech Information & Communication Technology',
    organization: 'Ahmedabad University',
    summary: 'Built the foundation in algorithms, systems, and applied software engineering.',
    detail:
      'Coursework included advanced data structures and algorithms, software engineering, big data analytics, and machine learning.',
    tags: ['Algorithms', 'Software Engineering', 'Machine Learning'],
  },
  {
    id: 'experience-shriji',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: '2019 - 2020',
    title: 'Software Engineer',
    organization: 'Shriji Technoaspire',
    summary: 'Shipped early production web apps and performance work.',
    detail:
      'Built a regional-language block coding platform for 1,000+ students and teachers, plus a smart electric meter web app. Improved rendering performance by 90% with Redux memoized selectors.',
    tags: ['React', 'Redux', 'EdTech', 'Performance'],
  },
  {
    id: 'project-aasha',
    branch: 'Projects',
    icon: Code2,
    accent: 'text-pink-300',
    badge: 'bg-pink-500/10 border-pink-500/20',
    period: '2020 · During BTech',
    title: 'AASHA Hybrid Ambulance System (2020)',
    organization: 'IEEE Publication',
    summary: 'Research project centered on emergency response routing.',
    detail:
      'Published IEEE research on intelligent emergency dispatch and routing, with a simulation model that reduced post-accident response time by about 3 minutes.',
    tags: ['Python', 'ML', 'Simulation', 'IEEE'],
  },
  {
    id: 'edu-grad',
    branch: 'Education',
    icon: GraduationCap,
    accent: 'text-sky-300',
    badge: 'bg-sky-500/10 border-sky-500/20',
    period: '2021 - 2022',
    title: 'MS Computer Software Engineering',
    organization: 'San Jose State University',
    summary: 'Expanded into distributed systems and enterprise platforms.',
    detail:
      'Focused on enterprise distributed systems, data mining, and enterprise software platforms while building real-world microservices projects.',
    tags: ['Distributed Systems', 'Data Mining', 'Enterprise Software'],
  },
  {
    id: 'project-sjsu',
    branch: 'Projects',
    icon: Code2,
    accent: 'text-pink-300',
    badge: 'bg-pink-500/10 border-pink-500/20',
    period: '2021 - 2022',
    title: 'Graduate Microservices Projects',
    organization: 'San Jose State University',
    summary: 'Built several portfolio projects using full-stack and distributed patterns.',
    detail:
      'Created the Indeed Clone, Uber Eats Clone, Ride Sharing App, and Vaccine Management System with microservices, messaging, and production-style architecture.',
    tags: ['React', 'Node.js', 'Spring Boot', 'Microservices'],
  },
  {
    id: 'experience-meta',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: 'May 2022 - Aug 2022',
    title: 'Software Engineer Intern',
    organization: 'Meta',
    summary: 'Shipped full-stack improvements for Facebook Fantasy Games.',
    detail:
      'Delivered the View Player Profile feature, redesigned high-data screens, and improved app performance while working across React, Hack, and GraphQL.',
    tags: ['React', 'Hack', 'GraphQL'],
  },
  {
    id: 'experience-ss8',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: 'Jan 2022 - May 2022',
    title: 'Software Engineer Intern',
    organization: 'SS8 Networks',
    summary: 'Worked on distributed React applications and customer-driven UX.',
    detail:
      'Built distributed UI features, redesigned customer-requested experiences, and collaborated directly with UX and engineering teammates.',
    tags: ['React', 'UX', 'Microservices'],
  },
  {
    id: 'experience-lacework-ic3',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: 'Jan 2023 - May 2024',
    title: 'Software Engineer (IC3)',
    organization: 'Lacework',
    summary: 'Core contributor to the CNAPP alerting platform.',
    detail:
      'Cut alert pipeline processing time from 90-120 minutes to under 5 minutes at P95, integrated MITRE ATT&CK into the UI, and improved workflows across React, TypeScript, Java, and Go.',
    tags: ['React', 'TypeScript', 'Java', 'Go'],
  },
  {
    id: 'experience-lacework-ic4',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: 'May 2024 - Aug 2024',
    title: 'Senior Software Engineer (IC4)',
    organization: 'Lacework',
    summary: 'Handled customer-facing alert workflows and infrastructure work.',
    detail:
      'Owned alert details UI and API, reduced MTTI by 65%, and migrated CI/CD from Codefresh to GitHub Actions for faster builds.',
    tags: ['React', 'Python', 'GitHub Actions'],
  },
  {
    id: 'experience-fortinet-ff',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: 'Sep 2024 - Jan 2026',
    title: 'Full Stack Engineer',
    organization: 'Fortinet (Lacework)',
    summary: 'Shipped major features across product, design, and security research.',
    detail:
      'Delivered alert ingestion, prioritization, investigation UX, and low-latency alert processing for high-volume enterprise security workflows.',
    tags: ['React', 'TypeScript', 'Java', 'REST APIs'],
  },
  {
    id: 'experience-fortinet-sse',
    branch: 'Experience',
    icon: Briefcase,
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
    period: 'Feb 2026 - Present',
    title: 'Senior Software Engineer',
    organization: 'Fortinet',
    summary: 'Leading AI-powered cloud security infrastructure.',
    detail:
      'Building agentic AI workflows for alert triage, distributed CNAPP backend systems, and observability across the platform.',
    tags: ['Java', 'gRPC', 'Agentic AI', 'CNAPP'],
  },
];

const branchMeta = {
  Education: {
    label: 'Education',
    accent: 'text-sky-300',
    badge: 'bg-sky-500/10 border-sky-500/20',
  },
  Projects: {
    label: 'Projects',
    accent: 'text-pink-300',
    badge: 'bg-pink-500/10 border-pink-500/20',
  },
  Experience: {
    label: 'Experience',
    accent: 'text-emerald-300',
    badge: 'bg-emerald-500/10 border-emerald-500/20',
  },
};

export default function JourneyTimeline() {
  const branchOrder = ['All', 'Education', 'Projects', 'Experience'];
  const [activeBranch, setActiveBranch] = useState('All');
  const [selectedId, setSelectedId] = useState(timelineEntries[0].id);
  const detailRef = useRef(null);
  const hasInteractedRef = useRef(false);
  const visibleEntries = useMemo(
    () => (activeBranch === 'All' ? timelineEntries : timelineEntries.filter(entry => entry.branch === activeBranch)),
    [activeBranch]
  );
  const selectedEntry =
    visibleEntries.find(entry => entry.id === selectedId) ||
    visibleEntries[0] ||
    timelineEntries[0];

  useEffect(() => {
    setActiveBranch('All');
    setSelectedId(timelineEntries[0].id);
  }, []);

  useEffect(() => {
    if (!visibleEntries.some(entry => entry.id === selectedId) && visibleEntries[0]) {
      setSelectedId(visibleEntries[0].id);
    }
  }, [activeBranch, selectedId, visibleEntries]);

  useEffect(() => {
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;
      return;
    }
    if (!detailRef.current) return;
    const frame = window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [selectedId, activeBranch]);

  const handleSelectEntry = (entryId) => {
    setSelectedId(entryId);
  };

  return (
    <section id="journey" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.10),_transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm tracking-widest text-indigo-400 uppercase mb-3">07. Journey</p>
          <h2 className="text-4xl font-bold text-white mb-4">A horizontal timeline of growth</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Scroll through the path from education to projects and experience, then click any node to expand the details.
          </p>
        </motion.div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <GitBranch size={16} className="text-indigo-400" />
              <span>Scroll horizontally to move through the timeline</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {branchOrder.map(branch => {
                const isActive = activeBranch === branch;
                const meta = branch === 'All' ? null : branchMeta[branch];

                return (
                  <button
                    key={branch}
                    type="button"
                    onClick={() => {
                      hasInteractedRef.current = true;
                      setActiveBranch(branch);
                    }}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition-colors ${
                      isActive
                        ? 'border-indigo-400/50 bg-indigo-500/15 text-indigo-200'
                        : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {meta ? <span className={`h-2 w-2 rounded-full ${meta.accent.replace('text-', 'bg-')}`} /> : <span className="h-2 w-2 rounded-full bg-gray-500" />}
                    {branch}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="relative min-w-[1200px] px-4 pt-14 pb-8">
              <div className="absolute left-4 right-4 top-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex items-start gap-6">
                {visibleEntries.map((entry, index) => {
                  const isActive = entry.id === selectedId;
                  const meta = branchMeta[entry.branch];
                  const Icon = entry.icon;

                  return (
                    <motion.button
                      key={entry.id}
                      type="button"
                      onClick={() => {
                        hasInteractedRef.current = true;
                        handleSelectEntry(entry.id);
                      }}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="group relative flex w-[220px] shrink-0 snap-start flex-col items-center text-left"
                    >
                      <div className="mb-8 flex h-12 items-center justify-center">
                        <span className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 ${meta.badge} ${isActive ? 'ring-4 ring-indigo-400/30' : 'ring-0'} transition-all duration-200`}>
                          <Icon size={18} className={isActive ? 'text-white' : meta.accent} />
                        </span>
                      </div>

                      <div
                        className={`w-full rounded-2xl border px-4 py-5 transition-all duration-200 ${
                          isActive
                            ? 'border-indigo-400/40 bg-white/10 shadow-lg shadow-black/30 -translate-y-1'
                            : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">{entry.period}</p>
                        <p className={`mt-3 text-xs font-medium uppercase tracking-[0.24em] ${meta.accent}`}>{entry.branch}</p>
                        <h3 className="mt-2 text-base font-semibold text-white leading-snug">{entry.title}</h3>
                        <p className="mt-1 text-sm text-gray-400">{entry.organization}</p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-400">{entry.summary}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
          <motion.div
            ref={detailRef}
            key={selectedEntry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
              className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${selectedEntry.badge} ${selectedEntry.accent}`}>
                      <span className="h-2 w-2 rounded-full bg-current" />
                      {selectedEntry.branch}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                      <Calendar size={13} />
                      {selectedEntry.period}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                      <MapPin size={13} />
                      {selectedEntry.organization}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-white">{selectedEntry.title}</h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">{selectedEntry.detail}</p>

                  {selectedEntry.branch !== 'Education' && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {selectedEntry.branch === 'Experience' && (
                        <button
                          type="button"
                          onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/15"
                        >
                          View full experience
                        </button>
                      )}
                      {selectedEntry.branch === 'Projects' && (
                        <button
                          type="button"
                          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                          className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-200 transition-colors hover:border-pink-500/40 hover:bg-pink-500/15"
                        >
                          View project details
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="lg:w-72">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-gray-500 mb-3">Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
