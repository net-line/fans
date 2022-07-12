import React, { useEffect } from "react";
import {useLocation, useParams} from "react-router-dom";
//import Messengercard from "../components/Cards/messengercard";
import Modeladvertorial from "../components/Cards/modeladvertorial";
import Allpostes from "../components/lists/allposts";
//import Allpostes from "../components/lists/allposts";
import { useStore } from "../components/store-hooks/store";
import useMyHttp from "../hooks/myhttp";



const Detailsite=(props)=>{

const params = useParams();

const mygirl =params.girlId
const location = useLocation();
console.log("hallo",location.state)
const  test  = location.state;


const girls=useStore()[0];
 //const dispatch = useStore()[1];
console.log(girls, mygirl)


 const { isLoading, data, error, sendRequest, clear } = useMyHttp();
 function fetchGirlsHandler() {
   //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
   sendRequest(
     `https://api.deine.fans/api/girls/${mygirl}`,
     "GET"
   );
   console.log(isLoading);
   console.log(data);
   console.log(error);
   console.log(clear);
   
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
              image={`https://d2cq08zcv5hf9g.cloudfront.net/480x360/${data.girl.steckbrief1ImageID}.webp`}
              secondimage={`https://d2cq08zcv5hf9g.cloudfront.net/240x180/${data.girl.previewImageID}.webp`}
              age={data.girl.age}
              numberofitems="2"
              key={data.girl.pseudo}
              isFav="false"
              id={data.girl.producerID}
              mymotto={`Meine Haarfarbe ist ${data.girl.hairColor} und ich habe ${data.girl.cupSize} Oberweite`}
            />
            <Allpostes girl={data.girl} />
          </div>
        )}
      </div>
    );
};

export default Detailsite;