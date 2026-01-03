import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';

const certifications = [{
  title: "CS50's Introduction to AI with Python",
  issuer: 'Harvard University',
  image: "/cert.jpg",
  color: 'from-red-500 to-rose-600',
  link: 'https://certificates.cs50.io/153993b9-4acc-479d-8f67-c2ecb9053231.pdf?size=letter'
}, {
  title: 'Meta Front-End Developer',
  issuer: 'Coursera',
  image: 'https://placehold.co/400x300/FFFFFF/0071E3?text=Meta+Cert',
  color: 'from-blue-500 to-indigo-600',
  link: '#'
}, {
  title: 'AWS Cloud Practitioner',
  issuer: 'Amazon Web Services',
  image: 'https://placehold.co/400x300/FFFFFF/0071E3?text=AWS+Cert',
  color: 'from-orange-500 to-amber-600',
  link: '#'
}];

export function Certifications() {
  return <section id="certifications" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} className="text-center mb-10">
        <img 
          src="/CertU.png"
          alt="Certifications"
          className="w-14 h-14 object-contain mb-2 mx-auto"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Certifications
        </h2>
        <p className="text-gray-500 text-sm">
          Continuous learning and professional validation.
        </p>
      </motion.div>

      {/* Compact Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Certificate Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Award Badge */}
              <div className={`absolute top-2 right-2 w-8 h-8 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center shadow-md`}>
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                {cert.issuer}
              </p>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 leading-tight line-clamp-2">
                {cert.title}
              </h3>
              
              {/* View Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${cert.color} text-white text-xs font-medium rounded-lg hover:shadow-md transition-shadow`}
              >
                <Award size={12} />
                View
                <ExternalLink size={10} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>;
}