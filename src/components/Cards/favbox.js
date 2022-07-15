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
              src="https://d2cq08zcv5hf9g.cloudfront.net/480x360/gl3115fb66db374e0494314e5d1c99f50d.webp"
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
          
          <Link className="btn btn-block" to={`/${props.mygirl.pseudo}`}>Zum Profil</Link>
          
          <hr />

          <nav className="text-center">
            <Link className={classes.btn} to="#">
              Nachricht
            </Link>

            <Link className={classes.btn} to="#">
              Trinkgeld
            </Link>

            <Link className={classes.btnabo} to="#">
              Abo kündigen
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