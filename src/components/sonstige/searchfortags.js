import React, { useRef} from "react";
import classes from "./searchfortags.module.css";
import { useNavigate } from "react-router-dom";
const SearchForTags = (props) => {
  
 const navigate = useNavigate();
  const questionref = useRef();

  function submitHandler(event) {
    event.preventDefault();
    
    navigate(`/models/${questionref.current.value}`);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="text" className={classes.label}>
            Suche nach Tags:{" "}
          </label>
          <input
            type="text"
            id="suchtext"
            required
            ref={questionref}
            className={classes.input}
          />
          <button>Abschicken</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForTags;
