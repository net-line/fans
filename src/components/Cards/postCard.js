import React from "react";

import classes from "./postCard.module.css";
import SmallImageElement from "./smallimageElement";
import MyButton from "./WrapperComponents/myCard.js/myButton";

const PostCard = (props) =>{

var date = new Date(props.thepost.creationTime)
 .toLocaleDateString(2);

  

return (
  <div className={classes.box}>
    <p>{date}</p>
    <h5>{props.thepost.msgText}</h5>
    <p>{props.thepost.tags}</p>
    {props.thepost.freeMedia.length > 0 ? (
      <div>
        <small>Kostenlose Inhalte:</small>
        <div className="d-flex flex-wrap" style={{ gap: "4px" }}>
          {props.thepost.freeMedia.map((item) => (
            <div key={`a${item.guid}`} className="smallMediaPreview">
              <div key={`b${item.guid}`} className="smallMediaPreviewIcon">
                {item.type === "image" ? (
                  <h5>Bild</h5>
                ) : item.type === "video" ? (
                  <h5>Video</h5>
                ) : item.type === "audio" ? (
                  <h5>Sound</h5>
                ) : null}
              </div>
              <div key={`c${item.guid}`} className="w-100">
                <SmallImageElement
                  imgid={item.mediaID}
                  producerID={props.producerID}
                  token={props.authToken}
                  clientExtension=".webp"
                  dimension="320x160"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null}
    {props.thepost.payMedia.length > 0 ? (
      <div>
        <small>kostenpflichtige Inhalte:</small>
        <div className="d-flex flex-wrap" style={{ gap: "4px" }}>
          {props.thepost.payMedia.map((item) =>
            item.isPaid ? (
              <div key={`a${item.guid}`} className="smallMediaPreview">
                <div key={`b${item.guid}`} className="smallMediaPreviewIcon">
                  {item.type === "image" ? (
                    <h5>Bild </h5>
                  ) : item.type === "video" ? (
                    <h5>Video</h5>
                  ) : item.type === "audio" ? (
                    <h5>Sound</h5>
                  ) : null}
                </div>
                <div key={`c${item.guid}`} className="w-100">
                  <SmallImageElement
                    imgid={item.mediaID}
                    producerID={props.producerID}
                    token={props.authToken}
                    clientExtension=".webp"
                    dimension="320x160"
                  />
                </div>
              </div>
            ) : (
                
              <div key={`ba${item.guid}`}>
                <div key={`a${item.guid}`} className="smallMediaPreview">
                <div key={`b${item.guid}`} className="smallMediaPreviewIcon">
                  {item.type === "image" ? (
                    <h5>Bild </h5>
                  ) : item.type === "video" ? (
                    <h5>Video</h5>
                  ) : item.type === "audio" ? (
                    <h5>Sound</h5>
                  ) : null}
                </div>
                </div>
                {console.log(item.type)}
                <h5>
                  Schalte diesen Post für nur {props.thepost.price} EUR frei!
                </h5>
                <MyButton key={`bb${item.guid}`}>Kaufs Dir</MyButton>
              </div>
            )
          )}
        </div>
      </div>
    ) : null}
  </div>
);
} 

export default PostCard;