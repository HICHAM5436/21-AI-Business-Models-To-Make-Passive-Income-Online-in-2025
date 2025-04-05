import { motion } from "framer-motion";

const benefits = [
  {
    icon: "✅",
    title: "21 Unique Business Ideas",
    description: "Each business model is beginner-friendly and requires minimal technical expertise to implement."
  },
  {
    icon: "✅",
    title: "Step-by-Step Instructions",
    description: "Clear, actionable guidance that takes you from concept to profitable execution."
  },
  {
    icon: "✅",
    title: "Automation Tactics",
    description: "Learn how to leverage AI to automate processes and build true passive income streams."
  },
  {
    icon: "✅",
    title: "Built for Solopreneurs",
    description: "Designed specifically for individuals looking to start a business with minimal resources."
  },
  {
    icon: "✅",
    title: "No Coding Required",
    description: "Every business model can be implemented without technical expertise or programming knowledge."
  },
  {
    icon: "✅",
    title: "Monetization Strategies",
    description: "Proven methods to turn your AI-powered business into a reliable income source quickly."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Buy This <span className="text-[#00FF8A]">Book?</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover the competitive advantage that will position you ahead of the crowd in the rapidly evolving AI landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-[#111111] rounded-xl p-8 border border-[#00A3FF]/20 transition hover:border-[#00A3FF]/40 hover:shadow-lg hover:shadow-[#00A3FF]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl text-[#00FF8A] mr-3">{benefit.icon}</span>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-[#00A3FF]/20 to-[#00FF8A]/20 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Why Act Now?</h3>
              <p className="text-lg mb-4">
                The AI landscape is evolving fast, and 2025 is the perfect time to get ahead. Early adopters are already earning thousands monthly, and this book gives you the edge with cutting-edge strategies and tools.
              </p>
              <p className="text-lg font-bold">
                Plus, this eBook comes with a 30-day money-back guarantee—try it risk-free and see the potential for yourself!
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <a 
                href="https://chimoshop.gumroad.com/l/AIbusinessmodels" 
                className="bg-[#00FF8A] hover:bg-[#00FF8A]/90 text-[#111111] text-lg font-bold px-8 py-4 rounded-lg transition flex items-center justify-center whitespace-nowrap hover:shadow-[0_0_20px_rgba(0,255,138,0.6)] hover:-translate-y-0.5"
              >
                <span>Get Access Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
