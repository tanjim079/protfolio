import { useState } from 'react';
import { Trophy, Award, Users } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('hackathons');

  const competitions = [
    {
      title: 'Technocracy Lite - HACKSPARK',
      role: 'Participant',
      description: 'A 10-hour onsite hackathon to build "RentPi," a real-world rental platform. Developed a microservices architecture including an API Gateway, User Service, Rental Service, Analytics Service, and an Agentic AI Service.',
      features: [
        'Built resilient microservices communicating via internal DNS and HTTP',
        'Implemented paginated product listings, complex data filtering, and real-time analytics',
        'Managed PostgreSQL and MongoDB persistence with Docker'
      ],
      tech: ['Docker', 'Microservices', 'Node.js', 'PostgreSQL', 'MongoDB', 'React'],
      github: 'https://github.com/tanjim079/hackspark-starter'
    },
    {
      title: 'ICT Fest Hackathon Preliminary',
      role: 'Participant',
      description: 'Developed "CoWork," a REST API for managing bookable rooms inside a coworking space across multiple tenant organizations. Included complex business logic for booking, quota management, and rate limiting.',
      features: [
        'Built secure JWT authentication and role-based access control',
        'Implemented strict business rules preventing double-booking and managing user quotas',
        'Designed cancellation and refund policies adhering to strict time windows'
      ],
      tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Docker'],
      github: 'https://github.com/tanjim079/ICT_Fest_Hackathon_Preliminary'
    }
  ];

  const certifications = [
    { title: 'AI Fluency: Framework & Foundations by ANTHROPIC', image: '/AI Fluency.jpg' },
    { title: 'DriveSafe: Intelligent Vehicle Safety and Tracking System', image: '/DriveSafe.png' },
    { title: 'Programming Fundamental by Grameenphone LTD.', image: '/Programming Fundamental.jpg' },
    { title: 'Aptis for Teens - Preparation Course', image: '/Aptis for Teens.jpg' },
    { title: 'Financial Inclusion: Engaging and Inspiring Youth in Banking', image: '/Financial Inclusion.jpg' },
    { title: 'CSE/ECE/ETE Job Sector after Engineering', image: '/CSEECEETE Job Sector after Engineering.png' }
  ];

  const activities = [
    'Graphics Design Team Lead - Notre Dame College Association of RUET',
    'Logistics Team Lead - Notre Dame College Association of RUET',
    'Assistant Organizing Secretary - Notre Dame College Association of RUET',
    'Former IT Lead - Tarunner Proyas, Bonpara, Natore (Local Voluntary Organization)',
    'Former Campus Ambassador - Trimatrik Rosikota',
    'Former Executive Member - Photographic Society of RUET',
    'Former Member - Notre Dame English Club'
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'hackathons':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {competitions.map((comp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-primary" />
                      {comp.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">{comp.role}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {comp.github && (
                      <a
                        href={comp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {comp.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {comp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
                  {comp.tech.map((t, idx) => (
                    <span key={idx} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        );
      case 'certifications':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-slate-800/50 p-4 border-b border-gray-100 dark:border-slate-700 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 rounded-lg drop-shadow-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-center">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors duration-300" title={cert.title}>
                      {cert.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-md">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Looking for Credentials?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Visit my LinkedIn profile to see detailed certificates, credentials, and endorsements.
                </p>
              </div>
              <a
                href="https://linkedin.com/in/sheikhtanjimahmed"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-lg transition-colors duration-300 shadow-sm shrink-0"
              >
                <FaLinkedin className="w-5 h-5" />
                View on LinkedIn
              </a>
            </div>
          </motion.div>
        );
      case 'activities':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-dark-card border border-gray-100 dark:border-slate-700 rounded-xl p-8 shadow-card dark:shadow-card-dark"
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Extra Co-Curricular Activities</h2>
            </div>
            <ul className="space-y-4">
              {activities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{activity}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight">
          <span className="text-primary">Achievements</span> & Activities
        </h1>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100/50 dark:bg-slate-800/50 p-2 rounded-2xl max-w-fit mx-auto border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-inner">
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'hackathons' ? 'text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            {activeTab === 'hackathons' && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-primary rounded-xl z-0"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Trophy className="w-4 h-4" /> Competitions
            </span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'certifications' ? 'text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            {activeTab === 'certifications' && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-primary rounded-xl z-0"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications
            </span>
          </button>

          <button
            onClick={() => setActiveTab('activities')}
            className={`relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'activities' ? 'text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            {activeTab === 'activities' && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-primary rounded-xl z-0"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Users className="w-4 h-4" /> Extra-Curriculars
            </span>
          </button>
        </div>

        {/* Content Area with smooth transitions */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
