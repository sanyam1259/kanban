import React from "react";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => (
  <header className="header">
    <h1>Kanban Board</h1>
    <div className="controls">
      <label>
        Group By:
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  </header>
);

export default Header;
