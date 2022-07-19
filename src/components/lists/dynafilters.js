import React, { useContext } from "react";
import {Link} from "react-router-dom";
import Header from "../../layout/header";
import classes from './dynafilters.module.css';

import MyButton from "../Cards/WrapperComponents/myCard.js/myButton";
import AuthContext from "../../context/testcontext";
import { faststsignup } from "../../hooks/fastsignup";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../sonstige/languageswitch";





const DynaFilters = () => {
const userCtx = useContext(AuthContext);
const isLoggedIn = userCtx.isLoggedIn;
const isPremium = userCtx.isPremium;
const {t}=useTranslation();


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
    {userCtx.isLoggedIn && (
      <h5>
        {t("greeting")} {userCtx.pseudo}
      </h5>
    )}
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
        <LanguageSwitcher />
        {!isLoggedIn && (
          <Link className={classes.leftmenueright} to="/login">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">Login</span>
            </li>
          </Link>
        )}
        <Link className={classes.leftmenue} to="/">
          <li className={classes.icon1}>
            <span className="d-none d-md-block">Home</span>
          </li>
        </Link>
        {isLoggedIn && !isPremium && (
          <Link className={classes.leftmenue} to="/profile">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">{t("addpay")}</span>
            </li>
          </Link>
        )}

        {isLoggedIn && (
          <Link className={classes.leftmenue} to="/profile">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">{t("profil")}</span>
            </li>
          </Link>
        )}

        {isLoggedIn && (
          <Link className={classes.leftmenue} to="/favs">
            <li className={classes.icon2}>
              <span className="d-none d-md-block">{t("favs")}</span>
            </li>
          </Link>
        )}
        {isLoggedIn && !isPremium && (
          <Link className={classes.leftmenue} to="/subscriptions">
            <li className={classes.icon2}>
              <span className="d-none d-md-block">{t("abos")}</span>
            </li>
          </Link>
        )}
        <Link className={classes.leftmenue} to="/models">
          <li className={classes.icon8}>
            <span className="d-none d-md-block">{t("channels")}</span>
          </li>
        </Link>

       {isLoggedIn && !isPremium && <Link className={classes.leftmenue} to="/collection">
          <li className={classes.icon3}>
            <span className="d-none d-md-block">{t("mycollection")}</span>
          </li>
        </Link>}
       
      </ul>
    </div>
  </div>
);
};

export default DynaFilters;