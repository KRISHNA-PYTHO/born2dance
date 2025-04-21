import React from 'react';

const Maps: React.FC = () => {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;