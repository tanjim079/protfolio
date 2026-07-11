import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 flex justify-center mt-4 px-4 pointer-events-none">
        <div 
          className={`pointer-events-auto transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 rounded-full py-2 px-4 lg:px-6 w-full max-w-7xl' 
              : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border border-gray-100 dark:border-slate-800 rounded-2xl py-3 px-4 lg:px-6 w-full max-w-7xl'
          }`}
        >
          <div className="flex justify-between items-center h-10">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group">
                ST<span className="text-primary group-hover:text-accent transition-colors duration-300">.</span> Ahmed
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 overflow-hidden group whitespace-nowrap ${
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
            <div className="flex items-center gap-2">
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
                className={`lg:hidden p-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? 'bg-gray-100/50 dark:bg-slate-800/50 hover:bg-gray-200 dark:hover:bg-slate-700' : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
                } text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 sm:w-80 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-slate-800">
              <span className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
                ST<span className="text-primary">.</span> Ahmed
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
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
            </nav>

            {/* Panel Footer */}
            <div className="px-6 py-4 border-t border-gray-100 dark:border-slate-800">
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">© 2025 Sheikh Tanjim Ahmed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

