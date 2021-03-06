import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import s from "../../index.scss";
import { switchTheme } from "../../redux/actions/appActions";

const Header = ({ dispatch }) => {
  const changeAppTheme = () => {
    dispatch(switchTheme("green"));
  };

  return (
    <header className="header-app-wraper">
      <div className="header-app-left">
        <NavLink to="/">
          <img width="100px" height="100px" src={logo} alt="logo"></img>
        </NavLink>

        <span>
          <NavLink to="/home">
            <h1>Stanislav Iarotchi</h1>
          </NavLink>
        </span>
      </div>

      <div className="header-app-right">
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
      </div>
      <div className="switcherTheme">
        <input type="checkbox" id="switch" onClick={changeAppTheme} />
        <label htmlFor="switch">Toggle</label>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  appColor: state.app.appTheme
});

export default connect(mapStateToProps)(Header);
