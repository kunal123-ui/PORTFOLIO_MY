import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal, Server, Cloud } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/BrandIcons';
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
              <p className="text-brand-blue font-semibold tracking-wider uppercase mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Kunal <span className="text-brand-blue">M.</span></h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Software Developer</h2>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 mb-6">
                <span className="flex items-center gap-1"><Terminal size={16} className="text-brand-blue" /> Frontend</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1"><Server size={16} className="text-brand-purple" /> Full Stack / MERN</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1"><Cloud size={16} className="text-brand-green" /> DevOps & Cloud</span>
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
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/kunal-m-cse" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-blue hover:scale-110 transition-all shadow-sm">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:kunal@example.com" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-blue hover:scale-110 transition-all shadow-sm">
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
            >
              {/* Profile Image Box */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                {/* Fallback avatar if no image */}
                <div className="text-slate-400 dark:text-slate-600 flex flex-col items-center">
                   <div className="w-32 h-32 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center mb-4">
                     <Terminal size={48} />
                   </div>
                   <p className="text-sm font-medium">Add profile.jpg to src/assets</p>
                </div>
                {/* Uncomment when image is added */}
                {/* <img src="/assets/profile.jpg" alt="Kunal M." className="w-full h-full object-cover" /> */}
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-card p-3 rounded-xl flex flex-col gap-1 shadow-lg border-l-4 border-l-brand-blue"
              >
                <span className="text-xs font-semibold text-slate-500">Frontend</span>
                <span className="font-bold text-sm">React • JS • CSS</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-12 glass-card p-3 rounded-xl flex flex-col gap-1 shadow-lg border-l-4 border-l-brand-purple"
              >
                <span className="text-xs font-semibold text-slate-500">Backend</span>
                <span className="font-bold text-sm">Node • MongoDB</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-2 glass-card p-3 rounded-xl flex flex-col gap-1 shadow-lg border-l-4 border-l-brand-green"
              >
                <span className="text-xs font-semibold text-slate-500">DevOps</span>
                <span className="font-bold text-sm">Docker • K8s • CI/CD</span>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
