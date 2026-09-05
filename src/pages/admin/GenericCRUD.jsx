import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Plus, Edit2, Trash2, Search, X } from 'lucide-react';
import { toast } from 'react-toastify';

const GenericCRUD = ({ collection, title, fields }) => {
  const { data, getItems, addItem, updateItem, deleteItem } = usePortfolio();
  
  // Use generic context methods based on collection name, but fallback to specific if needed
  // Since we mapped them explicitly in context, we can just use the generic ones we added
  
  const items = data[collection] || [];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null);

  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const filteredItems = items.filter(item => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    // Search across all string fields
    return Object.values(item).some(val => 
      typeof val === 'string' && val.toLowerCase().includes(searchLower)
    );
  });

  const handleOpenForm = (item = null) => {
    if (item) {
      setFormData({ ...item });
      setCurrentItem(item);
    } else {
      setFormData(initialFormState);
      setCurrentItem(null);
    }
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
    setCurrentItem(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dynamically call the right function from context
    const actionMap = {
      'skills': { add: 'addSkill', update: 'updateSkill', del: 'deleteSkill' },
      'experience': { add: 'addExperience', update: 'updateExperience', del: 'deleteExperience' },
      'education': { add: 'addEducation', update: 'updateEducation', del: 'deleteEducation' },
      'certifications': { add: 'addCertification', update: 'updateCertification', del: 'deleteCertification' },
      'achievements': { add: 'addAchievement', update: 'updateAchievement', del: 'deleteAchievement' },
    };

    const actionContext = require('../../context/PortfolioContext').usePortfolio(); // re-import to access specific funcs if generic fails
    // Wait, better to just use the specific functions exposed in the component props or generic context
    // In PortfolioContext we exposed addSkill, updateSkill etc.
    
    // Let's rely on the global context directly for this
    
    try {
      if (currentItem) {
        actionContext[actionMap[collection].update](currentItem.id, formData);
        toast.success(`${title} updated successfully`);
      } else {
        actionContext[actionMap[collection].add](formData);
        toast.success(`${title} added successfully`);
      }
      handleCloseForm();
    } catch (e) {
      toast.error('An error occurred');
    }
  };

  const handleDelete = (id) => {
    const actionMap = {
      'skills': 'deleteSkill',
      'experience': 'deleteExperience',
      'education': 'deleteEducation',
      'certifications': 'deleteCertification',
      'achievements': 'deleteAchievement',
    };
    const actionContext = require('../../context/PortfolioContext').usePortfolio();
    actionContext[actionMap[collection]](id);
    toast.info(`${title} deleted successfully`);
    setShowConfirmDelete(null);
  };

  // Extract first column for title display
  const primaryField = fields[0].name;
  const secondaryField = fields.length > 1 ? fields[1].name : null;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Manage {title}</h2>
        <button 
          onClick={() => handleOpenForm()} 
          className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus size={18} /> Add New
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder={`Search ${title.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 font-semibold text-slate-600 dark:text-slate-400 capitalize">{fields[0].label}</th>
                {secondaryField && <th className="p-4 font-semibold text-slate-600 dark:text-slate-400 capitalize">{fields[1].label}</th>}
                <th className="p-4 font-semibold text-slate-600 dark:text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <tr key={item.id} className="border-b border-slate-200 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{item[primaryField]}</td>
                    {secondaryField && <td className="p-4 text-slate-600 dark:text-slate-400">{item[secondaryField]}</td>}
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => handleOpenForm(item)} className="p-2 text-slate-500 hover:text-brand-blue hover:bg-blue-50 dark:hover:bg-slate-700 rounded transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => setShowConfirmDelete(item.id)} className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-slate-700 rounded transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={secondaryField ? 3 : 2} className="p-8 text-center text-slate-500">No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showConfirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-bold mb-2">Delete Record</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Are you sure you want to delete this record? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowConfirmDelete(null)} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg">Cancel</button>
              <button onClick={() => handleDelete(showConfirmDelete)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-2xl my-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{currentItem ? `Edit ${title}` : `Add New ${title}`}</h3>
              <button onClick={handleCloseForm} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-1">{field.label} *</label>
                  {field.type === 'textarea' ? (
                    <textarea 
                      name={field.name} 
                      required 
                      rows="4"
                      value={formData[field.name]} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" 
                    />
                  ) : field.type === 'select' ? (
                    <select 
                      name={field.name} 
                      required 
                      value={formData[field.name] || field.options[0]} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent dark:bg-slate-800"
                    >
                      <option value="" disabled>Select an option</option>
                      {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input 
                      type="text" 
                      name={field.name} 
                      required 
                      value={formData[field.name]} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" 
                    />
                  )}
                </div>
              ))}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700 mt-6">
                <button type="button" onClick={handleCloseForm} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenericCRUD;
