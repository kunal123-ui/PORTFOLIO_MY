import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Search } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { usePortfolio } from '../context/PortfolioContext';
import { getTechIcon } from '../config/iconMap';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 right-0 flex justify-end p-4 z-10">
          <button onClick={onClose} className="p-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors backdrop-blur-md">
            <X size={24} className="text-slate-800 dark:text-white" />
          </button>
        </div>

        <div className="p-6 md:p-10 pt-0">
          {project.image ? (
            <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-slate-200 dark:bg-slate-800">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full h-64 rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-brand-blue to-brand-purple flex items-center justify-center text-white">
               <span className="text-2xl font-bold">{project.title}</span>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
              <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium">
                  <SiGithub size={18} className="text-slate-800 dark:text-white" /> GitHub
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white rounded-lg transition-colors font-medium">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">Overview</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                      <span className="text-sm">{getTechIcon(tech)}</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const { data } = usePortfolio();
  const projects = data.projects || [];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories, adding 'All' at the beginning
  const uniqueCategories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title?.toLowerCase().includes(searchLower) ||
      project.description?.toLowerCase().includes(searchLower) ||
      project.technologies?.some(t => t.toLowerCase().includes(searchLower));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-8"></div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {uniqueCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-purple text-white shadow-md shadow-purple-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects (e.g., Docker)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={16} />
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full"
              >
                {/* Image Placeholder/Image */}
                <div className="h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                       <span className="text-xl font-bold text-white/50">{project.category}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech stack badges (limit to 4) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded shadow-sm">
                        <span>{getTechIcon(tech)}</span>
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded shadow-sm">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 bg-brand-purple/10 hover:bg-brand-purple/20 text-brand-purple rounded-lg font-medium transition-colors mt-auto"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found matching your criteria.
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
