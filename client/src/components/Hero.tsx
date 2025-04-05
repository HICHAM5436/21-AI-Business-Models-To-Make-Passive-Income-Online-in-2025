import { motion } from "framer-motion";
import bookCoverImg from "@assets/Untitled design (1).png";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{
      background: "linear-gradient(135deg, #111111 0%, #1E1E1E 100%)",
      backgroundImage: "radial-gradient(rgba(0, 163, 255, 0.1) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 overflow-hidden">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Unlock 21 AI Business Models to Earn Passive Income in 2025
              </motion.h1>
            </div>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Build scalable, automated income streams using ChatGPT, Canva, and more — even as a beginner.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a 
                href="https://chimoshop.gumroad.com/l/AIbusinessmodels" 
                className="bg-[#00FF8A] hover:bg-[#00FF8A]/90 text-[#111111] text-lg font-bold px-8 py-4 rounded-lg transition flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,255,138,0.6)] hover:-translate-y-0.5"
              >
                <span>Buy Now for $8.99</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#about" 
                className="border border-[#00A3FF] text-[#00A3FF] hover:bg-[#00A3FF]/10 text-lg font-bold px-8 py-4 rounded-lg transition flex items-center justify-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00FF8A]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A3FF] to-[#00FF8A] rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src={bookCoverImg} 
                    alt="21 AI Business Models eBook Cover" 
                    className="w-full max-w-md rounded-lg shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-[#FF3A3A] p-3 rounded-full transform rotate-12 border-4 border-white">
                    <span className="text-white font-bold">$8.99</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
