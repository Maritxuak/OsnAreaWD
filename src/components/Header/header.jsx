import classes from "./header.module.css";
import { Link } from "react-router-dom";
import MenuAnd from "../../image/menuAnd.svg";
import React, { useState } from 'react';

const Header = () => {
  const svgB = `<svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="6" fill="#0A2640"/>
  <rect y="11" width="40" height="6" fill="#0A2640"/>
  <rect y="22" width="40" height="6" fill="#0A2640"/>
  </svg>
  `;
  const [isActive, setIsActive] = useState(false);

  const inMenu = () => {
    setIsActive(!isActive);
  };


  return (
    <div className={classes.wrapper} >
      <div className={classes.button}>
        <input type="checkbox" onClick={inMenu}/>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* style={{ margin-right: 0 + 'rem' }} */}
      <div style={{ margin: 0 + 'rem' }} className={`row ${classes.menuMob} ${isActive ? `${classes.active}` : ''}`}>
        <div className="col-12 col-md-2 col-xl-7"></div>
        <div className="col-12 col-md-1 col-xl-1 d-flex justify-content-center">
          <Link to="/welcome/" alt="">
            Проект
          </Link>
        </div>
        <div className="col-12 col-md-2 col-xl-1 d-flex justify-content-center">
          <Link to="/welcome/projects" alt="">
            План
          </Link>
        </div>
        <div className="col-12 col-md-2 col-xl-1 d-flex justify-content-center">
          <Link to="/welcome/colletion" alt="">
            Портфолио
          </Link>
        </div>
        <div className="col-12 col-md-2 col-xl-1 d-flex justify-content-center">
          <Link to="/" alt="">
            Музыка
          </Link>
        </div>
        <div className="col-12 col-md-2 col-xl-1 d-flex justify-content-center">
          <Link to="/" alt="">
            Профиль
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
