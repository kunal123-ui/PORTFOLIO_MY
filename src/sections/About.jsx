import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, GitMerge } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Passionate Developer Who Loves to Build</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science and Engineering student with hands-on experience in full-stack development, DevOps, cloud computing and application deployment. I enjoy building responsive user interfaces, developing REST APIs, working with databases and automating deployment workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-brand-blue"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Code2 className="text-brand-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-slate-800 dark:text-slate-200">Frontend</h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-2 font-medium">
              <li>Modern UI</li>
              <li>Responsive Apps</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-brand-purple"
          >
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
              <Database className="text-brand-purple" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-slate-800 dark:text-slate-200">Full Stack</h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-2 font-medium">
              <li>REST APIs</li>
              <li>Authentication</li>
              <li>Databases</li>
              <li>Node.js / MongoDB</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-brand-green"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
              <GitMerge className="text-brand-green" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-slate-800 dark:text-slate-200">DevOps</h3>
            <ul className="text-slate-600 dark:text-slate-400 space-y-2 font-medium">
              <li>Docker Containerization</li>
              <li>CI/CD Pipelines</li>
              <li>Cloud Deployment</li>
              <li>Kubernetes</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
