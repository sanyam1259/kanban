import React from 'react';

const GroupingOptions = ({ grouping, setGrouping }) => {
  return (
    <div className="grouping-options">
      <label>Group By:</label>
      <select
        value={grouping}
        onChange={(e) => setGrouping(e.target.value)}
      >
        <option value="status">Status</option>
        <option value="userId">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupingOptions;