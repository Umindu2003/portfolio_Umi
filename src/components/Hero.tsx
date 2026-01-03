import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const taglines = [
    'Vision Beyond Syntax',
    'Designing with Purpose',
    'Defined by Simplicity'
  ];

  return <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20 pb-32 overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0071E3]/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Floating Bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${6 + (i % 5) * 3}px`,
              height: `${6 + (i % 5) * 3}px`,
              left: `${5 + i * 8}%`,
              top: `${20 + (i % 5) * 15}%`,
              background: i % 3 === 0 
                ? 'linear-gradient(135deg, #0071E3 0%, #0071E3 100%)' 
                : i % 3 === 1 
                  ? 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)'
                  : 'linear-gradient(135deg, #0071E3 0%, #8B5CF6 100%)',
              boxShadow: i % 3 === 0 
                ? '0 0 10px rgba(0, 113, 227, 0.4)' 
                : '0 0 10px rgba(139, 92, 246, 0.4)',
            }}
            animate={{
              y: [0, -25 - (i % 4) * 8, 0],
              x: [0, (i % 2 === 0 ? 8 : -8), 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full text-center z-10">
        {/* Main Logo with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16"
        >
          {/* Subtle Glow */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-64 h-64 bg-gradient-to-r from-[#0071E3]/20 to-purple-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Logo Image */}
          <motion.img 
            src="/Hello_Logo_.png" 
            alt="Hello Logo" 
            className="relative w-full max-w-2xl mx-auto h-auto" 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Floating Taglines - Simple Text */}
        <div className="space-y-6">
          {taglines.map((line, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 + index * 0.2 },
                y: { 
                  duration: 3 + index * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.3
                }
              }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 tracking-tight cursor-default hover:text-[#0071E3] transition-colors duration-300"
            >
              {line}
            </motion.h2>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#0071E3] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>;
}