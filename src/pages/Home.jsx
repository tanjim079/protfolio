import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-4 border-white dark:border-dark-card shadow-xl mb-8 relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-md"></div>
          <img
            src="/profile.jpeg"
            alt="Sheikh Tanjim Ahmed"
            className="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-slate-800"
            onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Profile" }}
          />
        </div>

        {/* Headlines */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-primary">Sheikh Tanjim Ahmed</span>
        </h1>
        <div className="h-8 md:h-10 lg:h-12 mb-6 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl">
            <TypeAnimation
              sequence={[
                'Full-Stack Web Developer',
                2000,
                'Problem Solver',
                2000,
                'Creative Thinker',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-10">
          Crafting scalable web solutions with React, Node.js, and modern technologies. Passionate about solving real-world problems.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link to="/projects" className="btn-primary group">
            View My Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Let's Work Together
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/tanjim079" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            <FaGithub className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/sheikhtanjimahmed" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
