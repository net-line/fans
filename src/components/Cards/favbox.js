import React from "react";
import classes from "./favbox.module.css";
import { Link } from "react-router-dom";
const FavBox = (props) =>{

    return (
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className={classes.userinfo}>
            <div className={classes.userinfoheader}>
              <img
                src="http://d1kz6xs4yt2tqw.cloudfront.net/juliasugar-cms/Bildergalerie/300x180/galerie010.jpg"
                alt="rover"
              />
            </div>
            <div className={classes.userinfobody}>
              <h4>
                PSEUDO <small className={classes.online}>ich bin Online</small>{" "}
                <small className={classes.offline}>nicht verfügbar</small>
              </h4>
              <div className={classes.btnblock}>
                <Link to="/caro">Zum Girl</Link>
              </div>

              <nav className="text-center">
                <div className={classes.btn}>
                  <Link to="#">Nachricht</Link>
                </div>
                <div className={classes.btn}>
                  <Link to="#">Trinkgeld</Link>
                </div>
                <div className={classes.btnabo}>
                  <Link to="#">Abo kündigen</Link>
                </div>
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FavBox;