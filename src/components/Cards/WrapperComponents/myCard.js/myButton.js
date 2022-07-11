import React from "react";
import classes from './mybutton.module.css';

const MyButton = (props) => {

    return(
        <button className={classes.btn}>
            {props.children}
        </button>
    )
};

export default MyButton;