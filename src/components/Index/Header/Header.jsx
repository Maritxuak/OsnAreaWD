import React, { useState } from 'react';
import logo from '../../../image/LogoType1.png';
import classes from './header.module.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import BurgerHeader from '../BurgerMenu/BurgerHeader';
const Header = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const handleBurgerClick = () => {
      setBurgerMenuOpen(!isBurgerMenuOpen);
    };

  return (    
  <div className={classes.headerIndex}>
        <div className={classes.logotype}>
      <img src={logo} alt="Logotype" />
        </div>
     <div className={classes.menu}>

       <div className={classes.menu_item}>Главная</div>
       <div className={classes.menu_item}>О нас</div>
       <div className={classes.menu_item}>Связь с нами</div>
       <div className={classes.menu_item}>Отзывы</div>
       <div className={classes.menu_item}>Акции</div>
     </div>
     <BurgerHeader />
    </div>
    );
};

export default Header;