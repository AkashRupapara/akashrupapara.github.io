import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Indeed Clone: Job Portal',
    description:
      'Microservices-based job portal featuring employer profiles, job postings, and a moderated review system. Built with distributed architecture using Kafka for inter-service communication and Redis for caching.',
    tags: ['React', 'Node.js', 'MongoDB', 'Kafka', 'Redis', 'Docker'],
    category: 'Full-Stack',
    logo: '/logos/indeed.svg',
    techLogos: ['/logos/mongo.svg', '/logos/kafka.svg', '/logos/redis.svg'],
    company: 'SJSU Project',
    github: 'https://github.com/hetjagani/Indeed-Clone',
  },
  {
    title: 'Uber Eats Clone: Food Delivery',
    description:
      'Full-stack food delivery platform with real-time order tracking, restaurant management, and payment integration. Microservices architecture with WebSocket-based live order updates.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Docker', 'Kubernetes'],
    category: 'Full-Stack',
    logo: '/logos/ubereats.svg',
    techLogos: ['/logos/postgres.svg', '/logos/redis.svg', '/logos/docker.svg'],
    company: 'SJSU Project',
    github: 'https://github.com/AkashRupapara/UberEats',
  },
  {
    title: 'Vaccine Management System',
    description:
      'Distributed healthcare platform for vaccine scheduling, inventory tracking, and patient record management. Role-based access for patients, clinicians, and administrators with real-time availability.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs'],
    category: 'Full-Stack',
    logo: '/logos/springboot.svg',
    techLogos: ['/logos/postgres.svg', '/logos/docker.svg', '/logos/typescript.svg'],
    company: 'SJSU Project',
    github: 'https://github.com/hetjagani/vaccine-ms',
  },
  {
    title: 'Ride Sharing App',
    description:
      'Full-stack ridesharing platform with real-time driver matching, trip tracking via Google Maps, and secure payments. Spring Boot microservices with React Native mobile app.',
    tags: ['React Native', 'Spring Boot', 'Java', 'Google Maps', 'PostgreSQL', 'Kubernetes'],
    category: 'Full-Stack',
    logo: '/logos/maps.svg',
    techLogos: ['/logos/springboot.svg', '/logos/postgres.svg', '/logos/kubernetes.svg'],
    company: 'SJSU Project',
    github: 'https://github.com/hetjagani/rideshare-app',
  },
  {
    title: 'AASHA: Hybrid Ambulance System (2020)',
    description:
      'Published IEEE research: intelligent emergency dispatch and routing system. Simulation model reduces post-accident EMS response time by ~3 min with 97% survival rate.',
    tags: ['Python', 'ML', 'Systems Design', 'Simulation', 'IEEE'],
    category: 'Research',
    logo: '/logos/ieee.svg',
    techLogos: ['/logos/python.svg'],
    company: 'IEEE Publication',
    link: 'https://ieeexplore.ieee.org/document/9004658',
  },
  {
    title: 'Fashion Recommendation Engine',
    description:
      'Unsupervised ML recommendation system using clustering algorithms. Data analytics pipeline with Python, TensorFlow, and Flask serving real-time fashion recommendations.',
    tags: ['Python', 'TensorFlow', 'Flask', 'ML', 'Clustering'],
    category: 'AI / ML',
    logo: '/logos/python.svg',
    techLogos: ['/logos/docker.svg'],
    company: 'VNurture Technologies',
  },
  {
    title: 'Block Coding EdTech Platform',
    description:
      'Regional language block coding platform adopted by 1,000+ students and teachers. 90% rendering performance improvement via Redux memoized selectors.',
    tags: ['React', 'Redux', 'EdTech', 'Performance'],
    category: 'Full-Stack',
    logoLabel: 'React',
    techLogos: ['/logos/typescript.svg'],
    company: 'Shriji Technoaspire',
  },
];

const categories = ['All', 'Full-Stack', 'AI / ML', 'Research'];

const accentMap = {
  'Full-Stack': { text: 'text-sky-400', border: 'hover:border-sky-500/30', bg: 'from-sky-500/10 to-blue-500/5', logoBg: 'bg-sky-500/10' },
  'Research':   { text: 'text-purple-400', border: 'hover:border-purple-500/30', bg: 'from-purple-500/10 to-pink-500/5', logoBg: 'bg-purple-500/10' },
  'AI / ML':    { text: 'text-pink-400', border: 'hover:border-pink-500/30', bg: 'from-pink-500/10 to-rose-500/5', logoBg: 'bg-pink-500/10' },
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">03. Projects</p>
          <h2 className="text-4xl font-bold text-white mb-4">Things I've Built</h2>
          <p className="text-gray-500 mb-10 max-w-xl">
            Side projects, school work, and published research - independently designed and built.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const accent = accentMap[project.category] || accentMap['Full-Stack'];
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br ${accent.bg} ${accent.border} transition-all duration-300 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 flex flex-col overflow-hidden`}
              >
                {/* Visual header */}
                <div className={`${accent.logoBg} border-b border-white/10 p-5 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {project.logoLabel ? (
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300 uppercase">{project.logoLabel}</span>
                      ) : (
                        <img
                          src={project.logo}
                          alt={project.company}
                          className="w-7 h-7 object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-300 text-xs font-medium">{project.company}</p>
                      <p className={`text-xs font-mono ${accent.text} uppercase tracking-wider`}>{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {(project.techLogos || []).map((src, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                        <img src={src} alt="" className="w-4 h-4 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${accent.text} hover:underline`}>
                        <Code2 size={13} />
                        GitHub
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${accent.text} hover:underline`}>
                        <ExternalLink size={13} />
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
