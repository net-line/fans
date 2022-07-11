import React from "react";
import classes from "./modeladvertorial.module.css";
import { useStore } from "../store-hooks/store";
import { Link } from "react-router-dom";
import Messengercard from "./messengercard";
const Modeladvertorial = React.memo(props =>{
    const dispatch = useStore(false)[1];
    const modelname=props.name;
console.log("renders")
  const toggleFavHandler=() =>{
    dispatch('TOGGLE_FAV', props.id)
    console.log(props)
  }

    return (
      <div className={classes.pad}>
        <div className={classes.userinfo}>
          <div className={classes.user}>
            <img src={props.image} alt={modelname} />
          </div>
          <div className={classes.userinfoheader}>
            <img src={props.image} alt={modelname} />
          </div>
          <div className={classes.userinfobody}>
            <div className={classes.tag}>
              <span className={classes.tagcolor1}>#HEISSKOCHEN </span>
              <span className={classes.tagcolor2}>#OHNE WASSER </span>
              <span className={classes.tagcolor3}>#UNMÖGLICH</span>
            </div>

            <h4>
              {modelname}
              <small> / {props.age} Jahre</small>
            </h4>

            <p>
              {props.mymotto}
            </p>
            <ul className={classes.liste}>
              <li>
                <Link to={`/${modelname}`}> {props.numberofitems} Posts</Link>
              </li>
            </ul>
            <Messengercard id={props.id}/>
            <button
              className={!props.isFav ? "button-outline" : ""}
              onClick={toggleFavHandler}
            >
              {props.isFav ? "Un-Favorite" : "Favorite"}
            </button>

            <Link to={`/${modelname}`}>
            
              <h5>Jetzt abonieren</h5>
            </Link>
          </div>
        </div>
      </div>
    );
});

export default Modeladvertorial;