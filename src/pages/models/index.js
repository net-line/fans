import React, { useEffect, useState } from "react";
import AllApiGirls from "../../components/lists/allapigirls";
import { useLocation } from "react-router-dom";

import SearchForTags from "../../components/sonstige/searchfortags";


const Models=(props)=>{

  const location = useLocation();
  
  const [hasEntered,setHasEntered] = useState(null);
 
  useEffect(() => {
    setHasEntered(null);
    if (location.state !== null) {
      setHasEntered(location.state.test);
    }
    window.scrollTo(0, 0);
  }, [location.state]);
  

 
return (
  <div>
    
    <SearchForTags />
    
    {!hasEntered&&<AllApiGirls />}
  </div>
);
};

export default Models;