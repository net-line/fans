import React, { useRef} from "react";
import classes from "./searchfortags.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SearchForTags = () => {

 const navigate = useNavigate();
  const questionref = useRef();




  function submitHandler(event) {
    event.preventDefault();
    
    navigate(`/models/${questionref.current.value}`);
  }
const {t}=useTranslation();
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <input
            type="text"
            id="suchtext"
            placeholder="Suche nach Channels"
            required
            ref={questionref}
            className={classes.input}
          />
          <button className={classes.myButton}>{t("abschicken")}</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForTags;
