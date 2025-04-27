import { useState } from "react";
import "./OverlayShadow.css";

export interface IOverlayShadowProps {
  className?: string;
}

export const OverlayShadow = ({
  className = "",
  ...props
}: IOverlayShadowProps): JSX.Element => {
  const [jobRole, setJobRole] = useState("");
  const [location, setLocation] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", jobRole, "in", location);
    setShowNoResults(true); // show the "No results found" message
  };

  return (
    <div className={`overlay-shadow-container`}>
      <div className={`overlay-shadow ${className}`} {...props}>
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Search job role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </div>

        <div className="divider" />

        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="search-button" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d7dade"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      {showNoResults && (
        <div className="no-results">
          No results found.
        </div>
      )}
    </div>
  );
};
