import React, { Fragment, useEffect } from "react";
import useMyHttp from "../../hooks/myhttp";

const SmallImageElement=(props)=>{
const { data, isLoading, sendRequest } = useMyHttp();
function thishandler(){
sendRequest(
  `https://api.deine.fans/api/image/Get/${props.imgid}?producerID=${props.producerID}&authToken=${props.token}&dimension=${props.dimension}&clientExtension=${props.clientExtension}`,
  "GET"
);
}

useEffect(()=>{
    console.log(props)
    thishandler();
    
},[])
return (
  <Fragment>
    {isLoading && <h5>Bild lädt</h5>}
    {data && (
    
   
        <img
          src={data.image.imageURL}
          alt={data.image.imageID}
          className="w-100"
          style={{ cursor: "pointer" }}
        />
     
   
    )}
  </Fragment>
);
};

export default SmallImageElement

