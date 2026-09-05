import React, { useRef, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Download, Upload, AlertTriangle, RefreshCcw } from 'lucide-react';
import { toast } from 'react-toastify';

const AdminSettings = () => {
  const { exportAllData, importAllData, resetAllData } = usePortfolio();
  const fileInputRef = useRef(null);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleExport = () => {
    exportAllData();
    toast.success('Data exported successfully');
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const success = importAllData(content);
      if (success) {
        toast.success('Data imported successfully');
      } else {
        toast.error('Failed to import data. Invalid format or missing required fields.');
      }
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.onerror = () => {
      toast.error('Error reading file');
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    resetAllData();
    setShowConfirmReset(false);
    toast.info('Portfolio data has been reset to defaults');
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Settings & Data Management</h2>
      
      <div className="space-y-6">
        
        {/* Export Data */}
        <div className="glass-card p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-bold mb-1">Export Portfolio Data</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Download a JSON backup of all your projects, skills, experience, and messages.</p>
          </div>
          <button onClick={handleExport} className="shrink-0 px-6 py-2.5 bg-brand-blue hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 font-medium transition-colors w-full md:w-auto justify-center">
            <Download size={18} /> Export JSON
          </button>
        </div>

        {/* Import Data */}
        <div className="glass-card p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-bold mb-1">Import Portfolio Data</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Restore your portfolio from a previously exported JSON backup. (A backup of current state will be created automatically).</p>
          </div>
          <input 
            type="file" 
            accept=".json,application/json" 
            ref={fileInputRef} 
            onChange={handleFileChange}
            className="hidden" 
          />
          <button onClick={handleImportClick} className="shrink-0 px-6 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-lg flex items-center gap-2 font-medium transition-colors w-full md:w-auto justify-center">
            <Upload size={18} /> Import JSON
          </button>
        </div>

        {/* Reset Data */}
        <div className="glass-card p-6 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-bold mb-1 text-red-600 dark:text-red-400">Factory Reset</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Reset all portfolio data to the initial default state. This deletes all your custom entries.</p>
          </div>
          <button onClick={() => setShowConfirmReset(true)} className="shrink-0 px-6 py-2.5 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-2 font-medium transition-colors w-full md:w-auto justify-center">
            <RefreshCcw size={18} /> Reset Data
          </button>
        </div>

      </div>

      {showConfirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center gap-3 text-red-500 mb-4">
              <AlertTriangle size={24} />
              <h3 className="text-lg font-bold">Reset Portfolio Data</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Are you absolutely sure you want to reset all data? All custom projects, skills, and messages will be replaced by the default template data.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowConfirmReset(false)} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg">Cancel</button>
              <button onClick={handleReset} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">Yes, Reset Everything</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
