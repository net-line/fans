import React, { useContext, useEffect, useState } from "react";
import FavBox from "../Cards/favbox";

//import Modeladvertorial from "../Cards/modeladvertorial";
import { Col, Row } from "reactstrap";


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
const [favGirls, setFavGirls] = useState([]);
useEffect(()=>{
 window.scrollTo(0, 0);
},[])
function loadData() {
   fetch(
     `https://api.deine.fans/api/favs/${userID}?authToken=${userToken}`
   ).then((res) => {
     if (res.ok) {
       res.json().then((data) => {
         console.log(data, "wir haben data");
         if (data.favorites.length > 0) {
           setFavGirls(data.favorites);
           setHasFavs(true);
         }
       });
     }
   });
          
}



useEffect(()=>{
  loadData()
 
},[])


    return (
      <div>
        {!isLoggedIn && !isPremium && <h1>Logge Dich zunächst ein</h1>}
        
        {hasFavs && favGirls && (
          <Row className="bg-light">
            
            {favGirls.map((favgirl, index) => (
              <Col xs="12" lg="6" key={`col${index}`}>
                <FavBox mygirl={favgirl.producerID} key={index} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
};

export default Favgirls;