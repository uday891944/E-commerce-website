import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../../data/services';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="section relative bg-primary-50">
      <div 
        className="absolute inset-0 opacity-5 bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg')",
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
            Our Services
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
            className="max-w-2xl mx-auto text-neutral-600"
          >
            From stunning floral arrangements to comprehensive interior styling, our services are designed to transform your spaces with elegance and sophistication.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="service-card flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-700">
                {service.title}
              </h3>
              <p className="text-neutral-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;