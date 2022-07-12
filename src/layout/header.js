
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
        
       
        
      </div>
    </header>
  );
};

export default Header;
