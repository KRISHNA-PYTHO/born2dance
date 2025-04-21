import React, { useState } from 'react';

interface CityPin {
  name: string;
  x: number;
  y: number;
}

const indianCities: CityPin[] = [
  { name: "Mumbai", x: 25, y: 55 },
  { name: "Delhi", x: 35, y: 35 },
  { name: "Pune", x: 28, y: 58 },
  { name: "Hyderabad", x: 35, y: 60 },
  { name: "Chennai", x: 35, y: 70 },
  { name: "Kolkata", x: 55, y: 45 }
];

const globalCities: CityPin[] = [
  { name: "New York", x: 25, y: 35 },
  { name: "London", x: 45, y: 25 },
  { name: "Paris", x: 47, y: 28 },
  { name: "Dubai", x: 58, y: 42 },
  { name: "Singapore", x: 75, y: 55 },
  { name: "Tokyo", x: 85, y: 35 }
];

const Maps: React.FC = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section className="py-18 bg-dance bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
             <span className="gradient-text"> Global Dance Forms</span>
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            Connecting dance communities across cities and continents
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* India Map */}
          <div className="relative group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-dance-accent transition-colors">Indian Dance Form</h3>
            <div className="relative aspect-[4/3] bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-dance-accent/20 transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="/india.jpeg" 
                alt="India Map" 
                className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />
              {(indianCities || []).map((city, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 bg-dance-accent rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-dance-accent/50"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  {hoveredCity === city.name && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap animate-fadeIn">
                      <div className="bg-white/90 backdrop-blur-sm text-dance px-2 py-1 rounded text-sm shadow-lg">
                        {city.name}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* World Map */}
          <div className="relative group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-dance-accent transition-colors">Global Dance Form</h3>
            <div className="relative aspect-[4/3] bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-dance-accent/20 transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="/world.jpeg" 
                alt="World Map" 
                className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />
              {globalCities.map((city, index) => (
                <div
                  key={city.name}
                  className="absolute w-3 h-3 bg-dance-accent rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-all duration-300 hover:shadow-lg hover:shadow-dance-accent/50"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  {hoveredCity === city.name && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap animate-fadeIn">
                      <div className="bg-white/90 backdrop-blur-sm text-dance px-2 py-1 rounded text-sm shadow-lg">
                        {city.name}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Maps;