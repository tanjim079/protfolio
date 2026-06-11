import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Ukil Chamber',
    description: 'A comprehensive Legal Consultation Platform connecting users with professional lawyers.',
    tech: ['React', 'Node.js', 'Supabase'],
    features: [
      'User authentication and profile management',
      'Real-time messaging and appointment booking',
      'Secure document sharing and storage'
    ],
    github: 'https://github.com/saifulislam735/LawBaba',
    demo: 'https://ukilchamber.com/',
  },
  {
    title: 'RUET Medical Portal',
    description: 'Healthcare Management system specifically designed for the RUET medical center.',
    tech: ['React', 'Supabase'],
    features: [
      'Digital patient records and history tracking',
      'Medicine inventory management',
      'Doctor appointment scheduling'
    ],
    github: 'https://github.com/tanjim079/medicalsystem',
    demo: '#',
  },
  {
    title: 'Result Management System',
    description: 'Academic platform to manage and publish student results efficiently.',
    tech: ['React', 'Supabase'],
    features: [
      'Admin dashboard for result entry',
      'Student portal for viewing results',
      'Automated CGPA calculation'
    ],
    github: 'https://github.com/tanjim079/result-management-system',
    demo: 'https://resultdesk.netlify.app/',
  },
  {
    title: 'DriveSafe',
    description: 'IoT Vehicle Safety System to prevent accidents and ensure driver safety.',
    tech: ['Arduino', 'ESP32', 'GPS'],
    features: [
      'Real-time location tracking',
      'Collision detection and alert system',
      'Driver drowsiness monitoring'
    ],
    github: 'https://github.com/tanjim079/DriveSafe-Intelligent-Vehicle-Safety-and-Tracking-System',
    demo: '#',
  },
  {
    title: '2D Car Game',
    description: 'An interactive 2D racing game built with Python.',
    tech: ['Python', 'Pygame'],
    features: [
      'Smooth controls and physics',
      'Increasing difficulty levels',
      'Score tracking and high scores'
    ],
    github: 'https://github.com/tanjim079/cargame',
    demo: '#',
  }
];

export default function Projects() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          A showcase of my recent work, highlighting my skills in full-stack development and IoT.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card flex flex-col h-full group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Folder className="w-8 h-8" />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href={project.demo} className="text-gray-500 hover:text-primary dark:text-gray-400 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
