import React from "react";
import "../Header/Header.js";
import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Middle from "../Middle/Middle.js";
import Table from "../Table/Table.js";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Middle />
      <Table />
    </div>
  );
};

export default Dashboard;
