
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StudioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !contentRef.current || !formRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    tl.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");

    tl.from(formRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");

    // Create map markers
    createMapMarkers();
  }, []);

  const createMapMarkers = () => {
    const mapContainer = document.querySelector('.map-container');
    if (!mapContainer) return;

    const cities = [
      { x: 20, y: 30 },
      { x: 35, y: 25 },
      { x: 45, y: 40 },
      { x: 65, y: 35 },
      { x: 75, y: 50 },
      { x: 85, y: 30 },
    ];

    cities.forEach((city, index) => {
      const marker = document.createElement('div');
      marker.className = 'absolute w-4 h-4 bg-dance-accent rounded-full';
      marker.style.left = `${city.x}%`;
      marker.style.top = `${city.y}%`;
      
      const pulse = document.createElement('div');
      pulse.className = 'absolute w-4 h-4 bg-dance-accent rounded-full animate-pulse-glow';
      
      marker.appendChild(pulse);
      mapContainer.appendChild(marker);

      gsap.from(marker, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.1 * index + 0.5,
        ease: "back.out"
      });
    });
  };

  return (
    <section 
      id="studios" 
      ref={sectionRef}
      className="py-24 bg-dance"
    >
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Connect Locally,</span> Shine Globally
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Studios can register and attract students through our platform. Join our growing network of dance studios worldwide.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div 
            ref={contentRef} 
            className="lg:w-1/2 bg-gray-800 bg-opacity-30 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="map-container relative w-full h-full min-h-[400px]">
              {/* World map background with gradient overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-dance to-transparent opacity-80"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 text-dance-accent" /> 
                    Get B2D Franchises
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Join our network of over 500+ dance studios across 50+ cities worldwide. Get discovered by thousands of dance enthusiasts looking for quality instruction.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-dance bg-opacity-70 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Benefits for Studios</h4>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-dance-accent mr-2">✓</span> 
                        <span>Increased visibility in your local area</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dance-accent mr-2">✓</span> 
                        <span>Tools to manage your schedule and bookings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dance-accent mr-2">✓</span> 
                        <span>Connect with professional choreographers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef} 
            className="lg:w-1/2 bg-gray-800 bg-opacity-30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Register Your Studio</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Studio Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-dance-accent focus:ring-1 focus:ring-dance-accent outline-none transition-all"
                  placeholder="Enter your studio name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Location</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-dance-accent focus:ring-1 focus:ring-dance-accent outline-none transition-all"
                  placeholder="City, Country"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-dance-accent focus:ring-1 focus:ring-dance-accent outline-none transition-all"
                    placeholder="contact@yourstudio.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-dance-accent focus:ring-1 focus:ring-dance-accent outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Dance Styles Offered</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-dance-accent focus:ring-1 focus:ring-dance-accent outline-none transition-all"
                  placeholder="e.g., Hip-Hop, Ballet, Contemporary, etc."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Description</label>
                <textarea 
                  className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-dance-accent focus:ring-1 focus:ring-dance-accent outline-none transition-all"
                  placeholder="Tell us about your studio..."
                  rows={4}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-dance-accent text-white rounded-lg py-3 font-semibold hover:animate-pulse-glow transition-all"
              >
                Register Your Studio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
