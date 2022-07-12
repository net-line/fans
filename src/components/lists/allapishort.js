import React from "react";

import { useEffect } from "react";
import useMyHttp from "../../hooks/myhttp";

import Shortadvertorial from "../Cards/shortadvertorial";

const AllApiShort = () => {
  const { isLoading, data, error, sendRequest, clear } = useMyHttp();
  function fetchGirlsHandler() {
    //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
    sendRequest("https://api.deine.fans/api/girls", "GET");
    console.log(isLoading);
    console.log(data);
    console.log(error);
    console.log(clear);
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
            <Shortadvertorial
              name={girl.pseudo}
              image={`https://d2cq08zcv5hf9g.cloudfront.net/480x360/${girl.steckbrief1ImageID}.webp`}
              secondimage={`https://d2cq08zcv5hf9g.cloudfront.net/240x180/${girl.previewImageIDSoft}.webp`}
              age={girl.age}
              numberofitems="2"
              key={girl.pseudo}
              isFav="false"
              id={girl.producerID}
              mymotto={`Meine Haarfarbe ist ${girl.hairColor} und ich habe ${girl.cupSize} Oberweite`}
            />
          ))}
        {isLoading && <h5>Lade Daten</h5>}

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default AllApiShort;
