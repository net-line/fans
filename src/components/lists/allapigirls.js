import React from "react";

import { useEffect} from "react";
import useMyHttp from "../../hooks/myhttp";
import Modeladvertorial from "../Cards/modeladvertorial";

const AllApiGirls = () => {
  

  const { isLoading, data,error,sendRequest} = useMyHttp();
  function fetchGirlsHandler() {
    //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
    sendRequest("https://api.deine.fans/api/girls", "GET");
    
    
  }
  useEffect(() => {
    fetchGirlsHandler();
  }, []);
  return (
    <div>
      <div>
        {data &&
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
