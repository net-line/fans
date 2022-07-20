import React from "react";

import classes from "./showimagemodal.module.css";


const ShowImageModal = (props) => {
  function closeme() {
    props.getback();
  }
 const image=props.image.replace("/320x160","")

  return (
    <>
      <div className={classes.darkBG} onClick={closeme} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <button className={classes.closeBtn} onClick={closeme}>
            <h3>X</h3>
          </button>
          <img src={image} alt="It's big" className={classes.bigimage} onClick={closeme}/></div>
        </div>
      
    </>
  );
};

export default ShowImageModal;
