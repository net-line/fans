import React, { useState } from "react";
import MyButton from "../Cards/WrapperComponents/myCard.js/myButton";
import classes from "./subscriptionmodal.module.css";
import { Link } from "react-router-dom";

const OTPModal = (props) => {
  function closeme() {
    props.getbackclose(false);
  }
  function closetrue() {
    props.getbackclose(true);
  }
  const [consent, setConsent] = useState(false);

  function togglewiderspruch() {
    setConsent(!consent);
  }

  return (
    <>
      <div className={classes.darkBG} onClick={closeme} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h3>Einmalige Zahlung</h3>
          </div>
          <button className={classes.closeBtn} onClick={closeme}>
            <h3>X</h3>
          </button>
          <h4>Hallo {props.user},</h4>
          <h5>
            Du erwirbst {props.item} zum Prei von {props.price} Der Betrag wird von Deiner
            Zahlungsmethode {props.zahlungsmethode} abgebucht.
            
          </h5>
          <h5>
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
          </h5>
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
        </div>
      </div>
    </>
  );
};

export default OTPModal;
