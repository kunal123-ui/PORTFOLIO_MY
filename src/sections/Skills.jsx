import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { getTechIcon } from '../config/iconMap';

const Skills = () => {
  const { data } = usePortfolio();
  const skills = data.skills || [];
  
  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS', 'CLOUD', 'TOOLS'];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredSkills = activeCategory === 'ALL' 
    ? skills 
    : skills.filter(skill => skill.category.toUpperCase() === activeCategory);

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
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default shadow-sm hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <div className="text-5xl mb-4 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300">
                  {getTechIcon(skill.name)}
                </div>
                <span className="font-bold text-slate-800 dark:text-slate-200 mb-1">
                  {skill.name}
                </span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredSkills.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500">No skills found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
