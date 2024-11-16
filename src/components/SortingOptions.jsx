import React from 'react';

const SortingOptions = ({ sortOption, setSortOption }) => {
  return (
    <div className="sorting-options">
      <label>Sort By:</label>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortingOptions;
