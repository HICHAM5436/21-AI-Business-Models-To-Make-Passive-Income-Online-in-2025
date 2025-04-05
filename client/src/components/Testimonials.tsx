import { motion } from "framer-motion";
import testimonialsImg from "@assets/4.png";

const testimonials = [
  {
    text: "Game-changing strategies for solopreneurs. I launched my AI content service based on Chapter 5 and already have 3 clients!",
    name: "James K.",
    role: "Freelance Marketer",
    initials: "JK"
  },
  {
    text: "So actionable. I made my first sale in a week with the Etsy printables business model. The step-by-step approach makes implementation easy.",
    name: "Sarah M.",
    role: "Digital Creator",
    initials: "SM"
  },
  {
    text: "I've tried many business books, but this one is different. The AI tools section alone saved me hundreds of hours of research. Now earning passive income!",
    name: "Robert L.",
    role: "Entrepreneur",
    initials: "RL"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What <span className="text-[#00FF8A]">Readers</span> Are Saying
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Join hundreds of entrepreneurs who have already transformed their businesses with these AI models.
          </p>
          <div className="mt-6">
            <img 
              src={testimonialsImg} 
              alt="Real testimonials from readers" 
              className="max-w-full rounded-lg border border-[#00FF8A]/30 mx-auto" 
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-[#111111] rounded-xl p-8 border border-[#00A3FF]/20 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute -top-4 -right-4 text-4xl">💬</div>
              <div className="flex items-center mb-4">
                <div className="text-[#00FF8A]">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-300 mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00A3FF]/30 flex items-center justify-center mr-3">
                  <span className="font-bold text-[#00A3FF]">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
