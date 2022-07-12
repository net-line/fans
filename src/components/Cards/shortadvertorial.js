import React from "react";
import classes from "./modeladvertorial.module.css";

import { Link } from "react-router-dom";

import MyButtonRund from "./WrapperComponents/myCard.js/myButtonRund";

const Shortadvertorial = React.memo((props) => {
 
  const modelname = props.name;

 

  return (
    <div className={classes.pad}>
      <div className={classes.userinfo}>
       
        <div className={classes.userinfoheadershort}>
          <img src={props.image} alt={modelname} />
        </div>
        <div className={classes.userinfobody}>
         

          

          <p>{props.mymotto}</p>
          

          <Link to={`/${modelname}`}>
            <MyButtonRund>Jetzt abonieren</MyButtonRund>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Shortadvertorial;