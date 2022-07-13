import React, { useContext, useEffect } from "react";
import {useLocation, useParams} from "react-router-dom";
//import Messengercard from "../components/Cards/messengercard";
import Modeladvertorial from "../components/Cards/modeladvertorial";
import MyButton from "../components/Cards/WrapperComponents/myCard.js/myButton";
import Allpostes from "../components/lists/allposts";
//import Allpostes from "../components/lists/allposts";

import AuthContext from "../context/testcontext";
import useMyHttp from "../hooks/myhttp";
import { Link } from "react-router-dom";
import SinglePost from "../components/lists/singlepost";



const Detailsite=(props)=>{

const params = useParams();
const authCtx= useContext(AuthContext);
const isPremium = authCtx.isPremium;
const mygirl =params.girlId;
const location = useLocation();
const  test  = location.state;



 const { isLoading, data,  sendRequest } = useMyHttp();
 function fetchGirlsHandler() {
   //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
   sendRequest(
     `https://api.deine.fans/api/girls/${mygirl}`,
     "GET"
   );
  
   
 }
 useEffect(() => {
   fetchGirlsHandler();
  
 }, [test]);

    return (
      <div>
        {isLoading && <p>Lädt noch</p>}

        {!isLoading && data && data.girl && (
          <div>
            <Modeladvertorial
              name={data.girl.pseudo}
              image={data.girl.steckbrief1ImageIDURLS.urlMedium}
              secondimage={data.girl.previewImageIDURLS.urlSmall}
              age={data.girl.age}
              numberofitems="2"
              key={data.girl.pseudo}
              isFav="false"
              id={data.girl.producerID}
              mymotto={data.girl.steckbriefText}
              hashtag={data.girl.hashTags}
            
            />
            {!isPremium && (
              <div>
                <h5>
                  Füge Deine Zahlungsinformationen hinzu, um alle Posts dieses
                  Girls sehen zu können
                </h5>
                <Link to="/addcard">
                  <MyButton>Hier klicken</MyButton>
                </Link>
              </div>
            )}
            {isPremium && <Allpostes girl={data.girl} />}
            <SinglePost girl={data.girl} />
          </div>
        )}
      </div>
    );
};

export default Detailsite;