import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import ParticleComponent from '../components/ParticleComponent';

export default function Contact() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-white">
      <ParticleComponent />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300">
            Feel free to reach out through any of these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a
            href="https://github.com/heycharm"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Github size={24} className="mr-4" />
            <div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-gray-300">Check out my repositories</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/chinmay_2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Linkedin size={24} className="mr-4" />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-300">Let's connect professionally</p>
            </div>
          </motion.a>

          <motion.a
            href="https://instagram.com/chinmay.p2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Instagram size={24} className="mr-4" />
            <div>
              <h3 className="font-semibold">Instagram</h3>
              <p className="text-gray-300">Follow my journey</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:heychinmay2@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Mail size={24} className="mr-4" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-300">heychinmay2@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}