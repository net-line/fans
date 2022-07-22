import React, { useState } from "react";

import classes from "./postCard.module.css";
import SmallImageElement from "./smallimageElement";
//import MyButton from "./WrapperComponents/myCard.js/myButton";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OTPModal from "../payment/otp";
//import AuthContext from "../../context/testcontext";

const PostCard = (props) =>{
console.log("postcardprop",props)
var date = new Date(props.thepost.creationTime)
 .toLocaleDateString(2);
//const authCtx=useContext(AuthContext);
  const {t}=useTranslation();
const [showModal,setshowModal] = useState(false)
function toggleModal () {
  setshowModal(!showModal);
}
function gotit(props){
  console.log(props)
  toggleModal();
}
return (
  <div className={classes.timeline}>
    <div className={classes.timelinecontent}>
      <Row className={classes.row}>
        <Col xs="12" lg="6" className={classes.timelinetitle}>
          Neuer Eintrag von{" "}
          <strong>
            <Link to={`../${props.girl}`}>{props.girl}</Link>
          </strong>
        </Col>
        <Col xs="12" lg="6" className={classes.timelinedate}>
          {date}
        </Col>

        <p className={classes.heading}>{props.thepost.msgText}</p>
        <p>{props.thepost.tags}</p>
        <div className={classes.timelinemenu}>
          <Link
            className={classes.timelinemenuitem}
            to={`/${props.girl}`}
            state={{ test: "1" }}
          >
            {t("toprofile")}
          </Link>
          <span> </span>
          {/* {props.thepost.favs.filter((el) => el.userID === authCtx.userID)} ? (
          <Link className={classes.timelinemenuitem} to="/collection">
            Mehr
          </Link>
          ) : <h5>Add to Collection</h5> */}
          <span> </span>
          <Link className={classes.timelinemenuitem} to="#">
            Mehr
          </Link>
        </div>
        {props.thepost.freeMedia.length > 0 ? (
          <div>
            <small>{t("forfree")}</small>
            <div className="">
              {props.thepost.freeMedia.map((item) => (
                <div
                  key={`a${item.guid}`}
                  className={classes.smallMediaPreview}
                >
                  <div
                    key={`b${item.guid}`}
                    className={classes.smallMediaPreviewIcon}
                  >
                    {item.type === "image" ? (
                      <h5>Bild</h5>
                    ) : item.type === "video" ? (
                      <h5>Video</h5>
                    ) : item.type === "audio" ? (
                      <h5>Sound</h5>
                    ) : null}
                  </div>
                  <div key={`c${item.guid}`} className={classes.imageElement}>
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
            <small>{t("forpay")}</small>
            <div className="" style={{ gap: "4px" }}>
              {props.thepost.payMedia.map((item) =>
                item.isPaid ? (
                  <div
                    key={`a${item.guid}`}
                    className={classes.smallMediaPreview}
                  >
                    <div
                      key={`b${item.guid}`}
                      className="smallMediaPreviewIcon"
                    >
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
                    <div
                      key={`a${item.guid}`}
                      className={classes.smallMediaPreview}
                    >
                      <div
                        key={`b${item.guid}`}
                        className="smallMediaPreviewIcon"
                      >
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
                      {t("getthisforonly")} {props.thepost.price} EUR!
                    </h5>
                    <div
                      className={classes.bigbutton}
                      key={`bb${item.guid}`}
                      onClick={toggleModal}
                    >
                      {t("freischalten")}
                    </div>
                    {showModal && (
                      <OTPModal
                        price={props.thepost.price}
                        Zahlungsmethode="Kreditkarte"
                        item="Diesen Post"
                        getbackclose={gotit}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        ) : null}
      </Row>
    </div>
  </div>
);
} 

export default PostCard;