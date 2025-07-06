import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { galleryImages } from '../../data/images';

const Gallery = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-serif font-medium mb-4 text-primary-800"
          >
            My Gallery
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
            Explore our collection of handmade products, brass artifacts, and home improvement projects.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover image-hover"
                />
                <div className="overlay flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <h3 className="text-white font-serif text-lg">
                      {image.caption}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;