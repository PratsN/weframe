import React from "react";
import "./Middle.css";
const Middle = () => {
  return (
    <>
      <div>
        <div className="middle-heading middle-text">Recurring Invoices</div>;
        <button className="invoice-button">Add recurring invoice +</button>
        <div className="invoice-table invoice-text">
          <div className="invoice-table-item">
            <div># Recurring Invoices </div>
            <div className="invoice-table-item-text">215</div>
          </div>
          <div className="invoice-table-item">
            <div>Recurring Revenue </div>
            <div className="invoice-table-item-text">€2500/month</div>
          </div>
          <div className="invoice-table-item">
            <div>Recurring Overdue </div>
            <div className="invoice-table-item-text">22</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
