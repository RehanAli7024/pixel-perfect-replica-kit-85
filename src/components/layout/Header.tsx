import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

const FORM_ID = "mgvkvqzp";

const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [state, handleSubmit] = useForm(FORM_ID);

  return (
    <header
      className="bg-gradient-to-b from-zinc-950 to-transparent w-full"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-10">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-3 min-w-[200px] group cursor-pointer">
          {/* Default (black/white) icon */}
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-10 h-10 object-contain block group-hover:hidden transition-all duration-200"
          />
          {/* Blue icon on hover */}
          <img
            src="/logo-blue.png"
            alt="Company Logo Blue"
            className="w-10 h-10 object-contain hidden group-hover:block transition-all duration-200"
          />
          {/* Brand text: white, turns blue on hover */}
          <span className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors duration-200">
            ApplyBee AI
          </span>
        </div>
        {/* Center: Navigation */}
        <nav className="flex-1 flex justify-center items-center">
          <ul className="flex gap-10 md:gap-14">
            <li>
              <a href="#about" className="text-white text-base font-normal hover:text-blue-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#faq" className="text-white text-base font-normal hover:text-blue-400 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#blog" className="text-white text-base font-normal hover:text-blue-400 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-base font-normal hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Right: Join Waitlist Button */}
        <div className="flex items-center min-w-[160px] justify-end">
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-black border border-blue-500 font-bold text-white px-7 py-2 rounded-2xl shadow-[0_0_16px_0_rgba(0,119,255,0.4)] hover:bg-blue-900 hover:border-blue-400 transition-colors"
          >
            Join Waitlist
          </Button>
        </div>
      </div>

      {/* Waitlist Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a1830] rounded-2xl p-6 max-w-md w-full border border-blue-500/40 shadow-[0_0_32px_0_rgba(51,136,255,0.25)] relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white mb-2">Join our Waitlist</h3>
            <p className="text-gray-300 mb-4">
              Be the first to know when we launch. Enter your email below to join our waitlist.
            </p>
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-2xl mb-2">✓</div>
                <p className="text-white">Thank you for joining our waitlist!</p>
                <p className="text-blue-300 text-sm mt-2">We'll notify you when we launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#101828] border border-blue-600/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  placeholder="your@email.com"
                  autoComplete="email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-colors mt-2"
                >
                  {state.submitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
