import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Plus, Edit2, Trash2, Search, X, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-toastify';

const ProjectsCRUD = () => {
  const { data, addProject, updateProject, deleteProject } = usePortfolio();
  const projects = data.projects || [];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null);

  const initialFormState = {
    title: '', category: 'Frontend', description: '', image: '', github: '', liveDemo: '', technologies: '', features: ''
  };
  const [formData, setFormData] = useState(initialFormState);

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenForm = (project = null) => {
    if (project) {
      setFormData({
        ...project,
        technologies: project.technologies?.join(', ') || '',
        features: project.features?.join('\n') || ''
      });
      setCurrentProject(project);
    } else {
      setFormData(initialFormState);
      setCurrentProject(null);
    }
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process comma separated technologies and newline separated features
    const processedData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
      features: formData.features.split('\n').map(f => f.trim()).filter(Boolean)
    };

    if (currentProject) {
      updateProject(currentProject.id, processedData);
      toast.success('Project updated successfully');
    } else {
      addProject(processedData);
      toast.success('Project added successfully');
    }
    handleCloseForm();
  };

  const handleDelete = (id) => {
    deleteProject(id);
    toast.info('Project deleted successfully');
    setShowConfirmDelete(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Manage Projects</h2>
        <button 
          onClick={() => handleOpenForm()} 
          className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search projects..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      {/* List */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Project</th>
                <th className="p-4 font-semibold text-slate-600 dark:text-slate-400">Category</th>
                <th className="p-4 font-semibold text-slate-600 dark:text-slate-400 hidden md:table-cell">Links</th>
                <th className="p-4 font-semibold text-slate-600 dark:text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <tr key={project.id} className="border-b border-slate-200 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0 flex items-center justify-center">
                          {project.image ? <img src={project.image} alt="" className="w-full h-full object-cover" /> : <ImageIcon size={20} className="text-slate-400" />}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{project.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded font-medium">{project.category}</span>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <div className="flex gap-2">
                        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-sm">Repo</a>}
                        {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-green-500 hover:underline text-sm">Live</a>}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleOpenForm(project)} className="p-2 text-slate-500 hover:text-brand-blue hover:bg-blue-50 dark:hover:bg-slate-700 rounded transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => setShowConfirmDelete(project.id)} className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-slate-700 rounded transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-slate-500">No projects found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-bold mb-2">Delete Project</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Are you sure you want to delete this project? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowConfirmDelete(null)} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg">Cancel</button>
              <button onClick={() => handleDelete(showConfirmDelete)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-3xl my-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{currentProject ? 'Edit Project' : 'Add New Project'}</h3>
              <button onClick={handleCloseForm} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title *</label>
                  <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category *</label>
                  <select name="category" required value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent dark:bg-slate-800">
                    <option value="Frontend">Frontend</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="MERN">MERN</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Cloud">Cloud</option>
                    <option value="AI">AI</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description *</label>
                <textarea name="description" required rows="3" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image URL (Optional)</label>
                <input type="text" name="image" placeholder="https://example.com/image.png or /assets/project.png" value={formData.image} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" />
                <p className="text-xs text-slate-500 mt-1">Use a direct URL or local path. Avoid uploading large files to localStorage.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">GitHub URL</label>
                  <input type="url" name="github" value={formData.github} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Live Demo URL</label>
                  <input type="url" name="liveDemo" value={formData.liveDemo} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Technologies (comma separated) *</label>
                <input type="text" name="technologies" required placeholder="React, Node.js, Docker" value={formData.technologies} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
                <textarea name="features" rows="4" placeholder="Feature 1&#10;Feature 2" value={formData.features} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent"></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700 mt-6">
                <button type="button" onClick={handleCloseForm} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded-lg">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCRUD;
