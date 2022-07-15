import React, { useContext, useEffect, useState } from "react";
import FavBox from "../Cards/favbox";

//import Modeladvertorial from "../Cards/modeladvertorial";
import { Col, Row } from "reactstrap";
import useMyHttp from "../../hooks/myhttp";
import AuthContext from "../../context/testcontext";

const Favgirls = () =>{

const authCtx = useContext(AuthContext);

const userToken= authCtx.token
const userID= authCtx.userID
//const userToken=1234
//const userID=123
const isLoggedIn = authCtx.isLoggedIn;
const isPremium = authCtx.isPremium;
//const isLoggedIn = true;
//const isPremium = true;

const [hasFavs,setHasFavs]=useState(false);
const { isLoading, data, error, sendRequest } = useMyHttp();
function loadData() {
  //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
  sendRequest(
    `https://api.deine.fans/favs/${userID}?authToken=${userToken}`
  );
}



useEffect(()=>{
  loadData()
  setHasFavs(true)
},[data])
const TESTARRAY={pseudo:"Caro"}


    return (
      <div>
        {!isLoggedIn && !isPremium && <h1>Logge Dich zunächst ein</h1>}
        {isLoading && <h1>Lade Favoritenliste - - - </h1>}
        {error && <h1>{error}</h1>}
        {hasFavs && (
          <Row className="bg-light">
            <Col xs="12" lg="4">
              <FavBox mygirl={TESTARRAY} />
            </Col>
            <Col xs="12" lg="4">
              <FavBox mygirl={TESTARRAY} />
            </Col>
            <Col xs="12" lg="4">
              <FavBox mygirl={TESTARRAY} />
            </Col>
          </Row>
        )}
      </div>
    );
};

export default Favgirls;