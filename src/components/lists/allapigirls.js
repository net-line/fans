import React from "react";

import { useEffect, useState } from "react";
import useMyHttp from "../../hooks/myhttp";

const AllApiGirls = () => {
  const [hideme, setHideme] = useState(true);

  const { isLoading, data, error, sendRequest, clear } = useMyHttp();
  function fetchGirlsHandler() {
    //sendRequest(`https://api.deine.fans/api/images?producerID=${props.id}`);
    sendRequest(`https://api.deine.fans/api/girls`, "GET");
    console.log(isLoading);
    console.log(data);
    console.log(error);
    console.log(clear);
    setHideme(!hideme);
  }
  useEffect(() => {
    fetchGirlsHandler();
  }, []);
  return (
    <div>
      <div onClick={fetchGirlsHandler}>
        <button>Alle Girls:</button>
      </div>
      {hideme && (
        <div>
          {data &&
            data.girls &&
            data.girls.map((girls) => <h5 key={girls.id}>{girls.pseudo} </h5>)}
          {isLoading && <h5>Lade Daten</h5>}
          {data && !data.girls && !isLoading && <h5>No Data</h5>}

          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default AllApiGirls;
