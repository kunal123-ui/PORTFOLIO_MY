import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, CloudCog } from 'lucide-react';
import { getTechIcon } from '../config/iconMap';

const DomainCard = ({ title, description, technologies, icon, colorClass, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className={`glass-card p-8 rounded-2xl border-t-4 ${colorClass} flex flex-col h-full group`}
    >
      <div className="mb-6 bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
        {description}
      </p>
      <div>
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <motion.span 
              key={tech} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + (i * 0.1) }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium shadow-sm hover:shadow-md cursor-default transition-shadow"
            >
              <span className="text-sm">{getTechIcon(tech)}</span>
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ThreeDomains = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-blue/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-purple/5 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Three Domains. <br className="md:hidden" />One Developer.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-green mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Delivering end-to-end software solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DomainCard 
            title="Frontend Development"
            description="Building responsive, modern, and user-friendly interfaces that provide an exceptional user experience."
            technologies={['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS']}
            icon={<Layout size={32} className="text-brand-blue" />}
            colorClass="border-t-brand-blue hover:shadow-brand-blue/20"
            delay={0.1}
          />
          <DomainCard 
            title="Full Stack Development"
            description="Building complete web applications from frontend interfaces to robust backend architectures and databases."
            technologies={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT']}
            icon={<Server size={32} className="text-brand-purple" />}
            colorClass="border-t-brand-purple hover:shadow-brand-purple/20"
            delay={0.2}
          />
          <DomainCard 
            title="DevOps & Cloud"
            description="Automating development, deployment, and application infrastructure for reliable and scalable operations."
            technologies={['Git', 'GitHub', 'Docker', 'Jenkins', 'GitHub Actions', 'Linux', 'AWS', 'Kubernetes', 'CI/CD']}
            icon={<CloudCog size={32} className="text-brand-green" />}
            colorClass="border-t-brand-green hover:shadow-brand-green/20"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeDomains;
