import React, { useContext, useEffect } from "react";
import {useLocation, useParams} from "react-router-dom";
//import Messengercard from "../components/Cards/messengercard";
import Modeladvertorial from "../components/Cards/modeladvertorial";

//import Allpostes from "../components/lists/allposts";
//import Allpostes from "../components/lists/allposts";

import AuthContext from "../context/testcontext";
import useMyHttp from "../hooks/myhttp";
import { Link } from "react-router-dom";
//import SinglePost from "../components/lists/singlepost";
import AllTimeLine from "../components/lists/alltimeline";
import classes from "./detail.module.css";
import { useTranslation } from "react-i18next";
import AllApiGirls from "../components/lists/allapigirls";


const Detailsite=(props)=>{

const params = useParams();
const authCtx= useContext(AuthContext);
const isPremium = authCtx.isPremium;
const mygirl =params.girlId;
const location = useLocation();
const  test  = location.state;

const {t}=useTranslation();

 const { isLoading, data,  sendRequest } = useMyHttp();
 function fetchGirlsHandler() {
   //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
   sendRequest(
     `https://api.deine.fans/api/girls/${mygirl}`,
     "GET"
   );
  
   
 }

 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);
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
            {authCtx.isLoggedIn && isPremium && (
              <AllTimeLine
                girlid={data.girl.producerID}
                girl={data.girl.pseudo}
              />
            )}

            {/* {isPremium && <Allpostes girl={data.girl} />}
            <SinglePost girl={data.girl} /> */}
          </div>
        )}
        {!isPremium && authCtx.isLoggedIn && data && data.girl && (
          <div>
            <h5 className={classes.head}>{t("addpaylong")}</h5>
            <Link to="/profile" className={classes.bigbutton}>
              <div>{t("addpay")}</div>
            </Link>
          </div>
        )}
        {!isPremium && data && !data.girl && (
          <div>
            <h5>
              {t("notfound")} {t("tryoneofthese")}
            </h5>
            <AllApiGirls />
          </div>
        )}
      </div>
    );
};

export default Detailsite;