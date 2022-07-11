import MyButton from "./WrapperComponents/myCard.js/myButton";

import React from "react";
import useMyHttp from "../../hooks/myhttp";

const Messengercard=(props)=>{
  
 
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
  
  } 
 
return (
  <div>
    <div onClick={fetchMessagesHandler}>
      <MyButton>Messenger:</MyButton>
    </div>
   {data &&<div>
      {data && data.posts.map((peops) => <h5 key={peops.id}>{peops.id} </h5>)}
      {!data && <h5>No Data</h5>}
      {error && <p>{error}</p>}
    </div>}
  </div>
);
};

export default Messengercard;