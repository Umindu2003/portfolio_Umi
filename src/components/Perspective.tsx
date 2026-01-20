import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, Zap, Eye, ArrowRight } from 'lucide-react';
const pillars = [{
  icon: Layers,
  title: 'Full-Stack Development',
  description: 'Seamless integration from database to user interface.'
}, {
  icon: Lightbulb,
  title: 'Product-Centric Mindset',
  description: 'Focusing on user value and meaningful experiences over technical complexity.'
}, {
  icon: Zap,
  title: 'AI-Enhanced Workflow',
  description: 'Leveraging intelligence to enhance productivity and efficiency.'
}];
export function Perspective() {
  return <section id="perspective" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="order-2 lg:order-1">
          {/* Perspective Section - No Card */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0071E3] animate-pulse" />
              <h2 className="text-base md:text-lg font-bold text-[#0071E3] uppercase tracking-wider">
                Perspective
              </h2>
            </div>
            <img 
              src="/Perspective.png" 
              alt="Perspective" 
              className="w-9 h-10 object-contain -mt-5"
            />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-black via-gray-800 to-[#0071E3] bg-clip-text text-transparent">
              Code without purpose is just text.
            </span>
          </h3>
          
          <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed mb-10">
            <p className="relative pl-4 border-l-2 border-[#0071E3]/30">
              As an Information Technology undergraduate at SLIIT, I believe
              that code without purpose is just text. My focus goes beyond
              syntax, leveraging AI to maximize productivity and efficiency, I
              strive to bridge the gap between complex ideas and human
              experiences.
            </p>
            <p className="relative pl-4 border-l-2 border-purple-500/30">
              My focus is to build software that matters. To me, the best
              digital products should feel inevitable, like they were always
              meant to be there.
            </p>
          </div>

          {/* Creative View Resume Button */}
          <motion.a 
            href="/Umindu_Isith_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-4 overflow-hidden rounded-2xl font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0071E3] via-[#0077ED] to-purple-600 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-[#0077ED] to-[#0071E3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Button content */}
            <span className="relative flex items-center gap-3">
              <Eye size={20} className="group-hover:animate-bounce" />
              <span>View Resume</span>
              <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </motion.a>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Creative Profile Image Section */}
          <div className="relative">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#0071E3] to-purple-600 rounded-2xl"
              style={{ zIndex: 0 }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-500/40 to-[#0071E3]/40 rounded-full blur-2xl"
              style={{ zIndex: 0 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating dots decoration */}
            <motion.div 
              className="absolute -top-4 left-1/4 w-3 h-3 bg-[#0071E3] rounded-full z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/4 -right-4 w-2 h-2 bg-purple-500 rounded-full z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-1/4 -left-4 w-2.5 h-2.5 bg-[#0071E3]/70 rounded-full z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Main image container with gradient border */}
            <motion.div 
              className="relative z-10 p-1 rounded-3xl bg-gradient-to-br from-[#0071E3] via-purple-500 to-[#0071E3]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-72 md:w-80 aspect-[4/5] rounded-[20px] overflow-hidden bg-white">
                <img 
                  src="/Profile.jpg" 
                  alt="Umindu Isith" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </motion.div>
            
            {/* Status badge */}
            <motion.div 
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 bg-white rounded-full shadow-lg border border-gray-100 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-700">Crafting Experiences</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: '-50px' }} 
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group h-48 [perspective:1000px]"
          >
            {/* Flip Card Container */}
            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-[#E5E5E5]/50 shadow-lg flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0071E3] to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/25">
                  <pillar.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-black text-center">
                  {pillar.title}
                </h4>
              </div>
              
              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#0071E3] to-purple-600 flex flex-col items-center justify-center p-8 shadow-xl">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5 text-white">
                  <pillar.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold text-white/90 mb-3 text-center">
                  {pillar.title}
                </h4>
                <p className="text-white/95 text-center text-base leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>;
}