import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TutorialCardProps {
  title: string;
  image: string;
  level: string;
  duration: string;
  index: number;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  image,
  level,
  duration,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.15,
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
      className="animated-card bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dance-accent bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="text-dance-accent ml-1" size={24} />
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-dance-accent text-white text-xs rounded-full px-3 py-1">
          {level}
        </div>
        <div className="absolute top-3 right-3 bg-gray-900 bg-opacity-70 text-white text-xs rounded-full px-3 py-1">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-400 text-sm">4.8 ★★★★★</div>
          <div className="text-gray-400 text-sm">2.4k views</div>
        </div>
      </div>
    </div>
  );
};

const tutorials = [
  {
    title: "Hip-Hop Foundations",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    level: "Beginner",
    duration: "45 min"
  },
  {
    title: "Bollywood Flow",
    image: "https://images.unsplash.com/photo-1504609813442-a9c86dff0c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    level: "Intermediate",
    duration: "60 min"
  },
  {
    title: "Contemporary Expressions",
    image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    level: "Advanced",
    duration: "75 min"
  },
  {
    title: "Street Dance Battle",
    image: "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    level: "All Levels",
    duration: "90 min"
  }
];

const LearnSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const danceStyles = [
    { name: "Despacito", icon: "🎵" },
    { name: "Naatu Naatu", icon: "🎵" },
    { name: "Gangnam Style", icon: "🎵" },
    { name: "Chaiyya Chaiyya", icon: "🎵" },
    { name: "Uptown Funk", icon: "🎵" },
    { name: "Dil Se Re", icon: "🎵" },
    { name: "Shape of You", icon: "🎵" },
    { name: "Malhari", icon: "🎵" }
  ];

  return (
    <section 
      id="learn" 
      ref={sectionRef}
      className="py-24 bg-dance bg-opacity-95"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Frame */}
          <div className="relative mx-auto max-w-[280px] lg:max-w-[320px] border-gray-800">
            <div className="relative z-10">
              <div className="relative bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-3xl z-20"></div>
                
                {/* Screen */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                  <img 
                    src="/dance2.png" 
                    alt="Dance App Interface" 
                    className="w-full h-[580px] object-cover object-top"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
                </div>

                {/* Bottom indicator */}
                <div className="mt-2 flex justify-center">
                  <div className="w-28 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Background glow */}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transform -translate-y-1/4"></div>
          </div>

          {/* Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">100+ Songs.</span> Infinite Moves.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Learn to dance step-by-step on your favorite tracks — from Bollywood to global beats, all in one place.
            </p>

            {/* Dance Styles Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {danceStyles.map((style, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-gray-800 bg-opacity-50 p-4 rounded-xl hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-2xl">{style.icon}</span>
                  <span className="text-white font-medium">{style.name}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300 italic">
              Can't find your song or want something more custom? Request a personalized tutorial video from our professional choreographers — just for you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;