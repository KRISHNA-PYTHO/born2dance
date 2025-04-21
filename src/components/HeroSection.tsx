
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { Apple, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Subtitle animation
    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");

    // Button animation
    tl.from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.3");

    // Image animation
    tl.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // Create particles
    createParticles();
    return () => {
      if (particlesRef.current) {
        while (particlesRef.current.firstChild) {
          particlesRef.current.removeChild(particlesRef.current.firstChild);
        }
      }
    };
  }, []);

  const createParticles = () => {
    if (!particlesRef.current) return;
    const particlesContainer = particlesRef.current;
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random size
      const size = Math.random() * 15 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;

      // Random opacity
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();

      // Animation
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Particles container */}
      <div ref={particlesRef} className="particles-container"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Born To Dance <span className="gradient-text">  Subko Milega Chance. </span> 
            </h1>
            <p ref={subtitleRef} className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
            We’ve got a stage for everyone — learners, professionals, and dreamers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8" ref={buttonsRef}>
              <a 
                href="https://play.google.com/store/apps/details?id=com.born2dance" 
                className="flex items-center justify-center bg-dance-accent hover:bg-opacity-90 text-white py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.954 11.616L5.414 4.076L16.724 9.905L12.954 11.616ZM3.655 3.303L13.466 13.114L17.892 11.042L3.655 3.303ZM15.643 14.914L18.633 12.774L15.643 14.914ZM2 3.414L2 20.586L13.434 14.344L2 3.414Z" fill="white" />
                  </svg>
                </div>
                <button className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </button>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.born2dance" 
                className="flex items-center justify-center bg-white text-dance py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-50"
              >
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0409 12.0783C17.0259 10.1224 18.1559 9.01526 18.2069 8.96385C17.4519 7.92011 16.2469 7.7654 15.8369 7.74696C14.7949 7.64414 13.7909 8.35646 13.2619 8.35646C12.7299 8.35646 11.9179 7.76387 11.0599 7.78078C9.95091 7.79769 8.92011 8.38611 8.33322 9.329C7.12529 11.2326 8.0129 14.0246 9.1699 15.6037C9.7509 16.3806 10.4329 17.2486 11.3229 17.2194C12.1919 17.1871 12.5359 16.6722 13.5929 16.6722C14.6489 16.6722 14.9749 17.2194 15.8829 17.2007C16.8169 17.1871 17.4099 16.4216 17.9729 15.6383C18.6299 14.7451 18.8889 13.869 18.9019 13.8228C18.8759 13.8143 17.0569 13.1405 17.0409 12.0783Z" fill="#0F172A" />
                    <path d="M15.3919 6.45474C15.8599 5.87784 16.1709 5.1138 16.0749 4.33594C15.3919 4.36436 14.5489 4.79547 14.0659 5.35852C13.6329 5.86029 13.2599 6.65662 13.3689 7.40204C14.1379 7.46188 14.9109 7.02782 15.3919 6.45474Z" fill="#0F172A" />
                  </svg>
                </div>
                <button className="text-left">
                  <div className="text-xs text-dance">Download on the</div>
                  <div className="text-lg font-semibold text-dance">App Store</div>
                </button>
              </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div ref={imageRef} className="lg:w-1/2">
            <div className="relative w-[280px] mx-auto">
              {/* Phone Frame */}
              <div className="relative w-full pb-[200%] bg-gray-800 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl">
                {/* Screen Content */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                  <img 
                    src="/hero.png" 
                    alt="Dancers in motion" 
                    className="w-full h-full object-cover object-center animate-float" 
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-7 bg-gray-800 rounded-b-3xl"></div>
                
                {/* Button */}
                <div className="absolute -right-[11px] top-[20%] w-[3px] h-12 bg-gray-700 rounded-l-lg"></div>
                <div className="absolute -left-[11px] top-[15%] w-[3px] h-8 bg-gray-700 rounded-r-lg"></div>
                <div className="absolute -left-[11px] top-[25%] w-[3px] h-8 bg-gray-700 rounded-r-lg"></div>
              </div>
              
              {/* Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[3rem] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
