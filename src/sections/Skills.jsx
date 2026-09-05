import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { data } = usePortfolio();
  const skills = data.skills || [];
  
  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS', 'CLOUD', 'TOOLS'];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredSkills = activeCategory === 'ALL' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 dark:bg-brand-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="flex flex-wrap justify-center gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="glass-card px-6 py-4 rounded-xl flex items-center justify-center gap-2 group cursor-default"
              >
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-blue transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredSkills.length === 0 && (
            <p className="text-slate-500 mt-8">No skills found in this category.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
