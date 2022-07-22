import React, { useState } from "react";

import { useEffect } from "react";
import useMyHttp from "../../hooks/myhttp";
import Modeladvertorial from "../Cards/modeladvertorial";
import { useParams } from "react-router-dom";

const FilteredApiGirls = (props) => {

const params=useParams()



  const { isLoading, data, error, sendRequest } = useMyHttp();
  const [didIRun, setDidIrun] = useState(false)
  function fetchGirlsHandler() {
  
    sendRequest(`https://api.deine.fans/api/girls/query/%23${params.filterID}`);
    
  }
  function fetchGirlsHandler2() {
    setDidIrun(true);
    sendRequest(`https://api.deine.fans/api/girls/query/${params.filterID}`);
  }
  useEffect(() => {
    fetchGirlsHandler();
    window.scrollTo(0, 0);
    setDidIrun(false);
  }, [params]);
 
  return (
    <div>
      <div>
        {data && data.girls.length < 1 && !didIRun && (
          <h5>{fetchGirlsHandler2()}</h5>
        )}
        {data && data.girls.length < 1 && didIRun && (
          <h5>Leider keine passenden Girls gefunden</h5>
        )}
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

export default FilteredApiGirls;
