import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { toast } from 'react-toastify';

const Contact = () => {
  const { addMessage } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real scenario with EmailJS:
    // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    
    // For this portfolio, we save to our localStorage Admin dashboard
    setTimeout(() => {
      addMessage({
        ...formData,
        date: new Date().toISOString(),
        read: false
      });
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000); // Simulate network delay
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Something Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm open to opportunities, projects, and conversations around software development, full-stack engineering, and DevOps.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase">Email</p>
                <a href="mailto:kunal@example.com" className="text-lg font-medium hover:text-brand-blue transition-colors">kunal@example.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase">Phone</p>
                <a href="tel:+910000000000" className="text-lg font-medium hover:text-brand-purple transition-colors">+91 0000000000</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase">Location</p>
                <p className="text-lg font-medium">Tirupur, India</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-semibold text-slate-500 uppercase mb-4">Connect Professionally</h4>
              <div className="flex gap-4">
                <a href="https://github.com/kunal123-ui" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kunal-m-cse" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              
              <p className="text-xs text-slate-500 mt-4 text-center md:text-left">
                * Note: In this portfolio build, messages are stored locally in the browser and can be viewed in the Admin Dashboard. To connect to an email service, integrate Formspree or EmailJS.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
