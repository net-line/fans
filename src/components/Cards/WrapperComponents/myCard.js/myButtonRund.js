import React from "react";
import classes from './mybuttonrund.module.css';

const MyButtonRund = (props) => {

    return(
        <button className={classes.btn}>
            {props.children}
        </button>
    )
};

export default MyButtonRund;