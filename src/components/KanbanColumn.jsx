import React from "react";
import TicketCard from "./TicketCard";
import todoIcon from "../assets/To-do.svg";
import doneIcon from "../assets/Done.svg";
import inProgressIcon from "../assets/in-progress.svg";
import backlogIcon from "../assets/Backlog.svg";
import cancelledIcon from "../assets/Cancelled.svg";
import addIcon from "../assets/add.svg";
import menuIcon from "../assets/3 dot menu.svg";
import highPriorityIcon from "../assets/Img - High Priority.svg";
import mediumPriorityIcon from "../assets/Img - Medium Priority.svg";
import lowPriorityIcon from "../assets/Img - Low Priority.svg";
import noPriorityIcon from "../assets/No-priority.svg";
import urgentPriorityIcon from "../assets/SVG - Urgent Priority colour.svg";

const priorityIcons = {
  4: urgentPriorityIcon,
  3: highPriorityIcon,
  2: mediumPriorityIcon,
  1: lowPriorityIcon,
  0: noPriorityIcon,
};

const statusIcons = {
  "Todo": todoIcon,
  "In progress": inProgressIcon,
  "Done": doneIcon,
  "Backlog": backlogIcon,
  "Cancelled": cancelledIcon,
  4: urgentPriorityIcon,
  3: highPriorityIcon,
  2: mediumPriorityIcon,
  1: lowPriorityIcon,
  0: noPriorityIcon,
};

const priorityLabels = {
  4: "Urgent Priority",
  3: "High Priority",
  2: "Medium Priority",
  1: "Low Priority",
  0: "No Priority",
};


const KanbanColumn = ({ title, tickets, sortBy }) => {
  // Priority labels mapping
  const priorityLabels = {
    4: "Urgent Priority",
    3: "High Priority",
    2: "Medium Priority",
    1: "Low Priority",
    0: "No Priority",
  };

  // Determine the column title
  const columnTitle =
    sortBy === "priority" && !isNaN(title)
      ? priorityLabels[title] || "Uncategorized"
      : title;

  return (
    <div className="kanban-column">
      <div className="column-header">
        {/* Column Title and Status Icon */}
        <div className="header-title">
          {sortBy === "priority" && !isNaN(title) ? (
            <img
              src={priorityIcons[title]}
              alt={priorityLabels[title]}
              className="status-icon"
            />
          ) : statusIcons[title] ? (
            <img
              src={statusIcons[title]}
              alt={`${title} icon`}
              className="status-icon"
            />
          ) : (
            <span className="icon-placeholder">Icon Missing</span>
          )}
          <h2 className="column-title">
            {columnTitle} <span className="ticket-count">({tickets.length})</span>
          </h2>
        </div>

        {/* Header Actions: Add and Menu Icons */}
        <div className="header-actions">
          <img src={addIcon} alt="Add" className="action-icon" />
          <img src={menuIcon} alt="Menu" className="action-icon" />
        </div>
      </div>

      {/* Tickets */}
      <div className="ticket-container">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            priorityLabel={
              sortBy === "priority" && ticket.priority !== undefined
                ? priorityLabels[ticket.priority]
                : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
