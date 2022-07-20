import React, { useContext, useState } from "react";

import MyButton from "../Cards/WrapperComponents/myCard.js/myButton";
import classes from "./subscriptionmodal.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/testcontext";
import { Row, Col } from "reactstrap";

const OTPModal = (props) => {
  function closeme() {
    props.getbackclose(false);
  }
  function closetrue() {
    const payments = {
      preis: props.price,
      payed: newprice,
    };
    if (newprice>0){authCtx.fanDollar=authCtx.fanDollar-(Number(props.price)-newprice)}
    props.getbackclose(payments);
  }
  const [consent, setConsent] = useState(false);
  
  function togglewiderspruch() {
    setConsent(!consent);
  }
  const authCtx=useContext(AuthContext)
  const userFanDollar=Number(authCtx.fanDollar);


const [newprice,setNewPrice] = useState(0)
  const [paywithFanDollar, setPaywithFandollar]=useState(false);
  function useFanDollar (){
    setPaywithFandollar(!paywithFanDollar);
    
    if(Number(userFanDollar)<Number(props.price)){setNewPrice(Number(props.price) - Number(userFanDollar));}


  }
  return (
    <>
      <div className={classes.darkBG} onClick={closeme} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h3>Einmalige Zahlung über {props.price} Euro</h3>
          </div>
          <button className={classes.closeBtn} onClick={closeme}>
            <h3>X</h3>
          </button>

          {!paywithFanDollar && (
            <h5>
              Du erwirbst {props.item} für den Betrag von {props.price} Euro.
              Dieser Betrag wird von Deiner Zahlungsmethode{" "}
              {props.zahlungsmethode} abgebucht.
            </h5>
          )}
          {paywithFanDollar && newprice > 0 && (
            <h5>
              Du erwirbst {props.item} für den Betrag von {props.price} Euro. Du
              bezahlst {newprice} Euro über Deiner Zahlungsmethode{" "}
              {props.zahlungsmethode} und den Rest mit FanDollar.
            </h5>
          )}
          {paywithFanDollar && newprice === 0 && (
            <h5>
              Du erwirbst {props.item} für den Betrag vonn {props.price}{" "}
              FanDollar.
            </h5>
          )}
          {paywithFanDollar && (
            <div>
              <label>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  onClick={useFanDollar}
                />
                Nicht mit FanDollar zahlen.
              </label>
            </div>
          )}
          {!paywithFanDollar && userFanDollar > 0 ? (
            <div>
              <label>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  onClick={useFanDollar}
                />
                Du hast noch {userFanDollar} FanDollar in Deinem Account. Willst
                Du diese nutzen?
              </label>
            </div>
          ) : null}

          <p>
            <label>
              <input
                className={classes.checkbox}
                type="checkbox"
                onClick={togglewiderspruch}
              />
              Hiermit akzeptiere ich die <Link to="/AGB">AGB</Link>. Ich stimme
              ausdrücklich zu, dass Sie vor Ablauf der Widerrufsfrist mit der
              Ausführung des Vertrages beginnen. Mir ist bekannt, dass ich durch
              diese Zustimmung mit Beginn der Ausführung des Vertrages mein
              Widerrufsrecht verliere.
            </label>
          </p>
          <Row>
            <Col xs="6">
              {consent && (
                <MyButton>
                  <div onClick={closetrue}>Jetzt kostenpflichtig bestellen</div>
                </MyButton>
              )}
              {!consent && (
                <MyButton className={classes.inactive}>
                  <div>Bitte akzeptiere die AGB</div>
                </MyButton>
              )}
            </Col>
            <Col xs="6">
              {" "}
              <Link to="/profile">
                <MyButton>Bevorzugte Zahlungsmethode ändern</MyButton>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default OTPModal;
