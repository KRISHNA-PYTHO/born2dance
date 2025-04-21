import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

import MumbaiIcon from '@/assets/icons/mumbai.svg';
import DelhiIcon from '@/assets/icons/delhi.svg';
import PuneIcon from '@/assets/icons/pune.svg';
import HyderabadIcon from '@/assets/icons/hyderabad.svg';
import ChennaiIcon from '@/assets/icons/chennai.svg';
import KolkataIcon from '@/assets/icons/kolkata.svg';

gsap.registerPlugin(ScrollTrigger);

const indianCities = [
  { name: "Mumbai" },
  { name: "Delhi" },
  { name: "Pune" },
  { name: "Hyderabad" }
];

const additionalIndianCities = [
  { name: "Chennai" },
  { name: "Kolkata" }
];

const CityIcon: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex flex-col items-center group">
    <div className="w-32 h-32 mb-3 flex items-center justify-center">
      <img 
        src={`/icons/${name.toLowerCase()}.svg`}
        alt={`${name} icon`}
        width={100}
        height={100}
        className="object-contain transition-transform group-hover:scale-110"
      />
    </div>
    <span className="text-lg font-medium text-white group-hover:text-dance-accent transition-colors">{name}</span>
  </div>
);

// Remove the individual SVG imports from the top of the file
const GlobalDanceSection: React.FC = () => {
  const [showMore, setShowMore] = React.useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

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
  }, []);

  return (
    <section 
      id="global" 
      ref={sectionRef}
      className="py-24 bg-dance bg-opacity-95"
    >
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">B2D</span> Classes
          </h2>
          <p className="text-xl text-gray-300 mt-4">
          Register your dance academy at B2D to get more local enquiries
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {indianCities.map((city, index) => (
                <CityIcon key={`indian-${index}`} name={city.name} />
              ))}
            </div>
          </div>

          {showMore && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeIn">
              {additionalIndianCities.map((city, index) => (
                <CityIcon key={`additional-${index}`} name={city.name} />
              ))}
            </div>
          )}
          
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 bg-dance-accent text-white rounded-lg hover:bg-opacity-90 transition-all"
            >
              {showMore ? 'Show Less' : 'View More Cities'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalDanceSection;