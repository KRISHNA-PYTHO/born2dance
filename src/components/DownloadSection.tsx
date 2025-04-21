import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Download, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "This app completely transformed my dancing skills! The tutorials are easy to follow and the instructors are amazing.",
    author: "Sarah J.",
    rating: 5
  },
  {
    text: "Perfect platform for learning dance. The B2B features helped me connect with amazing dance studios.",
    author: "Michael R.",
    rating: 5
  },
  {
    text: "Great community of dancers and instructors. The variety of dance styles available is impressive!",
    author: "Priya K.",
    rating: 5
  }
];

const DownloadSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!contentRef.current || !phoneRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    tl.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    tl.from(phoneRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");
  }, []);

  return (
    <section 
      id="download" 
      ref={sectionRef}
      className="py-16 bg-dance relative overflow-hidden"
    >
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-dance-accent blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-dance-gradient1 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div 
            ref={contentRef}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Dance Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our app now and get access to thousands of dance tutorials, connect with choreographers, and join a community of passionate dancers.
            </p>
            
            <div className="bg-gray-800 bg-opacity-40 rounded-xl p-6 mb-8 overflow-hidden">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={20} fill="#FACC15" />
                ))}
                <span className="ml-2 text-gray-300">4.8/5 (2,500+ reviews)</span>
              </div>
              </div>
              
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                      width: `${testimonials.length * 100}%`
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="text-gray-300">
                          "{testimonial.text}"
                          <div className="mt-2 font-semibold">- {testimonial.author}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center mt-4 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentTestimonial === index 
                          ? "bg-dance-accent w-4" 
                          : "bg-gray-600"
                      )}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            
          
          <div 
            ref={phoneRef}
            className="lg:w-1/2 flex justify-center lg:justify-center"
          >
            <div className="relative mx-auto max-w-[280px] lg:max-w-[320px]">
              <div className="relative z-10">
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-3xl z-20"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                    <img 
                      src="/download.jpeg" 
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
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default DownloadSection;