
import React from "react";
import { X, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-3 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            <div className="text-[#0077FF]">© 2024 Fargo LLC</div>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <X size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <div>Fargo template by Nick Stepuk</div>
              <div>Part of <span className="text-white">Remix Unlimited</span> collection</div>
            </div>
          </div>

          {/* Middle column */}
          <div className="space-y-4">
            <div className="text-[#0077FF] mb-6">Our Product</div>
            <nav className="space-y-4">
              <a href="#features" className="block hover:text-blue-400 transition-colors">Features</a>
              <a href="#benefits" className="block hover:text-blue-400 transition-colors">Benefits</a>
              <a href="#pricing" className="block hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="block hover:text-blue-400 transition-colors">Testimonials</a>
            </nav>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="text-[#0077FF] mb-6">Company</div>
            <nav className="space-y-4">
              <a href="#about" className="block hover:text-blue-400 transition-colors">About Us</a>
              <a href="#faq" className="block hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#blog" className="block hover:text-blue-400 transition-colors">Blog</a>
              <a href="#contact" className="block hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
