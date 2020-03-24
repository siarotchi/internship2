import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import s from "../../index.scss";

const Header = () => {
  return (
    <header className="header-app-wraper">
      <div className="header-app-left">
        <img width="100px" height="100px" src={logo} alt="logo"></img>

        <span>
          <NavLink to="/home">
            <h1>Stanislav Iarotchi</h1>
          </NavLink>
        </span>
      </div>

      <nav>
        <ul id="menu">
          <li>
            <NavLink activeClassName={s.active} to="/slider">
              Slider-Coin
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo">To-do List</NavLink>
          </li>
          <li>
            <NavLink to="/lineSlider">LineSlider</NavLink>
          </li>
          <li>
            <NavLink to="/formikForm">Formik</NavLink>
          </li>
          {/* <li>
            <NavLink to="/444">444</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
