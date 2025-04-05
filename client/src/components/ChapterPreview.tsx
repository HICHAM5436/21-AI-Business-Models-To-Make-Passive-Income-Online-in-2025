import { motion } from "framer-motion";
import businessModelsImg from "@assets/1.png";

const chapters = [
  {
    title: "Build a 6-figure Etsy printable store with ChatGPT",
    features: [
      "Generate unique designs using AI",
      "Scale with automation systems",
      "Optimize for Etsy's algorithm"
    ],
    revenue: 4,
    chapter: 3
  },
  {
    title: "Create an AI-powered YouTube channel",
    features: [
      "Generate video scripts with AI",
      "Create voiceovers and animations",
      "Optimize for YouTube algorithm"
    ],
    revenue: 5,
    chapter: 7
  },
  {
    title: "Start a LinkedIn ghostwriting agency",
    features: [
      "Generate viral LinkedIn content",
      "Find high-paying clients",
      "Scale with virtual assistants"
    ],
    revenue: 3,
    chapter: 12
  },
  {
    title: "Launch an AI content creation service",
    features: [
      "Set up a profitable service business",
      "Create multiple content formats",
      "Build recurring client relationships"
    ],
    revenue: 4,
    chapter: 5
  }
];

export default function ChapterPreview() {
  return (
    <section id="chapters" className="py-16 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #111111 0%, #1E1E1E 100%)",
      backgroundImage: "radial-gradient(rgba(0, 163, 255, 0.1) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What's <span className="text-[#00A3FF]">Inside</span> the Book
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Explore these business models and many more, each with detailed implementation steps.
          </p>
          <div className="mt-6">
            <img 
              src={businessModelsImg} 
              alt="21 AI Business Models Overview" 
              className="max-w-full rounded-lg border border-[#00A3FF]/30 mx-auto" 
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chapters.map((chapter, index) => (
            <motion.div 
              key={index}
              className="bg-[#1E1E1E] rounded-xl overflow-hidden transition hover:shadow-lg hover:shadow-[#00A3FF]/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-48 bg-[#111111]/50 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/20 to-[#00FF8A]/20 opacity-80"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="text-xs font-mono bg-[#00A3FF]/30 text-white px-2 py-1 rounded self-start">BUSINESS MODEL</span>
                  <h3 className="text-xl font-bold">{chapter.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {chapter.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FF8A] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#00A3FF]">
                    Revenue potential: {Array(chapter.revenue).fill('💰').join('')}
                  </span>
                  <span className="text-gray-400">Chapter {chapter.chapter}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="bg-[#00A3FF]/10 rounded-xl p-6 flex flex-col justify-center items-center border-2 border-dashed border-[#00A3FF]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xl font-bold mb-2 text-center">+17 More Business Models</p>
            <p className="text-gray-300 mb-4 text-center">Each with detailed implementation guides</p>
            <a 
              href="https://chimoshop.gumroad.com/l/AIbusinessmodels" 
              className="bg-[#00A3FF] hover:bg-[#00A3FF]/90 text-[#111111] font-bold px-6 py-3 rounded-lg transition flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,163,255,0.6)] hover:-translate-y-0.5"
            >
              <span>See All Models</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
