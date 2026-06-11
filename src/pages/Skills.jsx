import { Code2, Database, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Expert' },
    ]
  },
  {
    title: 'Web Technologies',
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'React.js', level: 'Expert' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Express', level: 'Intermediate' },
    ]
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Supabase', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Beginner' },
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Git/GitHub', level: 'Expert' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Arduino IDE', level: 'Beginner' },
      { name: 'MATLAB', level: 'Expert' },
    ]
  }
];

export default function Skills() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-primary">Skills</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, programming languages, and tools I use to build scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    {/* Visual indicator bar */}
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: skill.level === 'Expert' ? '90%' : skill.level === 'Intermediate' ? '65%' : '35%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
