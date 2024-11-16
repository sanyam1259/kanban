import React, { useState } from "react";
import displayIcon from "../assets/Display.svg";

const TopBar = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="top-bar">
      <button className="display-button" onClick={toggleDropdown}>
        <img src={displayIcon} alt="Display" className="display-icon" />
        Display
      </button>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <label>Grouping:</label>
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
