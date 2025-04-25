import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [jobRole, setJobRole] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { jobRole, location });
    // Implement search functionality here
  };

  return (
    <form
      onSubmit={handleSearch}
      className="justify-between items-center bg-white flex w-[549px] max-w-full gap-[37px] flex-wrap mt-[49px] px-1.5 rounded-[500px] max-md:mt-10"
      aria-label="Job search form"
    >
      <div className="justify-center items-stretch bg-white self-stretch flex flex-col w-[209px] my-auto px-6 py-3.5 rounded-[500px_0px_0px_500px] max-md:px-5">
        <label htmlFor="jobRole" className="text-[#222] text-xs font-semibold">
          Job Role
        </label>
        <input
          id="jobRole"
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          placeholder="Search Job Role"
          className="text-[#717171] text-sm font-normal mt-1 bg-transparent outline-none border-none"
        />
      </div>
      <div className="border self-stretch w-0 shrink-0 h-[25px] my-auto border-[rgba(0,119,255,1)] border-solid" />
      <div className="justify-center items-stretch bg-white self-stretch flex flex-col w-[129px] my-auto pl-6 py-3.5">
        <label htmlFor="location" className="text-[#222] text-xs font-semibold">
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search Location"
          className="text-[#717171] text-sm font-normal mt-1 bg-transparent outline-none border-none"
        />
      </div>
      <div className="border self-stretch w-0 shrink-0 h-[25px] my-auto border-[rgba(0,119,255,1)] border-solid" />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-full ml-2 mr-1 hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
