import React from "react";
import "./Sidebar.css";
import discount from "../Images/discount.png";
import invoices from "../Images/invoices.png";
import customers from "../Images/customers.png";
import products from "../Images/products.png";
import recurring from "../Images/recurring.png";
import home from "../Images/home.png";

const Sidebar = () => {
  return (
    <>
      <aside className="bar">
        <p className="company-logo"></p>
        <p className="back-arrow"></p>
        <div className="sidebar-container">
          <div className="sidebar-items">
            {" "}
            <a>
              <img src={home} alt="home-icon" />
            </a>
            Home
          </div>

          <div className="sidebar-items">
            {" "}
            <a>
              <img src={invoices} alt="invoice-icon" />
            </a>
            Invoices
          </div>
          <div className="sidebar-items">
            {" "}
            <a>
              <img src={customers} alt="customer-icon" />
            </a>
            Customers
          </div>
          <div className="sidebar-items">
            {" "}
            <a>
              <img src={products} alt="product-icon" />
            </a>
            Products
          </div>
          <div className="sidebar-items">
            {" "}
            <a>
              <img src={recurring} alt="recurring-icon" />
            </a>
            Recurring
          </div>
          <div className="sidebar-items">
            {" "}
            <a>
              <img src={discount} alt="discount-icon" />
            </a>
            Discount
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
