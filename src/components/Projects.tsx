import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, ArrowLeft, Sparkles, Code2, Palette } from 'lucide-react';

const projects = [{
  title: 'Smart Campus Operations Hub',
  description: 'A modern web platform built to streamline campus resource bookings, incident management, notifications, and administrative workflows. It enhances operational efficiency through centralized management, role-based access, and real-time collaboration.',
  tags: ['Spring Boot', 'React', 'Full Stack', 'Tailwind'],
  image: '/SmartCampushub.png',
  category: 'fullstack',
  color: 'from-blue-600 to-indigo-700',
  links: {
    github: 'https://github.com/Mindu315/it3030-paf-2026-smart-campus-group.git',
  },
  gallery: [
    '/Admin Dashboard.png',
    '/Booking History.png',
    '/Dashboard.png',
    '/Notifications.png',
    '/Profile.png',
    '/Resource Booking.png',
    '/Resource Catalog.png',
    '/Resource Management - Admin.png',
    '/Review Bookings- Admin.png',
    '/Settings.png',
    '/Tickets.png'
  ]
}, {
  title: 'UniWell',
  description: 'An intelligent student support platform that combines GPA tracking, AI-powered learning tools, wellbeing monitoring, and career guidance. Features include GPA prediction, AI-generated quizzes, stress trend analysis, and personalized career recommendations to help students achieve academic and personal success.',
  tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
  image: '/uniwell.png',
  category: 'fullstack',
  color: 'from-emerald-500 to-cyan-600',
  links: {
    github: 'https://github.com/Mindu315/UniWell-Student-Management-System.git',
    demo: 'https://uni-well-student-management-system.vercel.app/'
  }
}, {
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
  title: 'Moody',
  description: 'A lightweight AI-powered mood tracking app that helps users build self-awareness through smart insights, real-time analytics, and detailed weekly, monthly, and yearly reports.',
  tags: ['React Native', 'TypeScript', 'Express', 'MERN Stack', 'Gemini AI'],
  image: '/MoodyApp.png',
  category: 'fullstack',
  color: 'from-amber-500 to-yellow-600',
  links: {
    github: 'https://github.com/Umindu2003/Moody-App.git',
    release: 'https://github.com/Umindu2003/Moody-App/releases/tag/v1.0.0'
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
  
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const scrollToProject = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openGallery = (galleryArray: string[]) => {
    setCurrentGallery(galleryArray);
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  // 🧠 THE MAGIC HELPER FUNCTION!
  // Extracts "Dashboard" from "/Dashboard.png" automatically!
  const formatImageName = (path: string) => {
    if (!path) return '';
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, ""); 
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
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
              <div className="relative aspect-[16/11] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${project.color}`}>
                  {project.category === 'fullstack' ? 'Full Stack' : 'Design'}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#0071E3] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

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

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  {project.links?.github && (
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

                  {project.gallery ? (
                    <button 
                      onClick={() => openGallery(project.gallery!)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0071E3] text-white text-xs font-medium rounded-lg hover:bg-[#0077ED] transition-colors"
                    >
                      <ExternalLink size={14} />
                      Gallery
                    </button>
                  ) : project.links?.demo && (
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

                  {project.links?.release && (
                    <a 
                      href={project.links.release} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0071E3] text-white text-xs font-medium rounded-lg hover:bg-[#0077ED] transition-colors"
                    >
                      <ExternalLink size={14} />
                      Release
                    </a>
                  )}
                  {project.links?.figma && (
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

      {/* --- MODAL UPDATED WITH IMAGE TITLE --- */}
      <AnimatePresence>
        {isGalleryOpen && currentGallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsGalleryOpen(false)}
          >
            <div 
              className="relative max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md"
              >
                ✕ Close
              </button>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 flex items-center justify-center">
                
                {/* 🔥 NEW: THE IMAGE TITLE BADGE 🔥 */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-10 shadow-lg">
                  <h4 className="text-white text-sm md:text-base font-semibold tracking-wide">
                    {formatImageName(currentGallery[currentImageIndex])}
                  </h4>
                </div>

                <img
                  src={currentGallery[currentImageIndex]}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex items-center gap-6 mt-6">
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1))}
                  className="flex items-center gap-2 text-white bg-white/10 px-6 py-2.5 rounded-full hover:bg-white/20 transition-all backdrop-blur-md font-medium"
                >
                  <ArrowLeft size={16} /> Prev
                </button>
                <span className="text-white/70 font-mono tracking-widest text-sm bg-black/40 px-4 py-2 rounded-full border border-white/5">
                  {currentImageIndex + 1} / {currentGallery.length}
                </span>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1))}
                  className="flex items-center gap-2 text-white bg-white/10 px-6 py-2.5 rounded-full hover:bg-white/20 transition-all backdrop-blur-md font-medium"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}