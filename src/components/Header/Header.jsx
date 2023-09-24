import React from "react";
import logo from "../../assets/logo/restaurant.svg";
import './header.css'
const Header = () => {
  return (
    <div className="header__main">
      <div className="header__left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="location">
            <h3>Ahmedabad</h3>
        </div>
      </div>
      <div className="header__right">
        <ul>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign-In</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
