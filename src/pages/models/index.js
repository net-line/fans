import React, { useEffect, useRef, useState } from "react";
import AllApiGirls from "../../components/lists/allapigirls";
import { useLocation} from "react-router-dom";
import classes from "./models.module.css";



const Models=(props)=>{

  const location = useLocation();
  const test = location.state.test


  const [hasEntered,setHasEntered] = useState(null);

  useEffect(() => {
    if (test) {
      setHasEntered(test);
      window.scrollTo(0, 0);
    }
  }, [test]);
  

const questionref = useRef();

   function submitHandler(event){
    event.preventDefault();
    const enteredvalue = questionref.current.value;
    setHasEntered(enteredvalue);
   }
 
return (
  <div>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="text">Wonach suchst Du?</label>
        <input type="text" id="suchtext" required ref={questionref} />
      </div>
    </form>
    {hasEntered&&(
      <div>
    <h5>Du suchst nach {hasEntered}</h5>
    <AllApiGirls search={hasEntered}/>
    </div>
    )}
    {!hasEntered&&<AllApiGirls />}
  </div>
);
};

export default Models;