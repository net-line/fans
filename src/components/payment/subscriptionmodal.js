import React from "react";
import classes from "./subscriptionmodal.module.css"


const Subscriptionmodal = ({ setIsOpen }) => {



  return (
    <>
      <div className={classes.darkBG} onClick={() => setIsOpen(false)} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Dialog</h5>
          </div>
          <button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
            <h3>X</h3>
          </button>
          <h5>Text</h5>
        </div>
      </div>
    </>
  );
};

export default Subscriptionmodal;