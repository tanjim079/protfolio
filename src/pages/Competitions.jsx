import { Trophy, Github } from 'lucide-react';

export default function Competitions() {
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

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Hackathons & <span className="text-primary">Competitions</span>
        </h1>

        <div className="space-y-8">
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
                      <Github className="w-5 h-5" />
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
        </div>
      </div>
    </div>
  );
}
