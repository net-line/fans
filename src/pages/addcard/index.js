import React, { useRef, useState } from "react";
import classes from "./addcard.module.css";
const AddCard = () => {


  const questionref = useRef();
const [enteredValue, setEnteredValue] = useState()
  function submitHandler(event) {
    event.preventDefault();
    setEnteredValue(questionref.current.value);
   
  }
  return (
    <div>
      <img
        alt="Ein singender Elch will meine Kreditkarte"
        src="https://lh4.googleusercontent.com/-Z5cpu4IarTE/T5mhTwSbZGI/AAAAAAAAK1g/av7CfELXmHE/s203/Weihnachten%2520AK061.gif"
      />
      Gib ihm Deine Kreditkarte, wir wissen alle, dass Du es willst:
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="number">Kartennummer</label>
          <input type="number" id="ccnumber" required ref={questionref} />
        </div>
      </form>
      {enteredValue && { enteredValue }}
    </div>
  );
};

export default AddCard;
