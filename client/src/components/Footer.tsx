export default function Footer() {
  return (
    <footer className="bg-[#111111] py-12 border-t border-[#00A3FF]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[#00FF8A] font-mono text-lg font-bold">AI</span>
              <span className="font-bold">BUSINESS MODELS</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <a href="#" className="text-gray-400 hover:text-white mb-3 md:mb-0">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mb-3 md:mb-0">Terms of Service</a>
            <a href="https://chimoshop.gumroad.com/l/AIbusinessmodels" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Results may vary. This product does not guarantee income or success, and examples of the product's use are not to be interpreted as a promise or guarantee of earnings.</p>
        </div>
      </div>
    </footer>
  );
}
