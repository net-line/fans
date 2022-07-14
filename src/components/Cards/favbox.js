import React from "react";
import classes from "./favbox.module.css";
import { Link } from "react-router-dom";
const FavBox = (props) =>{
console.log(props.mygirl)
    return (
      <div className={classes.userinfo}>
        <div className={classes.userinfoheader}>
          <Link to={`/${props.mygirl.pseudo}`}>
            <img
              src="http://d1kz6xs4yt2tqw.cloudfront.net/juliasugar-cms/Bildergalerie/300x180/galerie010.jpg"
              alt="rover"
            />
          </Link>
        </div>
        <div className={classes.userinfobody}>
          <h4>
            {props.mygirl.pseudo}
          {/*   <small className={classes.online}>ich bin Online</small>{" "}
            <small className={classes.offline}>nicht verfügbar</small> */}
          </h4>

          <nav className="text-center">
            <Link className={classes.btn} to="#">
              Nachricht
            </Link>

            <Link className={classes.btn} to="#">
              Trinkgeld
            </Link>
          </nav>
          <div className={classes.nextline}>
            <Link className={classes.btnabo} to="#">
              Abo kündigen
            </Link>
          </div>
        </div>
      </div>
    );
};

export default FavBox;