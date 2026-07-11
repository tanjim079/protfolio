import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center mt-4 px-4 pointer-events-none">
      <div 
        className={`pointer-events-auto transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 rounded-full py-2 px-4 md:px-6 w-full max-w-7xl' 
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border border-gray-100 dark:border-slate-800 rounded-2xl py-3 px-4 md:px-6 w-full max-w-7xl'
        }`}
      >
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-4">
            <NavLink to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group">
              ST<span className="text-primary group-hover:text-accent transition-colors duration-300">.</span> Ahmed
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 justify-center items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <span className="absolute inset-0 bg-primary z-0 rounded-full shadow-[0_0_10px_rgba(15,111,255,0.4)]"></span>
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 bg-primary/10 dark:bg-primary/20 z-0 rounded-full translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-gray-100/50 dark:bg-slate-800/50 hover:bg-gray-200 dark:hover:bg-slate-700' : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
              } text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`xl:hidden p-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-gray-100/50 dark:bg-slate-800/50 hover:bg-gray-200 dark:hover:bg-slate-700' : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
              } text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Menu className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`xl:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-1 py-4 border-t border-gray-100/20 dark:border-slate-700/20">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
