import React, { useContext, useEffect, useState } from "react";
import classes from "./modeladvertorial.module.css";
import { Link, useNavigate } from "react-router-dom";
//import Messengercard from "./messengercard";
import MyButtonRund from "./WrapperComponents/myCard.js/myButtonRund";
import AuthContext from "../../context/testcontext";
import Subscriptionmodal from "../payment/subscriptionmodal";
import { Col, Row } from "reactstrap";


const Modeladvertorial = React.memo(props =>{
  const history=useNavigate()
  const authCtx=useContext(AuthContext);

    const modelname=props.name;
const [showmoretags, setshowmoretags] = useState(false);
  const toggleFavHandler=() =>{
  
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
                  method: "DELETE",
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
  const [showSubModal, setShowSubModal] = useState(false)
  function openmodal (){
       setShowSubModal(true);
    }
function closemodal(test){
  console.log(test)
setShowSubModal(false);
}

useEffect(() => {
  const body = document.querySelector("body");
  body.style.overflow = showSubModal ? "hidden" : "auto";
}, [showSubModal]);
    return (
      <>
        <div className={classes.pad}>
          <div className={classes.userinfo}>
            <div className={classes.user}>
              <img src={props.secondimage} alt={modelname} />
            </div>
            <div className={classes.userinfoheader}>
              <Link to={`/${modelname}`}>
                <img src={props.image} alt={modelname} />
              </Link>
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
                  {props.hashtag[3] && (
                    <h5 onClick={showmemoretags} className={classes.plus}>
                      +
                    </h5>
                  )}
                </div>
              )}
              {showmoretags && (
                <div className={classes.tag}>
                  <h5 onClick={showmelesstags} className={classes.plus}>
                    -
                  </h5>
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
              <Row>
                <Col xs="6">
                  <h4><Link to={`/${modelname}`}>
                    {modelname}</Link>
                    <small> / {props.age} Jahre</small>
                  </h4>
                </Col>
                <Col xs="6">
                  <div onClick={toggleFavHandler}>
                    <MyButtonRund
                    //Nicht vergessen, btn-Style mit MyButton Style synchronisieren
                    >
                      {props.isFav
                        ? "Von Favoriten entfernen"
                        : "Zu Favoriten hinzuf??gen"}
                    </MyButtonRund>
                  </div>
                </Col>
              </Row>
              <p>{props.mymotto}</p>

              <ul className={classes.liste}>
                <li>
                  <Link to={`/${modelname}`}> {props.numberofitems} Posts</Link>
                </li>
              </ul>

              {/* <Messengercard id={props.id} /> */}
              {authCtx.isLoggedIn && authCtx.isPremium && (
                <div className={classes.btnout}>
                  <button className={classes.btn} onClick={openmodal}>
                    {!props.isAbo ? "Abo beenden" : "Abonnieren"}
                  </button>
                  
                </div>
              )}
              {authCtx.isLoggedIn && !authCtx.isPremium && (
                <Link to="/profile" className={classes.btnout}>
                  <button className={classes.btn}>
                    Zahlungsmethode hinzuf??gen um diesen Channel zu abonnieren!
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        {showSubModal && (
          <Subscriptionmodal
            price="15"
            user={authCtx.pseudo}
            getbackclose={closemodal}
            girlname={modelname}
            zahlungsmethode="Kreditkarte"
          />
        )}
      </>
    );
              }

);

export default Modeladvertorial;