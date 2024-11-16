import React from "react";
import KanbanColumn from "./KanbanColumn";
import { groupTickets, sortTickets } from "../utils/utils";

const KanbanBoard = ({ data, tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);

  const sortedGroupedTickets = Object.keys(groupedTickets).reduce((acc, groupKey) => {
    acc[groupKey] = sortTickets(groupedTickets[groupKey], sortBy);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(sortedGroupedTickets).map((group) => (
        <KanbanColumn
          key={group}
          title={group}
          tickets={sortedGroupedTickets[group]}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
