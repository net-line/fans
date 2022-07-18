import React, {  useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import AuthContext from "../../../context/testcontext";
import FavBox from "../../Cards/favbox";



const AllSubscriptions = () => {

  const authCtx = useContext(AuthContext);

  const userToken = authCtx.token;
  const userID = authCtx.userID;
  const isLoggedIn = authCtx.isLoggedIn;
  const isPremium = authCtx.isPremium;
 

  const [hasSubs, setHasSubs] = useState(false);
  const [subGirls, setSubGirls] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  function loadData() {
    fetch(
      `https://api.deine.fans/api/subscriptions/${userID}?authToken=${userToken}`
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
           console.log(data);
          if (data.subscriptions.length > 0) {
            setSubGirls(data.subscriptions);
            setHasSubs(true);
          }
        });
      }
    });
  }

  useEffect(() => {
    loadData();
   
  }, []);

  return (
    <div>
      {!isLoggedIn && !isPremium && <h1>Logge Dich zunächst ein</h1>}

      {hasSubs && subGirls && (
        <Row className="bg-light">
          {subGirls.map((subgirl, index) => (
            <Col xs="12" lg="6" key={`col${index}`}>
              <FavBox mygirl={subgirl.producerID} key={index} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default AllSubscriptions;
