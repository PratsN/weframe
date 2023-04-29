import React from "react";
import "./Table.css";
import "../UserTable/UserTable.js";
import search from "../Images/search.png";
import UserTable from "../UserTable/UserTable";
const Table = () => {
  return (
    <div>
      <div className="main-table">
        <div className="table-heading">Per Client</div>
        <div className="table-search">
          <div className="table-serach-bar">
            <input
              className="table-search-bar-main searchbar-placeholder"
              placeholder="Search client"
            />
          </div>
          <div className="table-search-button">
            Search{" "}
            <p>
              <img src={search} alt="search" />
            </p>
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default Table;
