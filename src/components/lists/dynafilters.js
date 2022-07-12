import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import Header from "../../layout/header";
import classes from './dynafilters.module.css';

const DynaFilters = () => {


return (
  <Fragment>
    <Header />
    <ul>
      <Link to="/favs">
        <h5>Favoriten</h5>
      </Link>
      <Link to="/models">
        <h5>Models</h5>
      </Link>
    </ul>

    <div className={classes.leftmenue}>
      <ul className={classes.icon}>
          <Link className={classes.leftmenue} to="/">
          <li>Home</li>
          </Link>
       
        <li>Benachrichtigung</li>
      </ul>
    </div>
  </Fragment>
);
};

export default DynaFilters;