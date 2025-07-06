import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram } from 'lucide-react';
import { instagramImages } from '../../data/images';

const InstagramFeed = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="instagram" className="section bg-neutral-100">
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center mb-3"
          >
            <Instagram size={28} className="text-primary-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-800">
              @geevahdecor
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl mx-auto text-neutral-600"
          >
            Follow us on Instagram for daily inspiration and behind-the-scenes glimpses of our latest projects.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-4 gap-4"
        >
          {instagramImages.map((image) => (
            <motion.a
              key={image.id}
              href="https://instagram.com/geevahdecor"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                <Instagram 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  size={32} 
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://instagram.com/geevahdecor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <span>View more on Instagram</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;