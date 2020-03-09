import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import s from "../../index.scss";

const Header = () => {
  return (
    <header className="header-app-wraper">
      <div className="header-app-left">
        <img width="100px" height="100px" src={logo}></img>

        <span>
          <NavLink to="/home">
            <a>
              <h1>Stanislav Iarotchi</h1>
            </a>
          </NavLink>
        </span>
      </div>

      <nav>
        <ul id="menu">
          <li>
            <NavLink activeClassName={s.active} to="/slider">
              <a>Slider-Coin</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo">
              <a>To-do List</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/333">
              <a>333</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/444">
              <a>444</a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
