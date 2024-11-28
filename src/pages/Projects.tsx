import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using DALL-E API",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenAI API", "TailwindCSS"]
  },
  {
    title: "Real-time Chat App",
    description: "A real-time chat application with WebSocket integration",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Socket.io", "Express", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}