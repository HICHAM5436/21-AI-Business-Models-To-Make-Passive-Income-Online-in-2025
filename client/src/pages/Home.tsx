import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBook from "@/components/AboutBook";
import Benefits from "@/components/Benefits";
import ChapterPreview from "@/components/ChapterPreview";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "21 AI Business Models | Make Passive Income Online in 2025";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Discover 21 proven AI business models to build passive income streams in 2025. Perfect for beginners, entrepreneurs, and content creators.";
    document.head.appendChild(metaDescription);
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen text-white bg-[#111111]">
      <Navbar />
      <Hero />
      <AboutBook />
      <Benefits />
      <ChapterPreview />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
