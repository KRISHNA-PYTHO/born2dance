
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import LearnSection from '@/components/LearnSection';
import HireSection from '@/components/HireSection';
import GlobalDanceSection from '@/components/GlobalDanceSection';
import StudioSection from '@/components/StudioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import DanceStyle from '@/components/DanceStyle';
import Maps from '@/components/Map';

const Index = () => {
  useEffect(() => {
    // Load GSAP script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    document.body.appendChild(script);

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    scrollTriggerScript.async = true;
    document.body.appendChild(scrollTriggerScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scrollTriggerScript);
    };
  }, []);

  return (
    <main className="bg-dance min-h-screen">
      <NavBar />
      <HeroSection />
      <LearnSection />
      <HireSection />
      <Maps/>
      <GlobalDanceSection />
      <DanceStyle/>
      <StudioSection />
      <AboutSection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
