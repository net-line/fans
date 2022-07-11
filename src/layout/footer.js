import React from "react";
import useHttp from "../components/store-hooks/http";


const Footer = () =>{
    
const {isLoading, data, error, sendRequest,clear} = useHttp();
function somehandler(){
    //sendRequest(`https://api.deine.fans/api/timeline?producerID=${props.id}`);
    sendRequest(
      "https://api.deine.fans/api/timeline?producerID=1962125312",
      "GET"
    );
    console.log(isLoading);
    console.log(data)
    console.log(error)
    console.log(clear)
}
    return(

        <div>
            
            <button onClick={somehandler}>button</button>
            <h3>Here be a footer</h3></div>
    )
};
export default Footer;