import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  success?: boolean;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (formStatus.submitted && formStatus.success) {
    return (
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
    );
  }

  return (
    <motion.form 
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
    >
      <motion.div variants={inputVariants} className="mb-6">
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
      
      <motion.div variants={inputVariants} className="mb-6">
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
      
      <motion.div variants={inputVariants} className="mb-8">
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
      
      <motion.div variants={inputVariants} className="text-center">
        <button
          type="submit"
          className="btn btn-primary w-full md:w-auto"
        >
          <span className="mr-2">Send Message</span>
          <Send size={18} />
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;