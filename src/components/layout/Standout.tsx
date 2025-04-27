import React from "react";

// You can use any icon library, here is a simple SVG for check and cross
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M6 11.5L10 15.5L16 7.5"
      stroke="#4FC3F7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M7 7L15 15M15 7L7 15"
      stroke="#4FC3F7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur.",
];

const StandoutComparison: React.FC = () => (
  <section className="bg-black min-h-screen py-16 px-4 flex flex-col items-center">
    <h2 className="text-4xl font-bold text-white text-center mb-3">
      Why we stand out?
    </h2>
    <p className="text-gray-400 text-center mb-12">
      See how we compare against others in performance, growth.
    </p>
    <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center gap-10">
      {/* AppleBee AI Column */}
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">AppleBee AI</h3>
        <div
          className="w-full max-w-md rounded-2xl bg-[#0a0f1a] border border-blue-500/40 shadow-[0_0_40px_2px_rgba(51,136,255,0.20)] p-8"
          style={{
            boxShadow: "0 0 40px 2px #3388FF33",
          }}
        >
          {features.map((text, idx) => (
            <div key={idx} className="flex items-center gap-4 py-3 border-b border-[#1a2233] last:border-b-0">
              <CheckIcon />
              <span className="text-gray-200 text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Others Column */}
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Others</h3>
        <div
          className="w-full max-w-md rounded-2xl bg-[#0a0f1a] border border-blue-500/40 shadow-[0_0_40px_2px_rgba(51,136,255,0.20)] p-8"
          style={{
            boxShadow: "0 0 40px 2px #3388FF33",
          }}
        >
          {features.map((text, idx) => (
            <div key={idx} className="flex items-center gap-4 py-3 border-b border-[#1a2233] last:border-b-0">
              <CrossIcon />
              <span className="text-gray-200 text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StandoutComparison;
