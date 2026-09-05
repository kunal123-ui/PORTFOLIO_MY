import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-brand-dark p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center glass-card p-8 rounded-2xl"
      >
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
