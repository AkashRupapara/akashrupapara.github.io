import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">05. Resume</p>
          <h2 className="text-4xl font-bold text-white mb-4">Full Resume</h2>
          <p className="text-gray-500 mb-12 max-w-xl">
            5+ years of experience across AI security, full-stack engineering, and distributed systems.
          </p>
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl">
                <FileText size={24} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Akash Rupapara</h3>
                <p className="text-gray-500 text-sm">Senior Software Engineer · AI Security · Full-Stack</p>
              </div>
            </div>
            <a
              href="/Resume.pdf"
              download="Akash_Rupapara_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>

          <div className="p-8 text-center">
            <p className="text-gray-500 text-sm mb-6">Click below to download the full resume PDF</p>
            <a
              href="/Resume.pdf"
              download="Akash_Rupapara_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Download size={18} />
              Download Resume PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
