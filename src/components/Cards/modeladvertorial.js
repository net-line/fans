import React, { useState } from "react";
import classes from "./modeladvertorial.module.css";
import { useStore } from "../store-hooks/store";
import { Link } from "react-router-dom";
import Messengercard from "./messengercard";
import MyButtonRund from "./WrapperComponents/myCard.js/myButtonRund";


const Modeladvertorial = React.memo(props =>{
    const dispatch = useStore(false)[1];
    const modelname=props.name;
const [showmoretags, setshowmoretags] = useState(false);
  const toggleFavHandler=() =>{
    dispatch('TOGGLE_FAV', props.id)
  
  }

  function showmemoretags() {
    setshowmoretags(true);
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
                  <Link to="/models" state={{ test: props.hashtag[0] }}>
                    <span className={classes.tagcolor1}>
                      {props.hashtag[0]}
                    </span>
                  </Link>
                )}
                <span> </span>

                {props.hashtag[1] && (
                  <Link to="/models" state={{ test: props.hashtag[1] }}>
                    <span className={classes.tagcolor2}>
                      {props.hashtag[1]}
                    </span>
                  </Link>
                )}
                <span> </span>
                {props.hashtag[2] && (
                  <Link to="/models" state={{ test: props.hashtag[2] }}>
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
                {props.hashtag.map((hashtag) => (
                  <div key={hashtag}>
                    <Link to="/models" state={{ test: hashtag }}>
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