import React, { useRef, useState } from "react";
//import MyButton from "../Cards/WrapperComponents/myCard.js/myButton";
import classes from "./addpaymentmethod.module.css";
//import { Link } from "react-router-dom";

const AddPaymentModal = (props) => {

    const NameInputRef = useRef();
    const NumberInputRef = useRef();
    const CSVInputRef = useRef();

  function closeme() {
    props.getbackclose();
  }
 
  const [consent, setConsent] = useState(false);

 
  function submitHandler(event){
    setConsent(true);
    event.preventDefault();
    
  }
  function senddata(){
    const enteredname = NameInputRef.current.value;
    const enterednumber = NumberInputRef.current.value;
    const enteredcsv = CSVInputRef.current.value;
    const ccdata={
        name:enteredname,
        number:enterednumber,
        csv:enteredcsv}
    props.sendbackdata(ccdata);
  }
  return (
    <>
      <div className={classes.darkBG} onClick={closeme} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h3>Zahlungsmethode hinzufügen</h3>
          </div>
          <button className={classes.closeBtn} onClick={closeme}>
            <h3>X</h3>
          </button>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="text">Name auf Deiner Kreditkarte</label>
              <input type="text" id="text" required ref={NameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="number">KreditkartenNummer</label>
              <input type="number" id="number" required ref={NumberInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="number">CSV</label>
              <input type="number" id="number" required ref={CSVInputRef} />
            </div>
            <button>Submit</button>
          </form>
          {consent&&(<div>
                <h5>Wir belasten Deine Kreditkarte mit 0,10 Cent weil wir es können</h5>
                <button onClick={senddata}>Okay, Machen wir es so!</button>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default AddPaymentModal;
