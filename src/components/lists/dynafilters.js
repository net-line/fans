import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import Header from "../../layout/header";


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
  </Fragment>
);
};

export default DynaFilters;