import React, { useContext, useState } from "react";
import classes from "./modeladvertorial.module.css";
import { Link, useNavigate } from "react-router-dom";
import Messengercard from "./messengercard";
import MyButtonRund from "./WrapperComponents/myCard.js/myButtonRund";
import AuthContext from "../../context/testcontext";



const Modeladvertorial = React.memo(props =>{
  const history=useNavigate()
  const authCtx=useContext(AuthContext);
    const modelname=props.name;
const [showmoretags, setshowmoretags] = useState(false);
  const toggleFavHandler=() =>{
   console.log("test", authCtx.isLoggedIn);
    if(authCtx.isLoggedIn===false){ history("/login")}
    else{
      fetchfavs();
    }
  
  }
 
 function fetchfavs() {
   fetch(`https://api.deine.fans/api/favs/?userID=${authCtx.userID}&producerID=${props.id}&authToken=${authCtx.token}`)
   .then((res) => {
          console.log(res);
          if (res.ok) {
             res.json().then((data) => {
              console.log(data)
            if (data.hasFavorite === false) {
              console.log("pfad 1");
              fetch(
                `https://api.deine.fans/api/favs`,
                {
                  method: "PUT",
                  body: JSON.stringify({
                    userID: authCtx.userID,
                    producerID: props.id,
                    authToken: authCtx.token,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            } else {
              console.log("pfad 2")
              fetch(
                `https://api.deine.fans/api/favs`,
                {
                  method: "delete",
                  body: JSON.stringify({
                    userID: authCtx.userID,
                    producerID: props.id,
                    authToken: authCtx.token,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            }
          })
          }}
   );
   
 }
  function showmemoretags() {
    setshowmoretags(true);
  };
   function showmelesstags() {
    setshowmoretags(false);
  };

    return (
      <div className={classes.pad}>
        <div className={classes.userinfo}>
          <div className={classes.user}>
            <img src={props.secondimage} alt={modelname} />
          </div>
          <div className={classes.userinfoheader}>
            <img src={props.image} alt={modelname} />
          </div>
          <div className={classes.userinfobody}>
            {!showmoretags && (
              <div className={classes.tag}>
                {props.hashtag[0] && (
                  <Link to={`/models/${props.hashtag[0].replace("#", "")}`}>
                    <span className={classes.tagcolor1}>
                      {props.hashtag[0]}
                    </span>
                  </Link>
                )}
                <span> </span>

                {props.hashtag[1] && (
                  <Link to={`/models/${props.hashtag[1].replace("#", "")}`}>
                    <span className={classes.tagcolor2}>
                      {props.hashtag[1]}
                    </span>
                  </Link>
                )}
                <span> </span>
                {props.hashtag[2] && (
                  <Link to={`/models/${props.hashtag[2].replace("#", "")}`}>
                    <span className={classes.tagcolor3}>
                      {props.hashtag[2]}
                    </span>
                  </Link>
                )}
                {props.hashtag[3] && <h5 onClick={showmemoretags}>+</h5>}
              </div>
            )}
            {showmoretags && (
              <div className={classes.tag}>
                <h5 onClick={showmelesstags}>-</h5>
                {props.hashtag.map((hashtag) => (
                  <div key={hashtag}>
                    <Link to={`/models/${hashtag.replace("#", "")}`}>
                      <span className={classes.tagcolor1}>{hashtag}</span>
                    </Link>
                    <span> </span>
                  </div>
                ))}
              </div>
            )}

            <h4>
              {modelname}
              <small> / {props.age} Jahre</small>
            </h4>

            <p>{props.mymotto}</p>
            <ul className={classes.liste}>
              <li>
                <Link to={`/${modelname}`}> {props.numberofitems} Posts</Link>
              </li>
            </ul>
            <Messengercard id={props.id} />
            <button
              className={
                !props.isFav
                  ? `button-outline ${classes.btn}`
                  : `${classes.btn}`
              }
              //Nicht vergessen, btn-Style mit MyButton Style synchronisieren
              onClick={toggleFavHandler}
            >
              {props.isFav
                ? "Von Favoriten entfernen"
                : "Zu Favoriten hinzufügen"}
            </button>

            <Link to={`/${modelname}`}>
              <MyButtonRund>Jetzt abonieren</MyButtonRund>
            </Link>
          </div>
        </div>
      </div>
    );
});

export default Modeladvertorial;