import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Product Development Engineer",
    company: "Ukil Chamber – Legal Consultation Platform",
    location: "Remote",
    duration: "February 2026 - Present",
    description: [
      "Designed and developed a full-stack web application connecting clients with lawyers through appointment booking and real-time communication.",
      "Engineered role-based authentication, scheduling, availability management, and secure document sharing using Supabase services.",
      "Optimized the application with a responsive React frontend, PostgreSQL database, and real-time synchronization for an improved user experience."
    ],
    tech: ["React.js", "Supabase", "JavaScript"]
  },
  {
    id: 2,
    role: "Front-end AI Engineer",
    company: "FlyRank AI",
    location: "Chicago (Remote)",
    duration: "July 2026 - Present",
    description: [
      "Developing and maintaining user-facing features using React.js and Tailwind CSS.",
      "Integrating AI-powered backend tools to enhance frontend functionalities.",
      "Collaborating with the design team to create modern, intuitive UI/UX for AI products."
    ],
    tech: ["React.js", "Tailwind CSS", "AI Tools API"]
  },
  {
    id: 3,
    role: "Intern - Web Development",
    company: "CodeAlpha",
    location: "Lucknow (Remote)",
    duration: "June 2026 - August 2026",
    description: [
      "Working on full-stack web applications to solve business problems.",
      "Building responsive front-end interfaces and connecting them to robust backend services.",
      "Participating in code reviews and agile development processes."
    ],
    tech: ["React.js", "Node.js", "Supabase", "JavaScript"]
  }
];

export default function Experience() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Professional <span className="text-primary">Experience</span>
        </h1>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:space-y-12 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-white dark:bg-dark-bg border-4 border-primary rounded-full -left-[13px] top-1"></div>

              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-primary font-medium mt-1">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="text-primary mr-2 mt-1.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
