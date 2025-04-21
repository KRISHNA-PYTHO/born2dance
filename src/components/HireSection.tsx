import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ChoreographerProps {
  name: string;
  image: string;
  specialty: string;
  rating: number;
  type: 'all' | 'Choreographer' | 'Senior Dancer' | 'Child Dancer' | 'Group Dancer' | 'Zumba';
}

const choreographers: ChoreographerProps[] = [
  {
    name: "Shakti Mohan",
    image: "/sakti.jpeg",
    specialty: "Choreographer",
    rating: 4.9,
    type: "Choreographer"
  },
  {
    name: "Terrance Lewis",
    image: "/tal.jpeg",
    specialty: "Choreographer",
    rating: 4.9,
    type: "Group Dancer"
  },
  {
    name: "Remo D'Souza",
    image: "/remo.jpeg",
    specialty: "Choreographer",
    rating: 4.9,
    type: "Senior Dancer"
  },
  {
    name: "Geeta Kapoor",
    image: "/geeta.jpeg",
    specialty: "Choreographer",
    rating: 4.9,
    type: "Child Dancer"
  },
  {
    name: "Prabhu Deva",
    image: "/prabhu.jpeg",
    specialty: "Choreographer",
    rating: 4.9,
    type: "Senior Dancer"
  },
  {
    name: "Salman Yusuf Khan",
    image: "/sultan.jpeg",
    specialty: "Choreographer",
    rating: 4.9,
    type: "Zumba"
  }
];

// Update the ChoreographerCard component
const ChoreographerCard: React.FC<ChoreographerProps & { index: number }> = ({
  name,
  image,
  specialty,
  rating,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-48 h-48 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full rounded-full object-cover border-4 border-dance-accent"
        />
        <div className="absolute bottom-0 right-0 bg-dance-accent text-white rounded-full px-3 py-1 text-sm font-medium">
          {rating} ★
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-300 text-lg mb-4">{specialty}</p>
      <button className="bg-dance-accent text-white font-medium px-6 py-2 rounded-full 
            transition-all duration-300 
            hover:bg-opacity-90 hover:scale-110 
            hover:shadow-lg hover:shadow-dance-accent/30 
            hover:-translate-y-1 
            active:scale-95 
            bg-gradient-to-r from-dance-accent to-purple-600
            border border-dance-accent/20
            relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Hire Now
              <svg 
                className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-dance-accent/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
    </div>
  );
};

// Update the filter types in the HireSection component
const HireSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'all' | 'bollywood' | 'contemporary' | 'hiphop' | 'freestyle' | 'ballet'>('all');

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
  }, []);

  const filteredChoreographers = React.useMemo(() => {
    return filter === 'all' 
      ? choreographers 
      : choreographers.filter(c => c.type === filter as ChoreographerProps['type']);
  }, [filter]);

  return (
    <section 
      id="hire" 
      ref={sectionRef}
      className="py-24 bg-dance"
    >
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn from <span className="gradient-text">Expert Dance Masters</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the magic of dance with our highly rated Choreographer specializing in Global Dance Forms. Perfect for performances, events, and personal training.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-4">
          {['all', 'Choreographer', 'Senior Dancer', 'Child Dancer', 'Group Dancer', 'Zumba'].map((style) => (
            <button 
              key={style}
              onClick={() => setFilter(style as typeof filter)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all transform",
                filter === style 
                  ? "bg-dance-accent text-white scale-105" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700",
                "hover:scale-105 active:scale-95"
              )}
            >
              {style === 'all' ? 'All Dancer' : style.charAt(0).toUpperCase() + style.slice(1)}
            </button>
          ))}
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={filter}
        >
          {filteredChoreographers.map((choreographer, index) => (
            <ChoreographerCard
              key={`${choreographer.name}-${index}`}
              {...choreographer}
              index={index}
            />
          ))}
          {filteredChoreographers.length === 0 && (
            <div className="col-span-full text-center text-gray-300 py-12">
              No choreographers found for this style.
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          {/* Download buttons section remains unchanged */}
        </div>
      </div>
    </section>
  );
};

export default HireSection;