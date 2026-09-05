import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Journey', to: 'journey' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <Terminal className="text-brand-blue" />
          <span>Kunal <span className="text-brand-blue">M.</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-sm font-medium text-slate-600 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue transition-colors"
              activeClass="text-brand-blue dark:text-brand-blue font-semibold"
            >
              {link.name}
            </ScrollLink>
          ))}
          
          <div className="flex items-center gap-4 border-l border-slate-300 dark:border-slate-700 pl-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="/resume.pdf" 
              download 
              className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card border-t border-white/10 py-4 flex flex-col items-center shadow-xl">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-lg font-medium"
            >
              {link.name}
            </ScrollLink>
          ))}
          <a href="/resume.pdf" download className="mt-4 px-8 py-3 bg-brand-blue text-white rounded-lg font-medium w-3/4 text-center">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
