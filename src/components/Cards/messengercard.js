import React, {useState} from "react";

const Messengercard=(props)=>{
    const[message,setMessages] = useState([]);
    const [error,setError] = useState(null);
   
async function fetchMessagesHandler(){
    setError(null)
    try{
        const response = await fetch(
          `https://api.deine.fans/api/timeline?producerID=${props.id}`,
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
        if (!message){return <h5>No Data</h5>}
}
    catch(error){
        setError(error.message);
        setMessages([]);
    }
    
}
 
return (
  <div>
    <button onClick={fetchMessagesHandler}>Messenger:</button>
    {message && message.map((peops) => (
      <h5 key={peops.id}>{peops.id} </h5>
    ))}
    {!message && <h5>No Data</h5>}
    {error && <p>{error}</p>}
  </div>
);
};

export default Messengercard;