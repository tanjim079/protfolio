import { Download, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About <span className="text-primary">Me</span>
        </h1>

        <div className="card">
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-justify">
            <p className="mb-4">
              I am a passionate Full-Stack Web Developer and an Electronics & Telecommunication Engineering student at RUET. I enjoy bridging the gap between hardware and software, creating comprehensive solutions that solve real-world problems.
            </p>
            <p className="mb-4">
              My expertise lies in building scalable, responsive web applications with a strong focus on user experience and performance. I work extensively with React.js, Node.js, and modern tools to bring ideas to life.
            </p>
            <p>
              In addition to web development, I am deeply interested in IoT systems and embedded development, constantly exploring how the digital and physical worlds interact. I thrive in collaborative environments and am always eager to learn and adopt new technologies.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 mb-8 border border-gray-100 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Electronics & Telecommunication Engineering student at RUET</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Full-stack web development experience (React, Node, Supabase)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Experience with IoT systems and embedded development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Leadership roles in extracurricular tech organizations</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="/Resume_Tanjim.pdf" download className="btn-primary">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            <a href="https://github.com/tanjim079" target="_blank" rel="noreferrer" className="btn-secondary">
              <ExternalLink className="w-5 h-5 mr-2" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
