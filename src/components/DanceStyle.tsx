import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users } from "lucide-react";

interface ChoreographerProps {
  name: string;
  title: string;
  image: string;
}

{/*const ChoreographerCard = ({ name, title, image }: ChoreographerProps) => (
  <div className="hire-anim flex flex-col items-center">
    <div className="relative group">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-violet/50 transition-all duration-300">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-top transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/30 to-violet/70 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-transparent text-navy font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-transparent hover:gradient-text border-2 border-transparent hover:border-violet">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-lg font-bold mt-4 mb-1 text-white">{name}</h3>
    <p className="text-gray-400 text-sm">{title}</p>
    <div className="h-0.5 w-0 bg-gradient-to-r from-violet/50 to-violet group-hover:w-16 transition-all duration-300 mt-2 rounded-full"></div>
  </div>
); */}

interface DanceStyleProps {
  style: string;
  description: string;
  image: string;
}

const DanceCard = ({ style, description, image }: DanceStyleProps) => (
  <div className="hire-anim flex flex-col items-center group cursor-pointer">
    <div className="relative group">
      <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-transparent group-hover:border-violet/50 transition-all duration-300 transform group-hover:-translate-y-2 hover:shadow-lg hover:shadow-violet/30">
        <div className="w-full h-full overflow-hidden">
          <img 
            src={image} 
            alt={style} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/30 to-violet/70 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/10 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20 border-2 border-transparent hover:border-violet">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-2xl font-bold mt-4 mb-2 text-white group-hover:text-violet transition-colors duration-300">{style}</h3>
    <p className="text-gray-400 text-sm text-center max-w-xs group-hover:text-gray-300 transition-colors duration-300">{description}</p>
  </div>
);

const DanceStyle = () => {
  const hireRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = React.useState(false);

  const danceStyles = [
    {
      style: "Classical Ballet",
      description: "Graceful and technical dance form emphasizing poise and precision",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3"
    },
    {
      style: "Hip Hop",
      description: "Urban dance style with powerful moves and dynamic expressions",
      image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3"
    },
    {
      style: "Contemporary",
      description: "Modern interpretive dance combining various styles and techniques",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3"
    },
    {
      style: "Bollywood",
      description: "Energetic Indian dance fusion with dramatic expressions",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3"
    },
    {
      style: "Jazz",
      description: "Rhythmic dance style with emphasis on individual expression",
      image: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-4.0.3"
    },
    {
      style: "Salsa",
      description: "Latin dance form known for its passionate and vibrant movements",
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3"
    }
  ];

  const additionalStyles = [
    {
      style: "Bharatanatyam",
      description: "Classical Indian dance form with intricate gestures and expressions",
      image: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-4.0.3"
    },
    {
      style: "Break Dance",
      description: "Dynamic street dance style with acrobatic movements",
      image: "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-4.0.3"
    },
    {
      style: "Kathak",
      description: "Classical Indian dance emphasizing rhythmic foot movements",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hire section animation
    if (hireRef.current) {
      gsap.fromTo(
        ".hire-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: hireRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const choreographers = [
    {
      name: "Ganesh Acharya",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Terrance Lewis",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Remo D'Souza",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Farah Khan",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Prabhu Deva",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Shiamak Davar",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const additionalChoreographers = [
    {
      name: "Ashley Lobo",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Saroj Khan",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Bosco Martis",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const displayedChoreographers = showAll 
    ? [...choreographers, ...additionalChoreographers]
    : choreographers;

  return (
    <section ref={hireRef} className="py-18 bg-navy">
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
          <h2 className="hire-anim text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Dance Styles</span>
          </h2>
        </div>
        <p className="hire-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Explore diverse dance styles and find your perfect rhythm with our expert instructors.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {(showAll ? [...danceStyles, ...additionalStyles] : danceStyles).map((style, index) => (
            <DanceCard key={index} {...style} />
          ))}
        </div>
        
        <div className="hire-anim mt-12 text-center">
          <a 
            onClick={() => setShowAll(!showAll)} 
            className="inline-flex items-center text-violet hover:text-white transition-colors gap-1 group cursor-pointer"
          >
            <Users className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="underline underline-offset-4 group-hover:underline-offset-8 transition-all duration-300">
              {showAll ? 'Show Less' : 'View More Styles'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanceStyle;