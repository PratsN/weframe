import React from "react";
import "./Header.css";
import profilepic from "../Images/profilepic.png";
const Header = () => {
  return (
    <div>
      <div className="banner">
        <div className="user-info">
          <div>
            <img src={profilepic} alt="profile-img" />
          </div>
          <div className="user-name">Jort KKKKKKKKKKKK</div>
        </div>
        <div className="sales-info">
          <div className="sales-text">Last 30 days</div>
          <div className="sales-paid ">
            <div className="sales-title">Paid</div>
            <div className="sales-value">€24.000</div>
          </div>
          <div className="sales-pending ">
            <div className="sales-title">pending</div>
            <div className="sales-value">€41.000</div>
          </div>
          <div className="sales-overdue ">
            <div className="sales-title">overdue</div>
            <div className="sales-value">€65.000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
