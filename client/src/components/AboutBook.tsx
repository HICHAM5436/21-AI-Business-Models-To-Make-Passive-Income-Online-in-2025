import { motion } from "framer-motion";
import targetAudienceImg from "@assets/2.png";

const targetAudience = [
  {
    title: "ENTREPRENEURS",
    description: "Seeking innovative, low-effort ways to generate passive income with AI"
  },
  {
    title: "FREELANCERS",
    description: "Looking to offer AI-enhanced services like copywriting or video editing"
  },
  {
    title: "CONTENT CREATORS",
    description: "Ready to automate and monetize their channels"
  },
  {
    title: "BEGINNERS",
    description: "Seeking a clear, step-by-step guide to launch an AI-based business"
  }
];

const tools = [
  { name: "ChatGPT", icon: "message-square" },
  { name: "Canva", icon: "image" },
  { name: "Replit", icon: "code" },
  { name: "Fiverr", icon: "briefcase" },
  { name: "Notion", icon: "file-text" },
  { name: "YouTube", icon: "video" }
];

export default function AboutBook() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 relative overflow-hidden" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A3FF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
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
            <span className="text-[#00A3FF]">AI</span> is Transforming Online Business
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            This book reveals 21 AI-powered business models you can launch fast, with little or no startup cost. It's perfect for beginners looking to get ahead of the curve in 2025.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-[#1E1E1E] rounded-xl p-8 border border-[#00A3FF]/20 transition hover:border-[#00A3FF]/40 hover:shadow-lg hover:shadow-[#00A3FF]/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-[#00FF8A] mr-2">01</span> Who is this book for?
            </h3>
            <div className="mb-4">
              <img 
                src={targetAudienceImg} 
                alt="Target Audience" 
                className="w-full rounded-lg mb-4 border border-[#00A3FF]/30" 
              />
            </div>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {targetAudience.map((audience, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-[#00FF8A] mr-2">•</span>
                  <span><strong className="text-white">{audience.title}:</strong> {audience.description}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="bg-[#1E1E1E] rounded-xl p-8 border border-[#00A3FF]/20 transition hover:border-[#00A3FF]/40 hover:shadow-lg hover:shadow-[#00A3FF]/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-[#00FF8A] mr-2">02</span> Tools You'll Master
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center bg-[#111111]/50 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#00A3FF]/20 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00A3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {tool.icon === "message-square" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      )}
                      {tool.icon === "image" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      )}
                      {tool.icon === "code" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      )}
                      {tool.icon === "briefcase" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )}
                      {tool.icon === "file-text" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      )}
                      {tool.icon === "video" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      )}
                    </svg>
                  </div>
                  <span>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <a 
            href="https://chimoshop.gumroad.com/l/AIbusinessmodels" 
            className="bg-[#00FF8A] hover:bg-[#00FF8A]/90 text-[#111111] text-lg font-bold px-8 py-4 rounded-lg transition flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,255,138,0.6)] hover:-translate-y-0.5"
          >
            <span>Get Started Today for $8.99</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
