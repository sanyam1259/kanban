import React, { useEffect, useState } from "react";
import axios from "axios";
import KanbanBoard from "./components/KanbanBoard";
import TopBar from "./components/TopBar";
import "./styles/index.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        console.log(response.data)
        setTickets(response.data.tickets)
        setData(response.data[1])
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  return (
    <div className="app">
      <TopBar
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <KanbanBoard data={data} tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
