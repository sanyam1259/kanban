import React from "react";
import highPriorityIcon from "../assets/Img - High Priority.svg";
import mediumPriorityIcon from "../assets/Img - Medium Priority.svg";
import lowPriorityIcon from "../assets/Img - Low Priority.svg";
import noPriorityIcon from "../assets/No-priority.svg";
import urgentPriorityIcon from "../assets/SVG - Urgent Priority colour.svg";
import menuIcon from "../assets/3 dot menu.svg";

const priorityIcons = {
  4: urgentPriorityIcon,
  3: highPriorityIcon,
  2: mediumPriorityIcon,
  1: lowPriorityIcon,
  0: noPriorityIcon,
};

const TicketCard = ({ ticket, priorityLabel }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
      </div>
      <p>{ticket.description}</p>
      {priorityLabel && <p className="ticket-priority">Priority: {priorityLabel}</p>}
    </div>
  );
};

export default TicketCard;
