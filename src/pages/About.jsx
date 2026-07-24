import { Download, ExternalLink, Code2, Database, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Education",
      desc: "Electronics & Telecommunication Engineering at RUET"
    },
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Full-Stack Dev",
      desc: "Building scalable web apps with React, Node, Supabase"
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "Backend & APIs",
      desc: "Developing robust server-side logic and seamless database integrations"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Leadership",
      desc: "Active roles in extracurricular tech organizations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="py-8 relative overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About <span className="text-primary">Me</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              <p className="mb-4">
                I am a passionate <strong className="text-gray-900 dark:text-white font-semibold">Full-Stack Web Developer</strong> and an Electronics & Telecommunication Engineering student at RUET. I enjoy bridging the gap between hardware and software, creating comprehensive solutions that solve real-world problems.
              </p>
              <p className="mb-4">
                My expertise lies in building scalable, responsive web applications with a strong focus on user experience and performance. I work extensively with <span className="text-primary font-medium">React.js, Node.js</span>, and modern tools to bring ideas to life.
              </p>
              <p>
                In addition to web development, I am deeply interested in IoT systems and embedded development, constantly exploring how the digital and physical worlds interact. I thrive in collaborative environments and am always eager to learn and adopt new technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <a href="/Resume_Tanjim.pdf" download className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </span>
                <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
              </a>
              <a href="https://github.com/tanjim079" target="_blank" rel="noreferrer" className="btn-secondary group">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Right Column: Highlights Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4 md:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-gray-100 dark:border-slate-700 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Decorative glow on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl z-0 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100 dark:border-slate-800 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
