import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({
    submitted: false
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="contact" 
      className="section relative bg-neutral-50"
    >
      <div 
        className="absolute inset-0 opacity-5 bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-serif font-medium mb-4 text-primary-800"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-24 h-1 bg-primary-400 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-neutral-600 mb-4"
          >
            Have a project in mind or a question about our services? We'd love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <a
              href="https://wa.me/message/R7BDA3RU3FFIE1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              <MessageSquare size={20} className="mr-2" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 relative z-10"
        >
          {formStatus.submitted && formStatus.success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-serif text-primary-700 mb-3">Message Sent!</h3>
              <p className="text-neutral-600">{formStatus.message}</p>
              <button
                onClick={() => setFormStatus({ submitted: false })}
                className="mt-6 text-primary-600 hover:text-primary-700 font-medium"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="name" className="block mb-2 text-neutral-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="email" className="block mb-2 text-neutral-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-8">
                <label htmlFor="message" className="block mb-2 text-neutral-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto"
                >
                  <span className="mr-2">Send Message</span>
                  <Send size={18} />
                </button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;