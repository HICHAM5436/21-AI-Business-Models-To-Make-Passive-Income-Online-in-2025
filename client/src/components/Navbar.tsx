import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 ${scrolled ? 'bg-[#111111]/90 backdrop-blur-md shadow-md' : 'bg-[#111111]'} border-b border-[#00A3FF]/20 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-[#00FF8A] font-mono text-lg font-bold">AI</span>
          <span className="font-bold">BUSINESS MODELS</span>
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[#00FF8A] transition">About</a>
          <a href="#benefits" className="hover:text-[#00FF8A] transition">Benefits</a>
          <a href="#chapters" className="hover:text-[#00FF8A] transition">Chapters</a>
          <a href="#testimonials" className="hover:text-[#00FF8A] transition">Reviews</a>
        </div>
        <a 
          href="https://chimoshop.gumroad.com/l/AIbusinessmodels" 
          className="bg-[#00FF8A] hover:bg-[#00FF8A]/90 text-[#111111] font-bold px-4 py-2 rounded-lg transition hover:shadow-[0_0_20px_rgba(0,255,138,0.6)] hover:-translate-y-0.5"
        >
          Buy Now
        </a>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden px-4 py-2 bg-[#1E1E1E] border-b border-[#00A3FF]/20 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#about" className="block py-2 hover:text-[#00FF8A] transition" onClick={toggleMenu}>About</a>
        <a href="#benefits" className="block py-2 hover:text-[#00FF8A] transition" onClick={toggleMenu}>Benefits</a>
        <a href="#chapters" className="block py-2 hover:text-[#00FF8A] transition" onClick={toggleMenu}>Chapters</a>
        <a href="#testimonials" className="block py-2 hover:text-[#00FF8A] transition" onClick={toggleMenu}>Reviews</a>
      </div>
    </nav>
  );
}
