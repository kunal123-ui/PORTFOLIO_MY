import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Experience = () => {
  const { data } = usePortfolio();
  const experience = data.experience || [];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Briefcase className="text-brand-blue" />
        Experience
      </h3>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
        {experience.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 group-[.is-active]:bg-brand-blue text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">{exp.title}</h4>
                <span className="text-sm font-medium text-brand-blue bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>
              <p className="font-medium text-slate-600 dark:text-slate-400 mb-3">{exp.company}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
        {experience.length === 0 && <p className="text-slate-500">No experience records found.</p>}
      </div>
    </div>
  );
};

export default Experience;
