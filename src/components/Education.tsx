import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [{
  year: 'Present',
  degree: 'BSc (Hons) in Information Technology',
  school: 'Sri Lanka Institute of Information Technology (SLIIT)',
  location: 'Malabe, Sri Lanka',
  color: 'from-blue-500 to-cyan-500'
}, {
  year: '2022',
  degree: 'GCE A/L – Commerce Stream',
  school: 'Taxila Central College, Horana',
  location: 'Horana, Sri Lanka',
  color: 'from-purple-500 to-pink-500'
}, {
  year: '2019',
  degree: 'GCE O/L',
  school: 'Vidyarathna University College, Horana',
  location: 'Horana, Sri Lanka',
  color: 'from-orange-500 to-amber-500'
}];

export function Education() {
  return <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} className="text-center mb-16">
        <motion.img 
          src="/EducationU.png"
          alt="Education"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-14 h-14  object-contain mb-4 mx-auto"
        />
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Education
        </h2>
        <p className="text-[#4A4A4A]">Building a strong foundation for innovation</p>
      </motion.div>

      <div className="relative">
        {/* Animated timeline line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#0071E3] via-[#0071E3]/50 to-transparent"
        />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#0071E3] z-10 shadow-lg shadow-[#0071E3]/30"
              />

              {/* Year badge - positioned on timeline */}
              <div className={`hidden md:block absolute left-1/2 ${index % 2 === 0 ? 'translate-x-8' : '-translate-x-[calc(100%+2rem)]'}`}>
                <motion.span 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} text-white text-sm font-bold rounded-full shadow-lg`}
                >
                  <Calendar className="w-4 h-4" />
                  {item.year}
                </motion.span>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-20 md:pl-0`}>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(0,113,227,0.15)' }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E5E5]/50 transition-all duration-300 group"
                >
                  {/* Mobile year badge */}
                  <span className={`md:hidden inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full mb-4`}>
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>

                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shrink-0 shadow-lg`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#0071E3] transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-[#4A4A4A] font-medium mb-2">{item.school}</p>
                      <div className="flex items-center gap-1.5 text-[#4A4A4A]/70 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-[calc(50%-4rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
}