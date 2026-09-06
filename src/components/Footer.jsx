import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Kunal <span className="text-brand-blue">M.</span></h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Software Developer</p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Frontend • Full Stack / MERN • DevOps & Cloud</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/kunal123-ui" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-blue transition-colors shadow-sm">
              <SiGithub size={20} className="text-slate-800 dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/kunal-m-cse" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-blue transition-colors shadow-sm">
              <FaLinkedin size={20} className="text-[#0A66C2]" />
            </a>
            <a href="mailto:kunal@example.com" className="p-3 bg-white dark:bg-slate-800 rounded-full hover:text-brand-blue transition-colors shadow-sm">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kunal M. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Built with React <Heart size={14} className="text-red-500 mx-1" /> & Tailwind CSS
          </div>
          <Link to="/admin" className="mt-4 md:mt-0 text-slate-400 hover:text-brand-blue transition-colors">
            Admin Panel
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
