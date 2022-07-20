import React, { useEffect, useState } from "react";
import classes from "./favbox.module.css";
import { Link } from "react-router-dom";
import useMyHttp from "../../hooks/myhttp";
import { useTranslation } from "react-i18next";
import OTPModal from "../payment/otp";
const FavBox = (props) =>{
console.log(props.mygirl)
const {t}=useTranslation();
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
  
  const [showModal, setShowModal] = useState(false)
  function toggleModal(){
    setShowModal(!showModal)
  }
  
  function makeotp(){
    toggleModal();
  }
  function gotbackdata(props){
    console.log(props)
    if(props===true)generateHeart();
    toggleModal();
  }
const [onheart,setonheart] = useState()
   function generateHeart() {
     setonheart(true);
    setTimeout(() => setonheart(false), 1000);
   }
    return (
      <div className={classes.userinfo} id="box">
        {data && (
          <div>
            <div className={classes.userinfoheader}>
              <Link to={`../${data.girl.pseudo}`}>
                <img src={data.girl.previewImageIDURLS.urlMedium} alt="rover" />
              </Link>
            </div>
            <div className={classes.userinfobody}>
              <h4>
                {/*   <small className={classes.online}>ich bin Online</small>{" "}
            <small className={classes.offline}>nicht verfügbar</small> */}
              </h4>

              <Link
                className={`${classes.btn} ${classes.btnblock}`}
                to={`../${data.girl.pseudo}`}
              >
                Zum Profil
              </Link>

              <hr />

              <nav className="text-center">
                {/* <Link className={classes.btn} to="#">
                  Nachricht
                </Link> */}

                <div className={classes.btn} onClick={makeotp} id="paymebox">
                  {t("paymoney")}
                  {onheart&&<div id="heart">
                    <span className={classes.heart}></span>
                    <span className={classes.heart}></span>
                  </div>}
                </div>

                <Link className={classes.btnabo} to="#">
                  {t("unfav")}
                </Link>
              </nav>
            </div>
          </div>
        )}
        {showModal && (
          <OTPModal
            girl={data.girl.pseudo}
            item={"eine Spende"}
            price={"20"}
            getbackclose={gotbackdata}
            zahlungsmethode="Kreditkarte"
          />
        )}
      </div>
    );
};

export default FavBox;