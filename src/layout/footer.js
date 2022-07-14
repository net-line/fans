import React from "react";
import classes from './footer.module.css';
import { Link } from "react-router-dom";

const Footer = () =>{
    

    return (
      <div className={classes.footer}>
        <Link className={classes.footertext} to="/privacy">
          Datenschutz
        </Link>
        <Link className={classes.footertext} to="/agb">
          AGB
        </Link>
      </div>
    );
};
export default Footer;