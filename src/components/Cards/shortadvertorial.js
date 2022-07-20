import React from "react";
import classes from "./modeladvertorial.module.css";

import { Link } from "react-router-dom";

import MyButtonRund from "./WrapperComponents/myCard.js/myButtonRund";
import { useTranslation } from "react-i18next";

const Shortadvertorial = React.memo((props) => {
 
  const modelname = props.name;

 const {t}=useTranslation();

  return (
    <div className={classes.padshort}>
      <div className={classes.userinfo}>
        <div className={classes.userinfoheadershort}>
          <Link to={`/${modelname}`} state={{ test: "1" }}>
            <img src={props.image} alt={modelname} />
          </Link>
        </div>
        <div className={classes.userinfobody}>
          <p>{props.mymotto}</p>

          <Link to={`/${modelname}`} state={{ test: "1" }}>
            <MyButtonRund className={classes.setback}>
              {t("toprofile")}
            </MyButtonRund>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Shortadvertorial;
