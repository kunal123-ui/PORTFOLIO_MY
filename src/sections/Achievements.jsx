import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Achievements = () => {
  const { data } = usePortfolio();
  const achievements = data.achievements || [];

  if (achievements.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 dark:bg-brand-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((ach, index) => (
            <motion.div 
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center text-center max-w-sm group border-t-4 border-t-orange-400"
            >
              <div className="mb-4 text-orange-400 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                <Trophy size={48} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{ach.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
