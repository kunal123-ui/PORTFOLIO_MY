import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Layers, Cpu, DatabaseZap } from 'lucide-react';

const WhatIBuild = () => {
  const items = [
    {
      title: "Frontend Applications",
      desc: "Responsive interfaces, React applications, and modern UI/UX design.",
      icon: <MonitorPlay className="text-brand-blue" size={28} />
    },
    {
      title: "Full Stack Systems",
      desc: "End-to-end solutions combining React frontends with Node/Express backends.",
      icon: <Layers className="text-brand-purple" size={28} />
    },
    {
      title: "REST APIs & Backend",
      desc: "Secure authentication, database integration, and business logic.",
      icon: <DatabaseZap className="text-orange-500" size={28} />
    },
    {
      title: "DevOps Infrastructure",
      desc: "Docker containerization, CI/CD pipelines, and cloud deployment.",
      icon: <Cpu className="text-brand-green" size={28} />
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Build</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 group"
            >
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
