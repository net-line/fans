import Modelcard from "../Cards/modelcard";
import React, { useEffect } from "react";
import useMyHttp from "../../hooks/myhttp";
//import { useStore } from "../store-hooks/store";

const SinglePost = (props) => {
  
  const { isLoading, data, error, sendRequest, clear } = useMyHttp();
  function fetchGirlsHandler() {
    //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
    sendRequest(
      `https://api.deine.fans/api/images/?producerID=${props.girl.producerID}`,
      "GET"
    )
    console.log(isLoading);
    console.log(data);
    console.log(error);
    console.log(clear);
    
  }
  useEffect(() => {
    fetchGirlsHandler();
   
  }, []);

  return (
    <div>
        
      {!isLoading &&
        data &&
        data.images &&
       
        
        data.images.map((image) => 
        
        (
          <Modelcard
            name={props.girl.pseudo}
            key={image.imageID}
            image={image.imageURL}
            content={image.uploadTime}
          />
        ))[0]}
    </div>
  );
};

export default SinglePost;
