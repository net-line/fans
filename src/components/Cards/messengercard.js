import React, {useState} from "react";

const Messengercard=(props)=>{
    const[message,setMessages] = useState([]);
    const [error,setError] = useState(null);
async function fetchMessagesHandler(){
    setError(null)
    try{
        const response = await fetch(
          "http://63.35.190.168/api/timeline?producerID=1962125312",
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );
        const data = await response.json();
       
if(!response.ok){
    throw new Error(response.status)
}

        setMessages(data.posts);
}
    catch(error){
        setError(error.message);
    }
    
}
 
return (
  <div>
    <button onClick={fetchMessagesHandler}>Messenger:</button>
    {message.map((peops) => (
      <h5 key={peops.id}>{peops.id} </h5>
    ))}
    {error && <p>{error}</p>}
  </div>
);
};

export default Messengercard;