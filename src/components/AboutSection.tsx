
const AboutSection = () => {
  return (
    <section id="about" className="items-center pt-20 overflow-hidden">
    <div className="bg-navy text-white">
      <div className="container mx-auto px-4 py-18">
        {/* Founder Spotlight */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Meet Our Founder</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-64 h-64 bg-gradient-to-r from-blueStart to-purpleEnd rounded-full p-1">
              <div className="w-full h-full rounded-full bg-navy flex items-center justify-center overflow-hidden">
                <img 
                  src="/owner.jpeg" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-bold mb-3">Bablu Pardeshi</h2>
              <h3 className="text-xl text-violet mb-4">President, Mumbai Dance Federation</h3>
              <p className="text-gray-300 mb-4">
                With over 15 years of professional dance experience, Raj has transformed the Indian dance scene with his innovative choreography and teaching methods.
              </p>
              <p className="text-gray-300">
                His passion for dance and dedication to preserving cultural dance forms while embracing modern styles has earned him recognition across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};


export default AboutSection;
