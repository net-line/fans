import MyButton from "./WrapperComponents/myCard.js/myButton";

import React, { useEffect, useState } from "react";
import useMyHttp from "../../hooks/myhttp";

const Messengercard=(props)=>{
  
 const [isHidden, setIsHidden] = useState(true);
  const { isLoading, data, error, sendRequest, clear } = useMyHttp()
  function fetchMessagesHandler() {
    //sendRequest(`https://api.deine.fans/api/timeline?producerID=${props.id}`);
    sendRequest(
      `https://api.deine.fans/api/timeline?producerID=${props.id}`,
      "GET"
    );
    console.log(isLoading);
    console.log(data);
    console.log(error);
    console.log(clear);
   setIsHidden(!isHidden);
  } 
  useEffect(()=>{

    fetchMessagesHandler()
   
  },[]);
 
return (
  <div>
    <div onClick={fetchMessagesHandler}>
      <MyButton>Messenger:</MyButton>
    </div>
   {isHidden &&<div>
      {data &&data.posts && data.posts.map((peops) => <h5 key={peops.id}>{peops.id} </h5>)}
    {isLoading&&<h5>Lade Daten</h5>}
      {error && <p>{error}</p>}
    </div>}
  </div>
);
};

export default Messengercard;