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
  title: 'Scrum Fundamentals Certified (SFC™)',
  issuer: 'VMEdu, Inc.',
  image: '/SCRUM.png',
  color: 'from-green-400 to-emerald-500',
  link: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-UminduIsith-1138046.pdf'
}, {
  title: 'AI Data Strategy with MongoDB (on-demand)',
  issuer: 'MongoDB',
  image: '/Mongodb AI DATA.png',
  color: 'from-green-500 to-green-700',
  link: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b1aa6d5a-72f6-4d4d-81fc-12ec12706288-it23226432-gallage-u-i-i-25ec7627-60bd-46f1-bc74-8375a448b438-certificate.pdf'
}, {
  title: 'MongoDB Atlas Security',
  issuer: 'MongoDB',
  image: '/Mongodb Security.png',
  color: 'from-emerald-500 to-green-600',
  link: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b1aa6d5a-72f6-4d4d-81fc-12ec12706288-it23226432-gallage-u-i-i-fd9e56df-a1fb-4988-a049-b22e18de8da2-certificate.pdf'
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
          className="w-10 h-10 md:w-14 md:h-14 object-contain mb-0 mx-auto"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Certifications
        </h2>
        <p className="text-gray-500 text-sm">
          Continuous learning and professional validation.
        </p>
      </motion.div>

      {/* Compact Certification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
          >
            {/* Certificate Image */}
            <div className="relative aspect-[16/11] overflow-hidden">
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
            <div className="p-3 flex flex-col flex-grow">
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                {cert.issuer}
              </p>
              <h3 className={`font-semibold text-gray-800 mb-2 leading-tight line-clamp-2 ${cert.title.length > 38 ? 'text-xs' : 'text-sm'} min-h-[2.5rem]`}>
                {cert.title}
              </h3>
              
              {/* View Button */}
              <div className="mt-auto">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>;
}