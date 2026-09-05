import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Code, Briefcase, GraduationCap, Award, Trophy, MessageSquare, Settings, LogOut, Menu, X, ShieldAlert } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Import Admin Views
import DashboardHome from './admin/DashboardHome';
import ProjectsCRUD from './admin/ProjectsCRUD';
import GenericCRUD from './admin/GenericCRUD';
import MessagesView from './admin/MessagesView';
import AdminSettings from './admin/AdminSettings';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Dashboard', path: '', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: 'projects', icon: <FolderKanban size={20} /> },
    { name: 'Skills', path: 'skills', icon: <Code size={20} /> },
    { name: 'Experience', path: 'experience', icon: <Briefcase size={20} /> },
    { name: 'Education', path: 'education', icon: <GraduationCap size={20} /> },
    { name: 'Certifications', path: 'certifications', icon: <Award size={20} /> },
    { name: 'Achievements', path: 'achievements', icon: <Trophy size={20} /> },
    { name: 'Messages', path: 'messages', icon: <MessageSquare size={20} /> },
    { name: 'Settings', path: 'settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Kunal M. <span className="text-brand-blue">Admin</span></h2>
            <button className="lg:hidden p-2" onClick={() => setSidebarOpen(false)}>
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={`/admin/${item.path}`}
                end={item.path === ''}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-brand-blue/10 text-brand-blue font-semibold' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <button onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 rounded-lg transition-colors text-left">
              <LogOut size={20} />
              Exit Admin
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 lg:px-8 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-500" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold hidden sm:block text-slate-800 dark:text-slate-200">Portfolio Management</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Security Disclaimer Tooltip */}
            <div className="group relative flex items-center">
              <ShieldAlert size={20} className="text-orange-500 cursor-help" />
              <div className="absolute right-0 top-full mt-2 w-72 p-3 bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 text-xs text-slate-600 dark:text-slate-400">
                <strong className="text-orange-500 block mb-1">Security Notice</strong>
                This Admin Dashboard is a frontend demo saving to localStorage. Do not store real passwords or secrets here. The public site remains accessible.
              </div>
            </div>
            
            <button onClick={toggleTheme} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-900 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Security Warning */}
            <div className="sm:hidden mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 rounded-lg flex items-start gap-3">
              <ShieldAlert size={20} className="text-orange-500 shrink-0 mt-0.5" />
              <p className="text-xs text-orange-700 dark:text-orange-300">
                Frontend demo only. Data saves to localStorage. Do not store sensitive secrets here.
              </p>
            </div>
            
            <Routes>
              <Route path="" element={<DashboardHome />} />
              <Route path="projects" element={<ProjectsCRUD />} />
              <Route path="skills" element={<GenericCRUD collection="skills" title="Skills" fields={[{name: 'name', label: 'Skill Name'}, {name: 'category', label: 'Category', type: 'select', options: ['FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS', 'CLOUD', 'TOOLS']}]} />} />
              <Route path="experience" element={<GenericCRUD collection="experience" title="Experience" fields={[{name: 'title', label: 'Job Title'}, {name: 'company', label: 'Company'}, {name: 'date', label: 'Date/Duration'}, {name: 'description', label: 'Description', type: 'textarea'}]} />} />
              <Route path="education" element={<GenericCRUD collection="education" title="Education" fields={[{name: 'degree', label: 'Degree'}, {name: 'institution', label: 'Institution'}, {name: 'date', label: 'Date/Duration'}, {name: 'details', label: 'Details (e.g. CGPA)'}]} />} />
              <Route path="certifications" element={<GenericCRUD collection="certifications" title="Certifications" fields={[{name: 'name', label: 'Certification Name'}]} />} />
              <Route path="achievements" element={<GenericCRUD collection="achievements" title="Achievements" fields={[{name: 'name', label: 'Achievement Name'}]} />} />
              <Route path="messages" element={<MessagesView />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
