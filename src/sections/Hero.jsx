import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal, Server, Cloud, Globe, Box, Settings } from 'lucide-react';
import { getTechIcon } from '../config/iconMap';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-200 dark:bg-slate-800 flex-shrink-0">
                  <img src="/profile.jpg" alt="Kunal M." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-brand-blue font-semibold tracking-wider uppercase mb-2">Hello, I'm</p>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Kunal <span className="text-brand-blue">M.</span></h1>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Software Developer</h2>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 mb-6">
                <span className="flex items-center gap-1"><Terminal size={16} className="text-brand-blue" /> Frontend</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1"><Server size={16} className="text-brand-purple" /> Full Stack</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1"><Cloud size={16} className="text-brand-green" /> DevOps</span>
              </div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I build modern web applications, scalable backend systems and automated deployment workflows. 
                <strong className="block mt-2 text-slate-800 dark:text-slate-200">Design • Develop • Deploy</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <ScrollLink 
                  to="projects" 
                  smooth={true} 
                  offset={-70}
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  View My Work <ArrowRight size={18} />
                </ScrollLink>
                <a 
                  href="/resume.pdf" 
                  download
                  className="w-full sm:w-auto px-8 py-3.5 glass-card hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Download Resume
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-5">
                <a href="https://github.com/kunal123-ui" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-blue hover:scale-110 transition-all shadow-sm">
                  <SiGithub size={22} className="text-slate-800 dark:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/kunal-m-cse" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-[#0A66C2] hover:scale-110 transition-all shadow-sm">
                  <SiLinkedin size={22} className="text-[#0A66C2]" />
                </a>
                <a href="mailto:kunal@example.com" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-purple hover:scale-110 transition-all shadow-sm">
                  <Mail size={22} className="text-slate-800 dark:text-white" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Tech Pipeline Hierarchy */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm mx-auto glass-card rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-slate-700/50 flex flex-col items-center"
            >
              
              {/* Row 1: Languages/Frameworks */}
              <div className="flex justify-between items-end w-full mb-2">
                <div className="flex flex-col items-center group cursor-pointer">
                  <motion.div whileHover={{ y: -5, scale: 1.1 }} className="text-4xl mb-2">{getTechIcon('React')}</motion.div>
                  <span className="text-xs font-semibold text-slate-500">React</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <motion.div whileHover={{ y: -5, scale: 1.1 }} className="text-4xl mb-2">{getTechIcon('JavaScript')}</motion.div>
                  <span className="text-xs font-semibold text-slate-500">JS</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <motion.div whileHover={{ y: -5, scale: 1.1 }} className="text-4xl mb-2">{getTechIcon('Node.js')}</motion.div>
                  <span className="text-xs font-semibold text-slate-500">Node</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="w-full flex justify-center mb-4 relative">
                 <div className="w-3/4 h-[2px] bg-slate-200 dark:bg-slate-700 absolute top-0"></div>
                 <div className="w-[2px] h-6 bg-slate-200 dark:bg-slate-700"></div>
                 <div className="w-[2px] h-3 bg-slate-200 dark:bg-slate-700 absolute top-0 left-[12.5%]"></div>
                 <div className="w-[2px] h-3 bg-slate-200 dark:bg-slate-700 absolute top-0 right-[12.5%]"></div>
              </div>

              {/* Build Step */}
              <div className="flex flex-col items-center mb-4">
                <Box size={24} className="text-slate-400 mb-1" />
                <span className="text-sm font-semibold">Build Apps</span>
              </div>

              <div className="w-[2px] h-6 bg-slate-200 dark:bg-slate-700 mb-4"></div>

              {/* Docker */}
              <div className="flex flex-col items-center mb-4 group cursor-pointer">
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl mb-1">{getTechIcon('Docker')}</motion.div>
                <span className="text-xs font-semibold text-slate-500">Docker</span>
              </div>

              <div className="w-[2px] h-6 bg-slate-200 dark:bg-slate-700 mb-4"></div>

              {/* K8s */}
              <div className="flex flex-col items-center mb-4 group cursor-pointer">
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl mb-1">{getTechIcon('Kubernetes')}</motion.div>
                <span className="text-xs font-semibold text-slate-500">Kubernetes</span>
              </div>

              <div className="w-[2px] h-6 bg-slate-200 dark:bg-slate-700 mb-4"></div>

              {/* AWS */}
              <div className="flex flex-col items-center mb-4 group cursor-pointer">
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl mb-1">{getTechIcon('AWS')}</motion.div>
                <span className="text-xs font-semibold text-slate-500">AWS</span>
              </div>

              <div className="w-[2px] h-6 bg-slate-200 dark:bg-slate-700 mb-4"></div>

              {/* Live */}
              <motion.div 
                animate={{ boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0)', '0 0 0 10px rgba(34, 197, 94, 0.2)', '0 0 0 0 rgba(34, 197, 94, 0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full font-bold uppercase text-sm tracking-wider"
              >
                LIVE <Globe size={18} />
              </motion.div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
