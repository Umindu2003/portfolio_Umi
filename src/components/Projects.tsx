import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, ArrowLeft, Sparkles, Code2, Palette } from 'lucide-react';

const projects = [{
  title: 'WSPR',
  description: 'A lightweight, browser-based chat system that gives students or friends a voice. Features include anonymous messaging, room codes, auto-clearing messages, and capacity control making real-time communication safe.',
  tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  image: '/WSPR.png',
  category: 'fullstack',
  color: 'from-blue-500 to-cyan-600',
  links: {
    github: 'https://github.com/Umindu2003/WSPR-Chat-Platform.git',
    demo: 'https://wspr-chat-platform.vercel.app/'
  }
}, {
  title: 'CropWise',
  description: 'A smart web app tailored for small-scale farmers to maximize operational efficiency. Built with the MERN stack, it streamlines daily tasks and resource tracking to modernise traditional farming methods.',
  tags: ['React', 'MongoDB', 'Node.js', 'Express'],
  image: "/Cropwise.png",
  category: 'fullstack',
  color: 'from-green-500 to-emerald-600',
  links: {
    github: 'https://github.com/lahirudeshan01/CropWise.git',
    demo: 'https://cropwise.kgkpr.online/'
  }
}, {
  title: 'Ulora',
  description: 'A secure, production-ready e-commerce platform for vintage audio. Features complex state management, Google OAuth authentication, and a robust admin panel for managing sales and rentals.',
  tags: ['React', 'MongoDB', 'Node.js', 'Express', 'OAuth'],
  image: "/Ulora.jpg",
  category: 'fullstack',
  color: 'from-purple-500 to-indigo-600',
  links: {
    github: 'https://github.com/Umindu2003/Audio-frontend.git',
    demo: 'https://audio-frontend-puce.vercel.app/'
  }
}, {
  title: 'ClassifiedAds.com Redesign',
  description: 'A collaborative UX/UI project focused on solving critical usability issues. Using Figma, we redesigned the site to eliminate visual noise, standardize consistency, and create a seamless, high-efficiency user journey.',
  tags: ['Figma', 'UX/UI', 'Design'],
  image: '/ClassifiedAds.jpeg',
  category: 'design',
  color: 'from-orange-500 to-red-500',
  links: {
    figma: 'https://www.figma.com/design/1ZhiAA92isgHpzy8JgzRZp/classified-hci?node-id=0-6&t=jMf0Zp1afmBqx2Ff-1'
  }
}, {
  title: 'Movie Buddy',
  description: 'A modern, high-fidelity mobile UI for movie tracking and discovery. Designed in Figma, it combines a premium dark aesthetic with smooth user flows for browsing and profile management.',
  tags: ['Figma', 'Mobile UI', 'Design'],
  image: '/MovieBuddy.png',
  category: 'design',
  color: 'from-pink-500 to-rose-600',
  links: {
    figma: 'https://www.figma.com/design/HaCxMbn8G2RAyLzRBmgGHH/Untitled?node-id=134-129&t=Bic249XE4REIsFVh-1'
  }
}];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'design'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const scrollToProject = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} className="text-center mb-12">
        <img 
          src="/ProjectsU.png"
          alt="Projects"
          className="w-10 h-10 md:w-12 md:h-12 object-contain mb-0 mx-auto"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Featured Projects
        </h2>
        <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
          Selected works showcasing technical depth and product thinking.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-12"
      >
        {[
          { key: 'all', label: 'All Projects', icon: Sparkles },
          { key: 'fullstack', label: 'Full Stack', icon: Code2 },
          { key: 'design', label: 'UI/UX Design', icon: Palette }
        ].map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setFilter(tab.key as typeof filter)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
              filter === tab.key
                ? 'bg-black text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon size={16} />
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Category Badge */}
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${project.color}`}>
                  {project.category === 'fullstack' ? 'Full Stack' : 'Design'}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#0071E3] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Always Visible */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-black transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0071E3] text-white text-xs font-medium rounded-lg hover:bg-[#0077ED] transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                  {project.links.figma && (
                    <a 
                      href={project.links.figma} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      <Palette size={14} />
                      Figma
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View All CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.a
          href="https://github.com/Umindu2003"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
          View All on GitHub
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>;
}