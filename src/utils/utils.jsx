export const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((acc, ticket) => {
    const key = groupBy === "priority" ? ticket.priority : ticket[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
};


export const sortTickets = (tickets, key) => {
  if (key === "priority") {
    return tickets.sort((a, b) => b.priority - a.priority);
  } else if (key === "title") {
    return tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  return tickets;
};
