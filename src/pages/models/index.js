import React, { useEffect, useRef, useState } from "react";
import AllApiGirls from "../../components/lists/allapigirls";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./models.module.css";



const Models=(props)=>{
 const navigate = useNavigate();
  const location = useLocation();
  
  const [hasEntered,setHasEntered] = useState(null);
 
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
    const enteredvalue = "#"+questionref.current.value;
    setHasEntered(enteredvalue);
    navigate(`/models/${questionref.current.value}`);
    
   }
 
return (
  <div>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="text">Suche nach Tags: </label>
        <input type="text" id="suchtext" required ref={questionref} />
      </div>
    </form>
    
    
    {!hasEntered&&<AllApiGirls />}
  </div>
);
};

export default Models;