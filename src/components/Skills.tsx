import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Terminal, PenTool, Server, Cpu, Cloud } from 'lucide-react';

// Technology logos using devicon CDN
const skillLogos: Record<string, string> = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Expo': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/expo.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Appwrite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
};

const skillCategories = [{
  title: 'Frontend',
  icon: Layout,
  gradient: 'from-blue-500 to-cyan-500',
  bgLight: 'bg-blue-50',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap']
}, {
  title: 'Backend',
  icon: Server,
  gradient: 'from-green-500 to-emerald-500',
  bgLight: 'bg-green-50',
  skills: ['Node.js', 'Express', 'PHP', 'Java']
}, {
  title: 'Database',
  icon: Database,
  gradient: 'from-purple-500 to-pink-500',
  bgLight: 'bg-purple-50',
  skills: ['MongoDB', 'MySQL']
}, {
  title: 'Tools & Workflow',
  icon: Terminal,
  gradient: 'from-orange-500 to-red-500',
  bgLight: 'bg-orange-50',
  skills: ['Git', 'Vite', 'Postman', 'Expo']
}, {
  title: 'Backend Services',
  icon: Cloud,
  gradient: 'from-indigo-500 to-violet-500',
  bgLight: 'bg-indigo-50',
  skills: ['Appwrite', 'Firebase', 'Supabase']
}, {
  title: 'Design',
  icon: PenTool,
  gradient: 'from-pink-500 to-rose-500',
  bgLight: 'bg-pink-50',
  skills: ['Figma']
}];

export function Skills() {
  return <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} className="text-center mb-16">
        <img 
          src="/TechnicalU.png"
          alt="Technical Skills"
          className="w-10 h-10 md:w-12 md:h-12 object-contain mb-0 mx-auto"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Technical Skills
        </h2>
        <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
          A comprehensive toolkit for building modern digital experiences.
        </p>
      </motion.div>

      {/* Skills Grid - All Visible */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <category.icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
                <p className="text-xs text-gray-400">{category.skills.length} technologies</p>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 ${category.bgLight} text-gray-700 text-sm font-medium rounded-lg hover:shadow-md transition-all cursor-default`}
                >
                  {skillLogos[skill] && (
                    <img 
                      src={skillLogos[skill]} 
                      alt={skill} 
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Bottom Gradient Line */}
            <div className={`h-1 w-full mt-5 rounded-full bg-gradient-to-r ${category.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-300`} />
          </motion.div>
        ))}
      </div>
    </section>;
}