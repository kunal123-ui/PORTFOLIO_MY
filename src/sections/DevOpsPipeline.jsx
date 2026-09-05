import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Settings, CheckCircle2, Box, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../components/BrandIcons';

const DevOpsPipeline = () => {
  const steps = [
    { icon: <Code2 size={24} />, label: "Code", color: "text-blue-500", delay: 0 },
    { icon: <Github size={24} />, label: "GitHub", color: "text-slate-700 dark:text-slate-300", delay: 0.2 },
    { icon: <PlayCircle size={24} />, label: "Actions", color: "text-purple-500", delay: 0.4 },
    { icon: <CheckCircle2 size={24} />, label: "Build/Test", color: "text-green-500", delay: 0.6 },
    { icon: <Box size={24} />, label: "Docker", color: "text-blue-400", delay: 0.8 },
    { icon: <Settings size={24} />, label: "Kubernetes", color: "text-blue-600", delay: 1.0 },
    { icon: <Globe size={24} />, label: "Live Site", color: "text-emerald-500", delay: 1.2 },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Code to Production</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This portfolio isn't just a design—it's a fully containerized application deployed via automated CI/CD pipelines to a Kubernetes cluster.
          </p>
        </div>

        <div className="relative py-12">
          {/* Animated flowing line background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block rounded-full overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-green to-transparent"
             />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative z-10">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className="flex flex-col items-center group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg ${step.color} group-hover:scale-110 group-hover:border-brand-green group-hover:shadow-brand-green/20 transition-all z-10`}>
                    {step.icon}
                  </div>
                  <span className="mt-4 font-medium text-sm text-slate-300 whitespace-nowrap">{step.label}</span>
                </motion.div>
                
                {/* Mobile arrows */}
                {index < steps.length - 1 && (
                  <div className="md:hidden text-brand-green animate-pulse">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="font-bold text-brand-blue mb-2">Automated CI/CD</h4>
            <p className="text-sm text-slate-400">GitHub Actions runs linting, building, and Docker image creation on every PR and merge to main.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="font-bold text-brand-blue mb-2">Containerized SPA</h4>
            <p className="text-sm text-slate-400">Multi-stage Dockerfile builds the React app and serves it via Nginx with proper routing rules.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
            <h4 className="font-bold text-brand-blue mb-2">Kubernetes Deployed</h4>
            <p className="text-sm text-slate-400">Deployed across replicas with liveness/readiness probes, resource limits, and ingress configuration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quick icons not imported above
const Code2 = ({size, className}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const Globe = ({size, className}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;

export default DevOpsPipeline;
