import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-dance bg-opacity-95 shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/born2dance.webp" 
              alt="B2D Logo" 
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-dance-accent transition-colors">Home</a>
          <a href="#learn" className="text-white hover:text-dance-accent transition-colors">Learn</a>
          <a href="#hire" className="text-white hover:text-dance-accent transition-colors">Hire</a>
          <a href="#global" className="text-white hover:text-dance-accent transition-colors">Explore</a>
          <a href="#studios" className="text-white hover:text-dance-accent transition-colors">Studios</a>
          <a href="#about" className="text-white hover:text-dance-accent transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-dance-accent transition-colors">Contact</a>
          <a 
            href="#download" 
            className="bg-dance-accent text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-80 transition-all"
          >
            Download
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-dance bg-opacity-95 z-40 transition-all duration-300 flex flex-col",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: '60px' }}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <a 
            href="#" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#learn" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn
          </a>
          <a 
            href="#hire" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire
          </a>
          <a 
            href="#global" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore
          </a>
          <a 
            href="#studios" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Studios
          </a>
          <a 
            href="#about" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-white text-lg font-medium py-2 hover:text-dance-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.born2dance" 
            className="bg-dance-accent text-white px-5 py-3 rounded-full font-medium text-center hover:bg-opacity-80 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;