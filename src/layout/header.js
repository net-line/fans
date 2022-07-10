
import classes from "./header.module.css";
import React from "react";
import {Link} from 'react-router-dom';
//import { NavItem, NavLink, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";


const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src="/images/deinefans_logo_2.png" alt="Logo" />
        </Link>
      </div>
      <div className={classes.navlinks}>
        <Link to="/models">
          <h5>Models</h5>
        </Link>
        <Link to="/privacy">
          <h5>Datenschutz</h5>
        </Link>
        <Link to="/agb">
          <h5>AGB</h5>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
