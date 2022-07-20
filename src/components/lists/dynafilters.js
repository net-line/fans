import React, { useContext, useEffect, useState } from "react";
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

  const [showMoney, setShowMoney] = useState(null);
  
useEffect(() => {
  setShowMoney(userCtx.fanDollar);
}, [userCtx.fanDollar]);

return (
  <div className={classes.outlinegone}>
    <Header />

    <div className={classes.leftmenue}>
      <ul className={classes.icon}>
        {userCtx.isLoggedIn && (
          <h5 className={classes.xtrabtn}>
            {t("greeting")} {userCtx.pseudo}
          </h5>
        )}
        {!isLoggedIn && (
          <div onClick={logmeinfast} className={classes.xtrabtn}>
            <MyButton>Quicklogin StandardUser</MyButton>
          </div>
        )}
        {!isLoggedIn && (
          <div onClick={logmeinfastapi} className={classes.xtrabtn}>
            <MyButton>Quicklogin APItester</MyButton>
          </div>
        )}
        {isLoggedIn && (
          <div onClick={logmeoutfast} className={classes.xtrabtn}>
            <MyButton>Logout</MyButton>
          </div>
        )}
        {isLoggedIn && !isPremium && (
          <div onClick={setmePremium} className={classes.xtrabtn}>
            <MyButton>Set Premium</MyButton>
          </div>
        )}
        {isLoggedIn && isPremium && (
          <div onClick={resetBePremium} className={classes.xtrabtn}>
            <MyButton>Reset Premium</MyButton>
          </div>
        )}
        <div className={classes.xtrabtn}>
          <LanguageSwitcher />
        </div>
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
        {isLoggedIn && (
          <Link className={classes.leftmenue} to="/profile">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">{t("addpay")}</span>
            </li>
          </Link>
        )}
        {isLoggedIn && showMoney && <p>{showMoney} FanDollar</p>}
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
        {isLoggedIn && isPremium && (
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

        {isLoggedIn && isPremium && (
          <Link className={classes.leftmenue} to="/collection">
            <li className={classes.icon3}>
              <span className="d-none d-md-block">{t("mycollection")}</span>
            </li>
          </Link>
        )}
      </ul>
    </div>
  </div>
);
};

export default DynaFilters;