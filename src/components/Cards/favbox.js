import React, { useEffect } from "react";
import classes from "./favbox.module.css";
import { Link } from "react-router-dom";
import useMyHttp from "../../hooks/myhttp";
const FavBox = (props) =>{
console.log(props.mygirl)

  const { isLoading, data, error, sendRequest, clear } = useMyHttp();
  function fetchGirlsHandler() {
    //sendRequest(`https://api.deine.fans/api/girls/${props.id}`);
    sendRequest(
      `https://api.deine.fans/api/girls/${props.mygirl}`,
      "GET"
    );
    console.log(isLoading);
    console.log(data);
    console.log(error);
    console.log(clear);
  }
  useEffect(() => {
    fetchGirlsHandler();
  }, []);

    return (
      <div className={classes.userinfo}>
        {data && (
          <div>
            <div className={classes.userinfoheader}>
              <Link to={data.girl.pseudo}>
                <img src={data.girl.previewImageIDURLS.urlMedium} alt="rover" />
              </Link>
            </div>
            <div className={classes.userinfobody}>
              <h4>
                {/*   <small className={classes.online}>ich bin Online</small>{" "}
            <small className={classes.offline}>nicht verfügbar</small> */}
              </h4>

              <Link className={`${classes.btn} ${classes.btnblock}`} to={data.girl.pseudo}>
                Zum Profil
              </Link>

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
            </div>
          </div>
        )}
      </div>
    );
};

export default FavBox;