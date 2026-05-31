import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const coreSkills = ['Java', 'TypeScript', 'React', 'Go', 'Python', 'gRPC', 'Agentic AI', 'RAG', 'LLM Orchestration', 'Distributed Systems', 'AWS', 'Kubernetes'];

const skills = [
  { category: 'Languages', items: ['Java', 'TypeScript', 'Python', 'Go', 'JavaScript'] },
  { category: 'Frontend', items: ['React', 'Redux', 'Tailwind CSS', 'Cypress', 'Jest'] },
  { category: 'Backend', items: ['gRPC', 'REST APIs', 'Microservices', 'Spring Boot', 'Flask'] },
  { category: 'AI / Agentic', items: ['Agentic Workflows', 'RAG', 'LangChain / LangGraph', 'Anthropic SDK', 'Prompt Engineering', 'TensorFlow'] },
  { category: 'Cloud & Infra', items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
  { category: 'Observability', items: ['Metrics', 'Distributed Tracing', 'Structured Logging', 'Datadog'] },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">01. About Me</p>
          <h2 className="text-4xl font-bold text-white mb-16">Who I Am</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
              {/* <p>
                Senior Software Engineer at{' '}
                <span className="text-indigo-400 font-medium">Fortinet</span> building
                AI-powered cloud security infrastructure. I work at the intersection of{' '}
                <span className="text-white font-medium">GenAI, distributed systems, and enterprise security</span>,
                shipping production systems that serve 100+ enterprise customers at scale.
              </p>
              <p>
                My day-to-day spans LLM-assisted alert summarization, multi-cloud CNAPP backends,
                gRPC microservices at 5K+ concurrent requests, and full-stack analyst UX -
                from raw event ingestion to the investigation UI a security analyst sees.
              </p>
              <p>
                I care about systems that are observable, APIs that are clean, and
                code that doesn't become someone else's incident at 2am.
              </p> */}
              <p>
                Welcome 👋 I'm a{' '}
                <span className="text-white font-semibold italic">Senior Software Engineer</span>{' '}
                passionate about building systems that actually matter - scalable, observable,
                and production-ready. Currently at{' '}
                <span className="text-indigo-400 font-semibold">Fortinet</span>, where I build
                AI-powered cloud security infrastructure protecting 100+ enterprise customers.
              </p>
              <p>
                My day-to-day spans LLM-assisted alert summarization, multi-cloud CNAPP backends,
                gRPC microservices at 5K+ concurrent requests, and full-stack analyst UX -
                from raw event ingestion to the investigation UI a security analyst sees.
              </p>
              <p>
                I'm particularly drawn to the intersection of{' '}
                <span className="text-white font-semibold">GenAI and distributed systems</span> -
                designing agentic pipelines, multi-cloud backends, and full-stack security tooling
                that security analysts and engineers rely on daily. From raw event ingestion to the
                investigation UI a security analyst sees at 2am - I own the full stack.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-white font-semibold text-lg">At a glance</h3>
              {[
                { label: 'Current role', value: 'Senior Software Engineer @ Fortinet' },
                { label: 'Location', value: 'Milpitas, CA' },
                { label: 'Education', value: 'MS Computer Software Eng, SJSU' },
                { label: 'Focus areas', value: 'AI Security, Distributed Systems, GenAI' },
                { label: 'Email', value: 'akash.rupapara@gmail.com' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-indigo-400 text-xs font-mono uppercase tracking-wider">{label}</span>
                  <span className="text-gray-200 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
<FadeIn delay={0.15}>
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-6">What drives me</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-20">
            {[
              { emoji: '🧩', title: 'Hard problems', desc: 'Curious and energized by systems challenges - the harder the problem, the more interesting the engineering.' },
              { emoji: '🏗️', title: 'Design first', desc: 'Strong emphasis on designing and modeling before building - clean architecture saves everyone time.' },
              { emoji: '🤝', title: 'Collaboration & consensus', desc: 'Engineering is a team sport. I thrive in cross-functional teams and value open communication.' },
              { emoji: '✨', title: 'Craftsmanship', desc: 'Understanding abstractions deeply, writing code that\'s readable and maintainable long after it ships.' },
            ].map(({ emoji, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors duration-300"
              >
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-white font-semibold text-xl mb-4">Skills & Technologies</h3>
          <p className="text-gray-500 text-sm mb-6">Core stack I work with day-to-day:</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {coreSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">Full breakdown:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ category, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-500/30 transition-colors duration-300"
              >
                <p className="text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
