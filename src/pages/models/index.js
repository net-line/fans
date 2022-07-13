import React, { useEffect, useRef, useState } from "react";
import AllApiGirls from "../../components/lists/allapigirls";
import { useLocation} from "react-router-dom";
import classes from "./models.module.css";



const Models=(props)=>{

  const location = useLocation();
  
  const [hasEntered,setHasEntered] = useState(null);
  console.log(location)
  useEffect(() => {
    setHasEntered(null);
    if (location.state !== null) {
      setHasEntered(location.state.test);
    }
    window.scrollTo(0, 0);
  }, [location.state]);
  

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
     <AllApiGirls hashtagged={hasEntered}/>
    </div>
    )}
    {!hasEntered&&<AllApiGirls />}
  </div>
);
};

export default Models;