import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { FolderKanban, Code, Briefcase, GraduationCap, Award, Trophy, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatCard = ({ title, count, icon, path, color }) => (
  <Link to={path} className="block glass-card p-6 rounded-xl hover:-translate-y-1 transition-all group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${color} text-white`}>
        {icon}
      </div>
      <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">{count}</span>
    </div>
    <h3 className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-brand-blue transition-colors">Total {title}</h3>
  </Link>
);

const DashboardHome = () => {
  const { data } = usePortfolio();
  
  const unreadMessages = data.messages?.filter(m => !m.read).length || 0;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <StatCard title="Projects" count={data.projects?.length || 0} icon={<FolderKanban />} path="projects" color="bg-brand-blue" />
        <StatCard title="Skills" count={data.skills?.length || 0} icon={<Code />} path="skills" color="bg-brand-purple" />
        <StatCard title="Experience" count={data.experience?.length || 0} icon={<Briefcase />} path="experience" color="bg-brand-green" />
        <StatCard title="Education" count={data.education?.length || 0} icon={<GraduationCap />} path="education" color="bg-orange-500" />
        <StatCard title="Certifications" count={data.certifications?.length || 0} icon={<Award />} path="certifications" color="bg-emerald-500" />
        <StatCard title="Achievements" count={data.achievements?.length || 0} icon={<Trophy />} path="achievements" color="bg-yellow-500" />
        
        <Link to="messages" className="block glass-card p-6 rounded-xl hover:-translate-y-1 transition-all group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-pink-500 text-white relative">
              <MessageSquare />
              {unreadMessages > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {unreadMessages}
                </span>
              )}
            </div>
            <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">{data.messages?.length || 0}</span>
          </div>
          <h3 className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-pink-500 transition-colors">Messages</h3>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
