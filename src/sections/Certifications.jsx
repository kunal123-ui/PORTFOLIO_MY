import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Certifications = () => {
  const { data } = usePortfolio();
  const certifications = data.certifications || [];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-all border-l-4 border-l-brand-green group"
            >
              <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-brand-green group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">{cert.name}</h3>
            </motion.div>
          ))}
          {certifications.length === 0 && <p className="col-span-full text-center text-slate-500">No certifications found.</p>}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
