import React, { useContext } from "react";
import {Link} from "react-router-dom";
import Header from "../../layout/header";
import classes from './dynafilters.module.css';

import MyButton from "../Cards/WrapperComponents/myCard.js/myButton";
import AuthContext from "../../context/testcontext";

const DynaFilters = () => {
const userCtx = useContext(AuthContext);
const isLoggedIn = userCtx.isLoggedIn;
function logmeinfast (){

  userCtx.login("DUMMYTOKEN"); 
}
function logmeoutfast() {
  userCtx.logout();
}
return (
  <div className={classes.outlinegone}>
    <Header />

    <div className={classes.leftmenue}>
      <ul className={classes.icon}>
        <Link className={classes.leftmenue} to="/">
          <li className={classes.icon1}>
            <span className="d-none d-md-block">Home</span>
          </li>
        </Link>
        <Link className={classes.leftmenue} to="/favs">
          <li className={classes.icon2}>
            <span className="d-none d-md-block">Favoriten</span>
          </li>
        </Link>
        <Link className={classes.leftmenue} to="/models">
          <li className={classes.icon8}>
            <span className="d-none d-md-block">Girls</span>
          </li>
        </Link>
        {!isLoggedIn && (
          <Link className={classes.leftmenue} to="/login">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">Login</span>
            </li>
          </Link>
        )}
        {!isLoggedIn && (
          <div onClick={logmeinfast}>
            <MyButton>Quicklogin</MyButton>
          </div>
        )}
        {isLoggedIn && (
          <div onClick={logmeoutfast}>
            <MyButton>Logout</MyButton>
          </div>
        )}
        <Link className={classes.leftmenue} to="/collection">
          <li className={classes.icon3}>
            <span className="d-none d-md-block">Collection</span>
          </li>
        </Link>
      </ul>
    </div>
  </div>
);
};

export default DynaFilters;