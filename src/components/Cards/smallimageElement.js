import React, { Fragment, useEffect, useState } from "react";
import useMyHttp from "../../hooks/myhttp";
import classes from "./postCard.module.css";
import ShowImageModal from "./showimagemodal";
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
const [showModal,setShowModal] = useState()
function toggleModal(){
  setShowModal(!showModal);
}
return (
  <Fragment>
    {isLoading && <h5>Bild lädt</h5>}
    {data && (
      <img
        src={data.image.imageURL}
        alt={data.image.imageID}
        className={classes.imageElement}
        style={{ cursor: "pointer" }}
        onClick={toggleModal}
      />
    )}
    {data && showModal && (
      <ShowImageModal
        image={data.image.imageURL}
        getback={toggleModal}
        
      />
    )}
  </Fragment>
);
};

export default SmallImageElement

