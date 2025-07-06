import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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
      id="about" 
      className="section bg-neutral-50 relative"
    >
      <div 
        className="absolute inset-0 opacity-10 bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container relative">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-primary-800">Our Story</h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h3 className="font-serif text-2xl mb-4 text-primary-700">Passionate About Beautiful Spaces</h3>
              <p className="mb-4 text-neutral-700">
                Founded with a passion for transforming ordinary spaces into extraordinary experiences, 
                Geevah Decor brings artistry and elegance to every project we undertake.
              </p>
              <p className="mb-4 text-neutral-700">
                Our journey began with a simple belief: that thoughtfully curated floral and decor 
                elements have the power to transform not just spaces, but emotions and experiences.
              </p>
              <p className="mb-6 text-neutral-700">
                Today, we pride ourselves on creating bespoke interior styling and floral 
                arrangements that tell your unique story while elevating the aesthetic and 
                ambiance of your space.
              </p>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg" 
                alt="Geevah Decor floral arrangement" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;