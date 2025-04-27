import React from "react";

// Example company icons (replace src with your actual icon paths)
const companyIcons = [
  "/SVG.svg",
  "/SVG (1).svg",
  "/SVG (2).svg",
  "/SVG (3).svg",
  "/SVG (4).svg",
  "/SVG (5).svg",
  "/SVG (6).svg",
  "/SVG (7).svg",
  "/SVG (8).svg",
  "/SVG (9).svg",
  "/SVG (10).svg",
  "/SVG (11).svg",
  "/SVG (12).svg",
  "/SVG (13).svg",
  "/SVG (14).svg"
];

// Simple calendar mockup with interview tooltips
const CalendarCard = () => (
  <div className="w-full flex flex-col items-center">
    <div className="rounded-xl border border-blue-500/40 bg-[#101828] p-4 mb-4 w-full max-w-xs mx-auto shadow-inner">
      <table className="w-full text-center text-gray-300">
        <thead>
          <tr className="text-blue-300">
            <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>2</td><td>3</td><td>4</td><td className="relative">
              <span className="inline-block w-7 h-7 rounded-full bg-blue-600 text-white">5</span>
              {/* Tooltip for interview */}
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 bg-[#19223a] text-xs text-white px-2 py-1 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Interview scheduled
              </span>
            </td>
            <td>6</td><td>7</td>
          </tr>
          <tr>
            <td>8</td><td>9</td><td>10</td><td>11</td>
            <td className="relative group">
              <span className="inline-block w-7 h-7 rounded-full bg-blue-600 text-white">12</span>
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 bg-[#19223a] text-xs text-white px-2 py-1 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Interview scheduled
              </span>
            </td>
            <td>13</td><td>14</td>
          </tr>
          <tr>
            <td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td>
          </tr>
          <tr>
            <td>22</td><td>23</td>
            <td className="relative group">
              <span className="inline-block w-7 h-7 rounded-full bg-blue-600 text-white">24</span>
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 bg-[#19223a] text-xs text-white px-2 py-1 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                Interview scheduled
              </span>
            </td>
            <td>25</td><td>26</td><td>27</td><td>28</td>
          </tr>
          <tr>
            <td>29</td><td>30</td><td>31</td><td></td><td></td><td></td><td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">You're in control</h3>
    <p className="text-gray-400">
      Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.
    </p>
  </div>
);

const features = [
  {
    title: "Insights at your fingertips",
    description:
      "All your data and finances in one place to give you deeper answers and more decisive analysis.",
    icon: <img src="/ATSscore.png" alt="Insights" />,
  },
  {
    title: "Manage in real time",
    description:
      "Have full control of your business finances on the go. Get applications and reports in real time, no limits.",
    icon: <img src="/charts.png" alt="Charts" />,
  },
  {
    title: "Important business alerts",
    description:
      "Check the details that need immediate attention. Prioritize and resolve issues faster.",
    icon: <img src="/pichart.png" alt="Alerts" />,
  },
];

const FeaturesSection: React.FC = () => (
  <section className="bg-black py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Features</h2>
      <p className="text-gray-400 text-center mb-12">
        We believe Untitled should be accessible to all companies, no matter the size.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#101828] border border-blue-600/50 shadow-lg p-8 flex flex-col items-center text-center relative"
            style={{
              boxShadow:
                "0 0 24px 2px #3388FF22, 0 1.5px 6px 0 #3388FF11",
            }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}

        {/* Card 4: Apply to these companies */}
        <div
         className="rounded-2xl bg-[#101828] border border-blue-600/50 shadow-lg p-8 flex flex-col justify-end items-center text-center relative md:col-span-2 min-h-[350px]"
         style={{
           boxShadow: "0 0 24px 2px #3388FF22, 0 1.5px 6px 0 #3388FF11",
         }}
        >
          <div className="mb-8 grid grid-cols-5 gap-8 justify-center">
            {companyIcons.slice(0, 15).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Company ${i + 1}`}
                className="w-12 h-12 rounded-full bg-[#131c2b] p-2"
                style={{ boxShadow: "0 0 8px #3388FF55" }}
              />
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Apply to these companies</h3>
            <p className="text-gray-400 max-w-md">
              Bring your data with our built-in integrations for accounting, revenue tools and banking.
            </p>
          </div>
        </div>

        {/* Card 5: You're in control (Calendar) */}
        <div
          className="rounded-2xl bg-[#101828] border border-blue-600/50 shadow-lg p-8 flex flex-col items-center text-center relative"
          style={{
            boxShadow: "0 0 24px 2px #3388FF22, 0 1.5px 6px 0 #3388FF11",
          }}
        >
          <CalendarCard />
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
