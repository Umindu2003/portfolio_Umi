import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Phone, Send, MapPin, Clock, Sparkles, ArrowUpRight, Copy, Check } from 'lucide-react';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_6z08t27';
const EMAILJS_TEMPLATE_ID = 'template_2f500ga';
const EMAILJS_PUBLIC_KEY = 'qVuCxBwCS7I4KenOD';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'uminduisith07@gmail.com',
    href: 'mailto:uminduisith07@gmail.com',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    hoverBg: 'group-hover:bg-red-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Umindu2003',
    href: 'https://github.com/Umindu2003',
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-500/10',
    hoverBg: 'group-hover:bg-gray-900'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Umindu Isith',
    href: 'https://www.linkedin.com/in/umindu-isith-83a802224',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-500/10',
    hoverBg: 'group-hover:bg-blue-600'
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+94 76 998 4320',
    href: 'https://wa.me/94769984320',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    hoverBg: 'group-hover:bg-green-500'
  }
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('uminduisith07@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map field names to state keys
    const fieldMap: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email',
      'message': 'message'
    };
    const stateKey = fieldMap[name] || name;
    setFormData({ ...formData, [stateKey]: value });
  };

  return <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <img 
          src="/ConnectU.png"
          alt="Connect"
          className="w-10 h-10 md:w-12 md:h-12 object-contain mb-0 mx-auto"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side - Main CTA Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="relative h-full bg-gradient-to-br from-[#0071E3] to-purple-600 rounded-3xl p-8 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Send className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              {/* Form Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm text-white/70 font-medium mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    //placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 font-medium mb-2 block">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    //placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 font-medium mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    //placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-green-500/20 border border-green-400/30 rounded-xl text-green-100 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-500/20 border border-red-400/30 rounded-xl text-red-100 text-sm"
                >
                  ✗ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-3 w-full px-5 py-4 bg-white rounded-2xl text-gray-800 font-semibold hover:shadow-lg transition-all disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} className="text-[#0071E3]" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Right Side - Social Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-4"
        >
          {/* Email Card with Copy */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/25 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-400 font-medium">Email Address</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 break-all">uminduisith07@gmail.com</p>
                </div>
              </div>
              <motion.button
                onClick={copyEmail}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all flex-shrink-0 w-full sm:w-auto ${
                  copiedEmail 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                {copiedEmail ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
          </motion.div>

          {/* Other Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialLinks.slice(1).map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <link.icon size={22} />
                </div>
                <p className="text-xs text-gray-400 font-medium mb-1">{link.label}</p>
                <p className="font-semibold text-gray-800 group-hover:text-[#0071E3] transition-colors">{link.value}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-gray-400 group-hover:text-[#0071E3] transition-colors">
                  <span>Connect</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Available for new opportunities</p>
                <p className="text-sm text-gray-500">Looking to learn and contribute through an internship</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20 pt-10 border-t border-gray-100"
      >
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Umindu Isith. Crafted with purpose.
        </p>
        <p className="text-gray-300 text-xs mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </motion.footer>
    </section>;
}