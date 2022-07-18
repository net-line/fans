import React, { useContext } from "react";
import {Link} from "react-router-dom";
import Header from "../../layout/header";
import classes from './dynafilters.module.css';

import MyButton from "../Cards/WrapperComponents/myCard.js/myButton";
import AuthContext from "../../context/testcontext";
import { faststsignup } from "../../hooks/fastsignup";


const DynaFilters = () => {
const userCtx = useContext(AuthContext);
const isLoggedIn = userCtx.isLoggedIn;
const isPremium = userCtx.isPremium;

    function logmeinfast (){
      var pseu="Hotte1"
      var pw = "qwert123";
      
     faststsignup(pseu,pw, userCtx)
      
    }
    function logmeinfastapi() {
      var pseu = "apitest";
      var pw = "testedieapi";

      faststsignup(pseu, pw, userCtx);
    }
    function logmeoutfast() {
      userCtx.logout();
    }
    function setmePremium(){
      userCtx.bePremium("PREMIUMTOKEN")
    }
    function resetBePremium() {
      userCtx.bePremium();
    }

  
return (
  <div className={classes.outlinegone}>
    <Header />
    {userCtx.isLoggedIn && <h5>{userCtx.pseudo}</h5>}
    <div className={classes.leftmenue}>
      <ul className={classes.icon}>
        {!isLoggedIn && (
          <div onClick={logmeinfast}>
            <MyButton>Quicklogin StandardUser</MyButton>
          </div>
        )}
        {!isLoggedIn && (
          <div onClick={logmeinfastapi}>
            <MyButton>QuickloginAPItester</MyButton>
          </div>
        )}
        {isLoggedIn && (
          <div onClick={logmeoutfast}>
            <MyButton>Logout</MyButton>
          </div>
        )}
        {isLoggedIn && !isPremium && (
          <div onClick={setmePremium}>
            <MyButton>Set Premium</MyButton>
          </div>
        )}
        {isLoggedIn && isPremium && (
          <div onClick={resetBePremium}>
            <MyButton>Reset Premium</MyButton>
          </div>
        )}
        {!isLoggedIn && (
          <Link className={classes.leftmenue} to="/login">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">Login</span>
            </li>
          </Link>
        )}
        {isLoggedIn && !isPremium && (
          <Link className={classes.leftmenue} to="/addcard">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">Kreditkarte hinzufügen</span>
            </li>
          </Link>
        )}

        {isLoggedIn && (
          <Link className={classes.leftmenue} to="/profile">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">Dein Profil</span>
            </li>
          </Link>
        )}
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
        {isLoggedIn && <Link className={classes.leftmenue} to="/subscriptions">
          <li className={classes.icon2}>
            <span className="d-none d-md-block">Meine Abos</span>
          </li>
        </Link>}
        <Link className={classes.leftmenue} to="/models">
          <li className={classes.icon8}>
            <span className="d-none d-md-block">Girls</span>
          </li>
        </Link>

        <Link className={classes.leftmenue} to="/collection">
          <li className={classes.icon3}>
            <span className="d-none d-md-block">Collection</span>
          </li>
        </Link>
        <Link className={classes.leftmenue} to="/login">
          <li className={classes.icon3}>
            <span className="d-none d-md-block">Werde Creator</span>
          </li>
        </Link>
      </ul>
    </div>
  </div>
);
};

export default DynaFilters;