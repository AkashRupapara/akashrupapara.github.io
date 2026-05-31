import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science',
    field: 'Computer Software Engineering',
    school: 'San Jose State University',
    location: 'San Jose, CA',
    period: 'Jan 2021 - Dec 2022',
    logo: '/logos/sjsu.svg',
    logoBg: '#ffffff',
    highlights: [
      'Tuition Fee Waiver - awarded for academic merit',
      'Graduate Teaching Assistant - Fundamentals of Computer Programming',
      'Enterprise Distributed Systems - microservices, event-driven architecture, fault tolerance',
      'Full-Stack Development - React, REST APIs, modern web engineering practices',
      'Software Engineering - system design, design patterns, Agile & CI/CD practices',
      'Data Mining & Machine Learning - foundations directly applied in agentic AI pipelines',
      'Cloud Computing & Big Data - AWS, Kafka, scalable data pipelines, real-time processing',
    ],
    skills: ['Java', 'React', 'Python', 'Distributed Systems', 'System Design', 'ML', 'Cloud', 'CI/CD', 'Microservices', 'REST APIs'],
    color: 'from-blue-500/10 to-indigo-500/5',
    accent: 'border-blue-500/30',
    tag: 'text-blue-400',
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Information and Communication Technology',
    school: 'Ahmedabad University',
    location: 'Ahmedabad, India',
    period: '2016 - 2020',
    logo: '/logos/ahduni.png',
    logoBg: '#ffffff',
    highlights: [
      'IEEE Student Branch - Web Manager & Committee Member',
      'Teaching Assistant - Fundamentals of Computer Programming',
      'Published IEEE research: AASHA Hybrid Ambulance System (IEEE Xplore)',
      'Data Structures & Algorithms - foundation for high-performance system design',
      'Web Engineering - full-stack development with React, REST APIs, and databases',
      'Machine Learning & Big Data Analytics - applied in recommendation systems and data pipelines',
      'Database Systems - SQL/NoSQL, query optimization (directly used at Lacework/Fortinet)',
    ],
    skills: ['React', 'Java', 'Python', 'SQL', 'REST APIs', 'ML', 'Algorithms'],
    color: 'from-purple-500/10 to-pink-500/5',
    accent: 'border-purple-500/30',
    tag: 'text-purple-400',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-black/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-4xl font-bold text-white mb-14">Academic Background</h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border ${edu.accent} bg-gradient-to-br ${edu.color} overflow-hidden hover:border-white/20 transition-all duration-300`}
            >
              <div className="flex gap-4 items-center p-6 border-b border-white/10">
                <div
                  className="flex-shrink-0 h-14 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden px-3"
                  style={{ minWidth: '90px', backgroundColor: edu.logoBg }}
                >
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="h-8 w-auto object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base">{edu.school}</h3>
                  <p className={`${edu.tag} font-medium text-sm mt-0.5`}>
                    {edu.degree} in {edu.field}
                  </p>
                  <div className="flex items-center gap-4 mt-1.5 text-gray-500 text-xs flex-wrap">
                    <span className="flex items-center gap-1"><Calendar size={11} />{edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} />{edu.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-5">
                  {edu.highlights.map(h => (
                    <li key={h} className="text-gray-400 text-sm flex gap-2.5">
                      <span className={`${edu.tag} mt-1 flex-shrink-0 text-xs`}>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {edu.skills && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {edu.skills.map(s => (
                      <span key={s} className={`text-xs px-2.5 py-1 rounded-md bg-white/5 ${edu.tag} border border-white/10`}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

