import React, { useState } from "react";

import { useEffect} from "react";
import useMyHttp from "../../hooks/myhttp";
import Modeladvertorial from "../Cards/modeladvertorial";

const AllApiGirls = (props) => {
  const [isItFiltered, setIsItFiltered] = useState("")

  useEffect(()=>{
    if(props.hashtagged){
      var thing=props.hashtagged
      
      setIsItFiltered(thing)
   
    fetchGirlsHandler();
    }
    
  },[props])
  
  const [newdata, setNewdata] = useState(false)
  let { isLoading, data,error,sendRequest} = useMyHttp();
  function fetchGirlsHandler() {

    if(isItFiltered){
                    
                      //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
                      //sendRequest(`https://api.deine.fans/api/girls/query/%23blond`, "GET");
                     var mynewdata= data.girls.filter((o) => 
                     o.hashTags.includes(isItFiltered)
                     )
                     setNewdata(mynewdata);
                    
                    }else{
                            //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
                            sendRequest(
                              "https://api.deine.fans/api/girls",
                              "GET"
                            );
                          }
   
    
  }
  useEffect(() => {
    if(props.hashtagged){
      setIsItFiltered(props.hashtagged);
     fetchGirlsHandler();
    }   
  }, [data]);

  useEffect(() => {
    fetchGirlsHandler();
  }, []);
  return (
    <div>
      <div>
        {isItFiltered && <h1>{isItFiltered}</h1>}
        {isItFiltered &&
          newdata &&
          data.girls &&
          newdata.map((girl) => (
            <Modeladvertorial
              name={girl.pseudo}
              image={girl.steckbrief1ImageIDURLS.urlMedium}
              secondimage={girl.previewImageIDURLS.urlSmall}
              age={girl.age}
              numberofitems="2"
              key={girl.pseudo}
              isFav="false"
              id={girl.producerID}
              mymotto={girl.steckbriefText}
              hashtag={girl.hashTags}
            />
          ))}
        {!isItFiltered &&
          data &&
          data.girls &&
          data.girls.map((girl) => (
            <Modeladvertorial
              name={girl.pseudo}
              image={girl.steckbrief1ImageIDURLS.urlMedium}
              secondimage={girl.previewImageIDURLS.urlSmall}
              age={girl.age}
              numberofitems="2"
              key={girl.pseudo}
              isFav="false"
              id={girl.producerID}
              mymotto={girl.steckbriefText}
              hashtag={girl.hashTags}
            />
          ))}
        {isLoading && <h5>Lade Daten</h5>}

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default AllApiGirls;
