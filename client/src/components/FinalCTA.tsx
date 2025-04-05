import { motion } from "framer-motion";
import bookCoverImg from "@assets/Untitled design (1).png";

export default function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #111111 0%, #1E1E1E 100%)",
      backgroundImage: "radial-gradient(rgba(0, 163, 255, 0.1) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-[#1E1E1E] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A3FF] to-[#00FF8A] rounded-lg blur opacity-75 animate-pulse"></div>
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img 
                        src={bookCoverImg} 
                        alt="21 AI Business Models eBook Cover" 
                        className="w-full max-w-xs rounded-lg shadow-2xl"
                      />
                      <div className="absolute -top-4 -right-4 bg-[#FF3A3A] p-3 rounded-full transform rotate-12 border-4 border-white">
                        <span className="text-white font-bold">$8.99</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  This is the AI wave — ride it now.
                </h2>
                <p className="text-lg mb-6">
                  Don't miss your opportunity to get ahead of the curve. These 21 AI business models are your blueprint for success in 2025.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FF8A] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Instant digital download (PDF)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FF8A] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>180+ pages of actionable content</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FF8A] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://chimoshop.gumroad.com/l/AIbusinessmodels" 
                    className="bg-[#00FF8A] hover:bg-[#00FF8A]/90 text-[#111111] text-lg font-bold px-8 py-4 rounded-lg transition flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,255,138,0.6)] hover:-translate-y-0.5"
                  >
                    <span>Download Now for $8.99</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
