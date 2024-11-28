import { motion } from 'framer-motion';
import { Code2, Database, FileCode, Monitor, Server, Terminal, Wrench } from 'lucide-react';

const technologies = [
  { icon: FileCode, name: 'Frontend Dev' },
  { icon: Server, name: 'Backend Dev' },
  { icon: Database, name: 'Databases' },
  { icon: Code2, name: 'Clean Code' },
  // { icon: Git, name: 'Version Control' },
  { icon: Terminal, name: 'CLI Tools' },
  { icon: Monitor, name: 'UI/UX' },
  { icon: Wrench, name: 'DevOps' }
];

export default function About() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with 5 years of experience building web applications.
              I love creating elegant solutions to complex problems and am constantly learning new technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical blog posts, or exploring new technologies.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technologies & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <tech.icon size={32} className="mb-2" />
                <span className="text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}