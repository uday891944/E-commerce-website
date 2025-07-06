import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone, Flower, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-950 text-neutral-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Flower className="text-primary-400 mr-2" size={24} />
              <h3 className="font-serif text-xl text-white">Geevah Decor</h3>
            </div>
            <p className="mb-6 text-neutral-400">
              Transforming spaces with elegant floral touches and sophisticated interior styling.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/geevahdecor" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on Facebook"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contact@geevahdecor.com" 
                aria-label="Email us"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/message/R7BDA3RU3FFIE1" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="hover:text-primary-400 transition-colors duration-300"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">123 Floral Avenue, Suite 456, Decor City, DC 78901</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contact@geevahdecor.com" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                >
                  contact@geevahdecor.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                <a 
                  href="https://wa.me/message/R7BDA3RU3FFIE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} Geevah Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;