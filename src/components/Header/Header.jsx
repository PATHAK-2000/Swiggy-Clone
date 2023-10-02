import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/restaurant.svg";
import "./header.css";
const Header = () => {
  return (
    <div className="header__main">
      <div className="header__left">
        <div className="logo">
         <Link to="/"> <img src={logo} alt="logo" /></Link>
        </div>
        <div className="location">
          <h3>Ahmedabad</h3>
        </div>
      </div>
      <div className="header__right">
        <ul>
          <Link to='/offers' className="links">
            {" "}
            <li>Offers</li>
          </Link>
          <Link className="links">
            {" "}
            <li>Help</li>
          </Link>
          <Link className="links">
            {" "}
            <li>Sign-In</li>
          </Link>
          <Link className="links">
            {" "}
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
