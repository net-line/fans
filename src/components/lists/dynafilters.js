import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import Header from "../../layout/header";
import classes from './dynafilters.module.css';

const DynaFilters = () => {


return (
  <Fragment>
    <Header />

    <div className={classes.leftmenue}>
      <ul className={classes.icon}>
        <Link className={classes.leftmenue} to="/">
          <li>
            <span className="d-none d-md-block">Home</span>
          </li>
        </Link>
        <Link className={classes.leftmenue} to="/favs">
          <li>
            <span className="d-none d-md-block">Favoriten</span>
          </li>
        </Link>
        <Link className={classes.leftmenue} to="/models">
          <li>
            <span className="d-none d-md-block">Girls</span>
          </li>
        </Link>
      </ul>
    </div>
  </Fragment>
);
};

export default DynaFilters;