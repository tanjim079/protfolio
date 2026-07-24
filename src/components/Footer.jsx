import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {


  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-slate-800 mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Sheikh Tanjim Ahmed
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
              "Building the future, one line of code at a time"
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/tanjim079" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/sheikhtanjimahmed" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {year} All rights reserved.
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}
