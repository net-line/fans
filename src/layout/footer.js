import React from "react";

import { Link } from "react-router-dom";

const Footer = () =>{
    

    return (
      <div>
        <Link to="/privacy">
          <h5>Datenschutz</h5>
        </Link>
        <Link to="/agb">
          <h5>AGB</h5>
        </Link>
      </div>
    );
};
export default Footer;