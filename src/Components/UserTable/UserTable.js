import React, { useState } from "react";
import Data from "../Data";
import "./UserTable.css";
import tablelogo from "../Images/tablelogo.png";
import editbar from "../Images/editbar.png";

const UserTable = () => {
  const [data, setData] = useState(Data);
  const [selectRow, setSelectedRow] = useState(null);

  const onButtonClick = (index) => {
    setSelectedRow(selectRow === index ? null : index);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>client</th>
            <th>#send</th>
            <th>end date</th>
            <th>interval</th>
            <th>amount</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="first-data">
                  <img src={tablelogo} alt="table-logo" />
                  {item.name}
                </td>
                <td>{item.send}</td>
                <td>{item.endDate}</td>
                <td>{item.interval}</td>
                <td>€ {item.amount}</td>

                <td>
                  <button
                    className="edit-button"
                    onClick={() => onButtonClick(index)}
                  >
                    Edit
                    <img src={editbar} alt="edit" />
                  </button>
                  {selectRow === index && (
                    <div className="toggle-button">
                      <ul>
                        <li>Pause</li>
                        <li>Duplicate</li>
                        <li>Edit</li>
                        <li>Terminate</li>
                        <li>Skip next date</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
