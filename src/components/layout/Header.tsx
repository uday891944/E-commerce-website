import React, { useState, useEffect } from 'react';
import { Flower, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center"
          aria-label="Go to homepage"
        >
          <Flower className={`mr-2 ${isScrolled ? 'text-primary-600' : 'text-white'}`} size={24} />
          <span 
            className={`font-serif text-xl ${isScrolled ? 'text-primary-800' : 'text-white'}`}
          >
            Geevah Decor
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'about', 'gallery', 'services', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className={`font-medium transition-all duration-300 ${
                    isScrolled ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-primary-200'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X 
              className={`${isScrolled ? 'text-neutral-800' : 'text-white'}`} 
              size={24} 
            />
          ) : (
            <Menu 
              className={`${isScrolled ? 'text-neutral-800' : 'text-white'}`} 
              size={24} 
            />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute w-full shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col space-y-4">
              {['home', 'about', 'gallery', 'services', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="block py-2 text-neutral-800 hover:text-primary-600 font-medium transition-colors duration-300"
                    onClick={closeMobileMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;