import React from "react";

// Placeholder for Google logo (replace with your asset)
const GoogleLogo = () => (
  <img src="/google.png" alt="Google" className="w-7 h-7 rounded-full" />
);

const jobs = Array(4).fill({
  title: "Software engineer",
  company: "Google Inc.",
  location: "New Delhi, India",
  tags: ["mid-level", "4-5 Year Experience", "Remote", "Full time"],
  status: "Applied",
});

const Sidebar: React.FC = () => (
  <aside className="flex flex-col bg-[#0a1830] rounded-2xl p-5 min-w-[210px] max-w-[220px] text-white h-[540px]">
    <div className="flex items-center gap-3 mb-8">
      <img src="/logo.png" alt="ApplyBee AI" className="w-8 h-8" />
      <span className="font-bold text-lg tracking-wide">ApplyBee AI</span>
    </div>
    <nav className="flex flex-col gap-2">
      <button className="flex items-center gap-3 py-1.5 px-3 rounded-xl bg-[#202e51] font-semibold text-blue-300 shadow focus:outline-none">
        <span className="material-icons text-blue-400 text-base"><img src="/mage_dashboard.png">
        </img></span>
        <span className="text-blue-200 font-bold">Dashboard</span>
      </button>
      <button className="flex items-center gap-3 py-1.5 px-3 rounded-xl hover:bg-[#202e51] transition-colors text-blue-200">
        <span className="material-icons text-blue-300 text-base"><img src="basil_search-solid.png"></img></span>
        Job
      </button>
      <button className="flex items-center gap-3 py-1.5 px-3 rounded-xl hover:bg-[#202e51] transition-colors text-blue-200">
        <span className="material-icons text-blue-300 text-base">
            <img src="/work.png"></img>
        </span>
        ATS resume
      </button>
      <button className="flex items-center gap-3 py-1.5 px-3 rounded-xl hover:bg-[#202e51] transition-colors text-blue-200">
        <span className="material-icons text-blue-300 text-base">
            <img src="/user.png"></img>
        </span>
        Profile
      </button>
    </nav>
    <div className="flex-1" />
  </aside>
);

const JobCard: React.FC<typeof jobs[0]> = ({ title, company, location, tags, status }) => (
  <div className="flex items-center bg-[#0b223c] rounded-xl px-4 py-3 mb-4 border border-blue-700/30">
    <GoogleLogo />
    <div className="ml-4 flex-1">
      <div className="font-semibold text-white text-base">{title}</div>
      <div className="text-sm text-blue-200">{company}</div>
      <div className="text-xs text-blue-400">{location}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#1f335c] text-blue-200 px-2 py-0.5 rounded-md text-xs border border-blue-600/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <span className="ml-4 text-blue-400 font-bold text-xs">{status}</span>
  </div>
);

const StatCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-[#0b223c] rounded-xl p-4 border border-blue-700/30 min-w-[90px]">
    <span className="text-2xl font-bold text-blue-200">{value}</span>
    <span className="text-xs text-blue-400 mt-1">{label}</span>
  </div>
);

// Placeholder Donut Chart (replace with chart library)
const DonutChart = () => (
  <svg width="110" height="110" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="48" stroke="#1e90ff" strokeWidth="16" fill="none" />
    <circle cx="60" cy="60" r="48" stroke="#4fc3f7" strokeWidth="16" fill="none" strokeDasharray="226" strokeDashoffset="56" />
    <circle cx="60" cy="60" r="48" stroke="#1e90ff88" strokeWidth="16" fill="none" strokeDasharray="226" strokeDashoffset="120" />
  </svg>
);

// Placeholder Bar Chart (replace with chart library)
const BarChart = () => (
  <div className="flex items-end h-24 gap-2">
    {[30, 38, 28, 45, 50, 42, 33].map((v, i) => (
      <div key={i} className="flex flex-col items-center">
        <div
          className="bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-md"
          style={{ width: "12px", height: `${v * 1.6}px` }}
        />
        <span className="text-xs text-blue-300 mt-1">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
        </span>
      </div>
    ))}
  </div>
);

const Dashboard: React.FC = () => (
  <div className="min-h-screen bg-black flex items-start justify-center py-8 px-2">
    <div className="flex bg-[#131c2b] rounded-2xl p-4 gap-6 w-full max-w-6xl">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Top: Search and stats */}
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="flex items-center bg-[#0b223c] rounded-xl px-4 py-2 border border-blue-700/30 mb-3">
              <span className="material-icons text-blue-400 mr-2 text-base">
                <img src="/SearchIcon.png"></img>
              </span>
              <input
                type="text"
                placeholder="Search.."
                className="bg-transparent outline-none text-white w-full placeholder-blue-400 text-base"
              />
            </div>
            {/* Job cards */}
            <div>
              {jobs.map((job, i) => (
                <JobCard key={i} {...job} />
              ))}
            </div>
          </div>
          {/* Right stats */}
          <div className="flex flex-col gap-4 min-w-[260px]">
            <div className="flex gap-3">
              <StatCard value={35} label="Applied" />
              <StatCard value={20} label="Total Response" />
            </div>
            {/* Donut Chart */}
            <div className="bg-[#0b223c] rounded-xl p-4 border border-blue-700/30 flex flex-col items-center mt-1">
              <span className="text-blue-200 font-bold mb-1 text-sm">35/50</span>
              <DonutChart />
              <div className="flex flex-col mt-3 gap-1 text-xs text-blue-300">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-400" />
                  Hybrid job
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-600" />
                  In-office job
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-200" />
                  Remote job
                </div>
              </div>
            </div>
            {/* Bar Chart */}
            <div className="bg-[#0b223c] rounded-xl p-4 border border-blue-700/30 mt-1">
              <span className="text-blue-200 font-bold mb-2 block text-sm">Application Report</span>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
